# Supabase security remediation - The Diagnostic Bay

Status: **STAGED - not applied.** Requires Danielle's explicit approval before
anything runs against the database (project rule: no production permission
changes without checkpoint approval).

Migration: [`supabase/migrations/20261105120000_security_remediation.sql`](../supabase/migrations/20261105120000_security_remediation.sql)

## Current state (verified live 2026-11-05)

- Project: `The Diagnostic Bay` (ref `rwehmmvjahpfeugfaxis`), Secondary Supabase
  account, ACTIVE_HEALTHY. All 5 public tables have **0 rows**; the frontend is
  not connected to Supabase.
- Supabase's security advisor reports **no lints**. That does NOT mean secure:
  the findings below live in grants/policies that the advisor does not flag.

## Findings and fixes

| # | Finding (verified) | Fix in migration |
|---|---|---|
| F1 | `anon` AND `authenticated` hold SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER on all 5 tables | `REVOKE ALL` from both roles, then re-grant least privilege |
| F2 | RLS enabled but not **forced** on all 5 tables | `FORCE ROW LEVEL SECURITY` on all 5 |
| F3 | `profiles` public SELECT exposes `email` and `role` | Public SELECT policy dropped; column-level SELECT grant excludes `email`/`role` |
| F4 | Users can UPDATE their own profile row, including `role` (admin self-promotion) | Column-level UPDATE grant excludes `email` and `role` |
| F5 | Shared `diagnostic_cases` readable by anyone, all columns; policy name mentions VINs that don't exist | Shared-case SELECT policy dropped until a real sharing design exists |

`anon` ends up with **no table privileges at all**: every feature is
user-scoped, so anonymous access buys nothing.

Owner-scoped policies (garages, maintenance reminders, repair records,
diagnostic cases, own-profile read/update) are already correctly scoped with
`auth.uid()` and are kept unchanged.

## Why grant-level fixes (not just policies)

RLS policies filter **rows**; they cannot hide **columns**, and a permissive
policy plus a blanket grant is how F3/F4 existed. Postgres column-level GRANTs
apply before any policy logic, so excluding `email` and `role` from the grants
makes both impossible client-side regardless of future policy edits.

## Zero-impact statement

All tables are empty and no code calls Supabase today. Applying this changes
nothing visible; it only closes doors before anything walks through them.

## How to apply (after approval)

1. Danielle approves the PR and the change itself.
2. Paste the migration into the Supabase dashboard SQL editor for project
   `rwehmmvjahpfeugfaxis` and run it (or `supabase db push` once the CLI is
   wired). There is no prior migration history (schema was created via the
   dashboard), so this becomes the first tracked migration.
3. Run the verification queries below.

## Verification queries (run after applying)

```sql
-- 1. RLS forced on everything
SELECT relname, relrowsecurity, relforcerowsecurity
FROM pg_class JOIN pg_namespace n ON n.oid = relnamespace
WHERE nspname = 'public' AND relkind = 'r';

-- 2. No anon/authenticated TRUNCATE anywhere; profiles has no email/role grants
SELECT table_name, grantee, privilege_type
FROM information_schema.role_table_grants
WHERE table_schema = 'public' AND grantee IN ('anon','authenticated')
ORDER BY 1, 2, 3;

-- 3. Policy list: public-profile + shared-case policies gone
SELECT tablename, policyname, cmd FROM pg_policies
WHERE schemaname = 'public' ORDER BY 1, 2;
```

Expected: `relforcerowsecurity = true` on all 5; no TRUNCATE/DELETE/UPDATE/INSERT
for `anon`; `profiles` grants reference only the safe column list; policy count
drops from 10 to 8.

## Rollback plan

The pre-change state is fully recorded (grants, RLS flags, policies with their
USING/WITH CHECK expressions). Rollback, in order:

```sql
begin;

-- restore policies first (drops rely on grants, not vice versa)
create policy "Public profiles are viewable by everyone."
  on public.profiles for select using (true);
create policy "Anyone can view shared cases with hidden VINs."
  on public.diagnostic_cases for select using (is_shared = true);

-- restore blanket grants
grant all privileges on table
  public.profiles, public.garages, public.diagnostic_cases,
  public.maintenance_reminders, public.repair_records
to anon, authenticated;

-- unforce RLS
alter table public.profiles              no force row level security;
alter table public.garages               no force row level security;
alter table public.diagnostic_cases      no force row level security;
alter table public.maintenance_reminders no force row level security;
alter table public.repair_records        no force row level security;

commit;
```

## Open items (decisions, not blockers)

- When the accounts feature is built: profiles INSERT flow. Recommended: a
  `SECURITY DEFINER` trigger on `auth.users` that creates the profile with
  `role = 'user'`, rather than any client-writable INSERT grant.
- If case sharing becomes a real feature, design it properly: a shared-view
  layer (view or RPC returning only safe columns) instead of a whole-row
  public SELECT policy.
- `updated_at` is maintained by the app, not a trigger (no user-space triggers
  exist on these tables). Optional follow-up: add an `update_updated_at`
  trigger when the backend is connected.
