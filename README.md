# Grease Dojo

**Chaotic Minds Collective's AI-assisted automotive diagnostics reference project.**


**AI-assisted automotive diagnostics — educational reference library.**

A bilingual (EN/ES) diagnostic reference site for DIYers, students, and shop professionals. Search trouble codes, browse field guides, and run safety-knowledge checks — all from a privacy-first client-side app.

**AI assistant: Torque**

---

## Features

- **Trouble code library** — 50+ diagnostic trouble codes with symptom descriptions, common causes, and diagnostic steps
- **Field guide topics** — Summary-only entries for common complaints; detailed step-by-step walkthroughs are not yet available.
- **Safety lesson quiz** — 15-question assessment covering lift safety, PPE, brake dust, fuel systems, and electrical hazards
- **Bilingual EN/ES** — Spanish translations cover selected content; some library entries may remain in English.
- **Case worksheet** — Build a shareable case file for your mechanic with vehicle info, symptoms, conditions, and safety flags
- **Data handling** — The case worksheet stays in browser memory and is not sent to the application server. The embedded contact form is provided by Tally; submissions are sent to Tally. Review [Tally’s Privacy Notice](https://tally.so/help/privacy-policy) before submitting, and do not include sensitive personal information.
- **Dark garage theme** — Electric blue, fire orange, and tricolor accents with automotive garage aesthetics

## Tech Stack

- **React + TypeScript** — Vite SPA
- **GitHub Pages** — Static deployment
- **Supabase** — (planned) Future premium features
- **Cloudflare** — (planned) Edge functions and AI integration

## Development

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
npm run preview
```

## Project Status

Launched and live at [https://chaotic-minds-collective.github.io/grease-dojo/](https://chaotic-minds-collective.github.io/grease-dojo/).

Library content is preliminary and awaiting qualified mechanic review and source verification. It is educational reference only; always verify with vehicle-specific service information.

---

Built by **Chaotic Minds Collective** — "The Method To Your Madness."
