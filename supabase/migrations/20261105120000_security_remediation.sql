-- Supabase security remediation - The Diagnostic Bay
-- Status: STAGED. Do not apply until Danielle approves (permission rules: no
-- production permission changes without explicit checkpoint approval).
--
-- Fixes the findings recorded in docs/remediation-implementation-plan.md
-- and re-verified live on 2026-11-05:
--   F1. anon + authenticated hold SELECT/INSERT/UPDATE/DELETE/TRUNCATE on all
--       5 public tables (over-broad grants).
--   F2. RLS enabled but NOT forced on all 5 tables.
--   F3. "Public profiles are viewable by everyone" exposes email (and role).
--   F4. "Users can update their own profile" lets a user set their own `role`
--       column (self-promotion to admin) because the policy is row-scoped but
--       not column-scoped.
--   F5. "Anyone can view shared cases with hidden VINs" exposes every column
--       of shared diagnostic_cases (notes, user_id). The table has no VIN
--       column, so the policy name is stale as well.
--
-- All tables are currently 0 rows and no client uses Supabase, so applying
-- this is zero-impact today. It is the gate before any backend connection.

begin;

-- ------------------------------------------------------------------
-- F2: force row-level security (even table owners must pass RLS)
-- ------------------------------------------------------------------
alter table public.profiles              force row level security;
alter table public.garages               force row level security;
alter table public.diagnostic_cases      force row level security;
alter table public.maintenance_reminders force row level security;
alter table public.repair_records        force row level security;

-- ------------------------------------------------------------------
-- F1: clear the blanket grants (removes TRUNCATE, REFERENCES, TRIGGER,
-- DELETE, etc. from anon and authenticated)
-- ------------------------------------------------------------------
revoke all privileges on table
  public.profiles,
  public.garages,
  public.diagnostic_cases,
  public.maintenance_reminders,
  public.repair_records
from anon, authenticated;

-- ------------------------------------------------------------------
-- Least-privilege re-grants
--
-- anon: nothing. Every feature is user-scoped; the site is not
--       connected to Supabase, so public reads buy nothing.
--
-- authenticated: exactly what the planned app needs.
--
-- F3 + F4 are fixed at the GRANT level, which no RLS policy can bypass:
-- `email` and `role` are not in any grant, so no query and no policy
-- change can read or write them client-side.
-- ------------------------------------------------------------------

-- profiles: read own non-sensitive columns; update only profile fields.
grant select (id, full_name, skill_level, preferred_language, created_at, updated_at)
  on public.profiles to authenticated;
grant update (full_name, skill_level, preferred_language, updated_at)
  on public.profiles to authenticated;

-- NOTE: no INSERT grant on profiles. There is currently no INSERT policy and
-- no signup trigger, so rows can only be created with the service role.
-- When the accounts feature is built, decide deliberately: a trigger on
-- auth.users (SECURITY DEFINER, sets role to the default 'user') is safer
-- than a client-writable INSERT grant.

-- user-scoped data tables: full CRUD, RLS keeps each user to their own rows
grant select, insert, update, delete on public.garages               to authenticated;
grant select, insert, update, delete on public.maintenance_reminders to authenticated;
grant select, insert, update, delete on public.repair_records        to authenticated;
grant select, insert, update, delete on public.diagnostic_cases      to authenticated;

-- ------------------------------------------------------------------
-- F3: close public profile browsing; users see only their own row
-- ------------------------------------------------------------------
drop policy "Public profiles are viewable by everyone." on public.profiles;
create policy "Users can view their own profile."
  on public.profiles
  for select to authenticated
  using (auth.uid() = id);

-- ------------------------------------------------------------------
-- F5: close the shared-cases public view until a real sharing design
-- exists (column-limited view or a join table). The old policy name
-- claimed hidden VINs, but diagnostic_cases has no VIN column.
-- ------------------------------------------------------------------
drop policy "Anyone can view shared cases with hidden VINs." on public.diagnostic_cases;

-- The existing owner-scoped policies on garages, maintenance_reminders,
-- repair_records, diagnostic_cases, and the own-row UPDATE policy on
-- profiles are already correctly scoped (auth.uid() = owner) and are kept.

commit;
