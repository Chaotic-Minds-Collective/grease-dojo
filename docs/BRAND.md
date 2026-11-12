# The Diagnostic Bay - Brand Guide

Approved by Danielle, November 11 2026.

## Logo

Circular neon-orange badge: exposed-brain skull (Chaotic Creations motif), aviator
goggles, black bandana, skeleton hand holding an OBD-II scanner reading "WE FIND IT",
crossed wrenches and lightning bolts. Arc text: "THE DIAGNOSTIC BAY" (top),
"WE HELP YOU FIND THE FAULT" (bottom).

Variant set (generated from master badge, pending final vector exports):

- Master badge (full color)
- Simplified skull favicon / app icon
- One-color monochrome stamp version
- Horizontal header lockup with wordmark and tagline

Retired: the "Torque" human mascot concept (Oct 31). The skull badge is the sole
brand identity. The earlier cyan/emblem concept board is historical reference only.

## Tagline

"We help you find the fault - or teach you to find it."

## Color palette

| Token | Hex | Role |
|---|---|---|
| Fire orange | #FF7A18 | Primary brand accent: buttons, links, hovers, icons |
| Colombian yellow | #FCD116 | Highlights, badges, emphasis (replaces old gold) |
| Colombian red | #CE1126 | Alerts and safety warnings only |
| Colombian blue | #003893 | Info accents on surfaces |
| Colombian blue bright | #4D9DFF | Info accents as text on dark backgrounds |
| Charcoal | #101012 | Page background |
| Panel charcoal | #1C1C22 | Cards, panels, console surfaces |
| Warm white | #F2F5F7 | Body text |

Red is reserved exclusively for safety/warning semantics. Blue carries the
Colombian heritage accent. Yellow is the emphasis color. Orange is the brand.

## Typography

Current: Inter (system stack). Candidate to evaluate: a bold industrial display
face for headings to echo the badge lettering - decision pending.

## Implementation

Theme lives in `src/brand-refresh.css`, loaded after `src/index.css`. Variable
names --cyan/--gold/--red are kept for cascade compatibility but carry the new
brand values. Remove the import in `src/main.tsx` to revert the entire rebrand.
