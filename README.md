# The Greasy Dojo

**Where diagnostic logic meets grease-monkey know-how.**

The Greasy Dojo is an educational automotive-diagnostic concept build from [Chaotic Minds Collective](https://github.com/Chaotic-Minds-Collective): a plain-language library of OBD-II trouble codes, field guides, symptom starting points, and a safety lesson - written for people who want to understand what their car is telling them, not just clear a light.

**Live site:** https://chaotic-minds-collective.github.io/grease-dojo/

> ## Status: concept build, drafts under mechanic review
> Every code entry, guide, and quiz answer in this repository is an **educational draft**. The first library rounds came from supplied mechanic-review drafts; the transmission entries (P0700, P0715, P0730 and the shifting guide) were drafted without a mechanic and are explicitly marked *review pending*.
>
> **Nothing here is a repair instruction.** Vehicle-specific specifications and authoritative service references have not been supplied or verified. Always confirm against factory service information and a qualified technician before acting on anything in this library.

## What's inside

| Area | Content |
|---|---|
| Diagnostic Lab | 15 trouble codes across engine, air/fuel, electrical, temperature, and transmission - each with meaning, symptoms, possible causes, and sensible next checks |
| Fix Database | 7 field guides (battery, clicking/no-start, overheating, rough idle, check-engine basics, scan-tool basics, won't-shift/slipping) |
| Symptoms | 4 quick-start symptom cards that pre-load a search |
| Guided Intake | A question-driven intake flow that narrows toward a search |
| Learning | The safety lesson with a 9-question quiz |
| Reference | Glossary and reference desk |

Search handles exact codes and phrases first, then falls back to the closest-ranked topics so natural-language questions like *"car won't shift"* still land somewhere useful.

## Site behavior

- **Nine pages** via hash routing (`#/lab`, `#/symptoms`, `#/triage`, `#/guides`, `#/learning`, `#/reference`, `#/about`, `#/contact`), with an always-visible tab strip in the sticky header - no hamburger menu, the active tab stays highlighted, and legacy section anchors (for example `#guides`) still resolve to the right page.
- **Detail dialogs** open from every search result, lab card, and guide card; related references inside a dialog link across the library and reset the scroll to the top.
- **Theme:** electric blue on navy-black, sampled from the Greasy Dojo key art, with silver headlines, a soft blue glow, Colombian yellow/red tricolor accents, and fire orange kept for the start-diagnosis call-to-action.

## Tech

- React + TypeScript + Vite, static output - no backend, no tracking
- Deployed automatically to **GitHub Pages** from `main` via `deploy-pages.yml`
- CI: `quality-checks.yml` (typecheck + build) and CodeQL security scanning on every PR
- Content lives in typed data modules: `src/data/diagnosticsData.ts`, `src/data/transmissionData.ts`, and friends; `src/data/searchFallback.ts` exports the combined library view and the search implementation
- The visual theme layers in `src/dojo-polish.css`, imported last so it can retune base styles without forking them

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (typecheck + bundle)
npm run preview   # serve the production build locally
```

Changes land through feature branches and pull requests; merging to `main` triggers the Pages deployment.

## Roadmap

1. **Mechanic review** of all draft content - especially the transmission entries - plus authoritative references for every claim
2. Refresh the in-app content set alongside review (library grows per approved draft rounds)
3. Domain decision (`greasydojo.com`, ~$10-15/year - not approved yet)
4. Choose the AI assistant name for the diagnostic helper
5. Rename `package.json` to match the project name (deferred while a lockfile relay risk exists)

## Repo note

The repository is named `grease-dojo` and the project site URL keeps the historical `/grease-dojo/` path; the public brand is **The Greasy Dojo**.
