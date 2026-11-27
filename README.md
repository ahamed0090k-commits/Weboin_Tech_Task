# PIXORA — Creative Digital Agency

A modern, responsive dark-themed Creative Digital Agency homepage built with **React.js**, **Vite**, **ES6+ JavaScript**, **HTML5**, **CSS3**, and **Lucide React**.

## Highlights & React Architecture

- **Functional Components & Props**: Reusable `Logo`, `SectionHeader`, `ServiceCard`, `ProjectCard`, and `ProjectModal` components driven by structured data arrays in `src/data/agencyData.js`.
- **Hooks (`useState`, `useEffect`)**:
  - `Navbar`: Sticky scroll glassmorphism, active section tracking, responsive mobile drawer, and `Escape` / viewport-resize listeners.
  - `Hero`: Animated cubic-eased statistics counters (`50+`, `30+`, `5+`) respecting `prefers-reduced-motion`.
  - `Portfolio`: Category filtering state (`All`, `Web Development`, `UI/UX Design`, `Web Design`, `Branding & Development`) and accessible case-study modal preview.
  - `Contact`: Controlled form inputs (`useState`), live field-error clearing (`onChange`), required-field & email-format validation (`onSubmit`), frontend demo success banner, and automatic form reset.
- **Design System**: Custom CSS variables (`src/styles/variables.css`) implementing the `#0B0B0F` / `#14141B` / `#191920` dark palette with `#B8FF3B` acid-lime accents and responsive CSS Grid layouts without external UI frameworks.

## Running Locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```
