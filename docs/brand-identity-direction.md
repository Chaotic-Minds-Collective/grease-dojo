# The Diagnostic Bay — Original Identity Direction

**Status:** Working creative direction. Not final brand approval.
**Project label:** The Diagnostic Bay.
**Brand name, tagline, mascot name, helper name, logo, and production artwork:** Undecided.

## Creative objective

Create a commercially credible automotive diagnostic identity with the energy of battle anime and the atmosphere of automotive horror. The tone should feel intense, capable, slightly unsettling, and dryly funny—not childish, generic, or a parody of an existing franchise.

The visual language should remain legible and trustworthy around technical information. Horror and character art support the experience; they must never obscure diagnostic warnings, evidence, or safety instructions.

## Original character study

The first original character study uses:
- A hooded, hard-wearing mechanic silhouette with an asymmetrical, weathered respirator.
- A diagnostic scanner in one hand and a conventional ratchet in the other.
- Restrained gold energy shapes for high-intensity moments, cyan signal lines, and small warning-red accents.
- Reinforced industrial coveralls, visible stitching, and a small yellow/blue/red seam detail as a subtle Colombian cultural reference.
- A guarded, focused expression rather than a recognizable franchise face.

The character is deliberately unnamed. It is a concept asset, not an approved mascot or final production illustration.

## Intellectual-property guardrails

The intended inspiration is tonal only. Do not reproduce or closely imitate:
- Existing anime protagonists, hair silhouettes, transformations, uniforms, insignias, or franchise marks.
- Freddy Krueger's face, glove, hat, striped sweater, burn pattern, or signature composition.
- Any recognizable weapon, costume, character pose, or promotional-art arrangement from those properties.

The current concept uses no franchise character, franchise logo, signature costume, or blade glove. Future artwork must remain original and receive an IP review before commercial release.

## Provisional visual system

| Role | Working value | Intended use |
|---|---|---|
| Obsidian | #0B0D12 | Main background and negative space |
| Steel | #18232D | Panels, surfaces, and industrial depth |
| Electric cyan | #32E6E6 | Diagnostic signals, active states, links |
| Warning red | #E94B4B | Hazard emphasis and restrained accent |
| Muted gold | #E2BC58 | Energy, key highlights, and hierarchy |

These values remain provisional. Red is reserved for actual warnings where possible; it should not become decorative noise.

## Design rules

1. Keep the diagnostic interface readable before making it dramatic.
2. Use the mascot as a supporting identity element, not as a substitute for technical content.
3. Use gold and cyan energy effects sparingly; reserve motion for meaningful state changes.
4. Maintain strong contrast, keyboard visibility, reduced-motion support, and mobile-safe compositions.
5. Keep the emblem usable at small sizes without text.
6. Do not lock the project label into a permanent commercial logo until naming and preliminary trademark/common-law review are complete.

## Approval gates

Before final identity approval:
1. Audit all existing names, copy, logos, and artwork.
2. Conduct preliminary trademark and common-law searches.
3. Record copyright, trademark, and licensing risks.
4. Obtain owner approval for the final name, tagline, mascot, helper name, logo, and production artwork.

Searches are preliminary and do not guarantee legal clearance. Obtain qualified legal advice where material uncertainty remains.

## Asset inventory

| Asset | Path | Purpose | Status |
|---|---|---|---|
| Diagnostic emblem | public/assets/brand-mark.svg | Shared mark used in the header, learning preview, about panel, and footer | Original concept; provisional |
| Mechanic character concept | public/assets/brand-mascot-concept.svg | Homepage hero illustration | Original concept; unnamed; not final production art |
| Hero integration | src/components/HeroSection.tsx | Public-facing character and illustrative diagnostic console | Implemented on this feature branch |
| Identity styling | src/index.css | Character panel, labels, and visual treatment | Implemented on this feature branch |

The provisional palette remains Obsidian #0B0D12, Steel #18232D, Electric cyan #32E6E6, Warning red #E94B4B, and Muted gold #E2BC58. Warning red should remain semantically meaningful.

## Project decision log — 2026-10-30

**Decision:** Continue building the public-facing educational experience and original identity before beginning one comprehensive testing and remediation phase.

- Continue feature development in isolated GitHub branches.
- Avoid repeatedly pausing for full test cycles while features are unfinished.
- Preserve normal development discipline; do not knowingly release broken or unsafe code.
- Consolidate browser, responsive, accessibility, automotive-content, security, and end-to-end remediation once the public foundation is assembled.
- The Diagnostic Bay remains the project label, not an approved commercial brand. Burning Oil Garage, Grease Dojo, and other explored names remain concepts.
- The mascot and helper remain unnamed. The current emblem and character are concept assets, not final approved artwork.
- All three supplied content rounds remain unverified drafts pending mechanic review and authoritative references.
- The safety lesson source contains questions 1–15 only; the planned 20-question lesson is not complete.
- No deployment, domain purchase, paid service, production database change, or production release is authorized by this development work.
- Existing Supabase security findings remain separately tracked; this branch does not attempt database remediation or introduce a frontend Supabase connection.
