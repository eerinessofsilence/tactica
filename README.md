# Tactica

Tactica is a frontend prototype for a revenue workspace. The project combines a marketing landing page with an interactive demo shell that previews how a CRM, pipeline dashboard, scenario planning, and execution tracking can live in one product.

## Current Scope

- Marketing site at `/`
- Interactive demo workspace at `/demo`
- Theme switching with dark/light persistence
- Frontend-only implementation with static demo data

There is no backend, authentication flow, or live data layer yet. Links like `/login` and `/signup` are placeholders for the next application phase.

## Product Direction

Tactica is positioned as a revenue workspace for teams that need:

- pipeline visibility
- account context
- next-step planning
- scenario comparison
- execution tracking

The landing page explains the product narrative. The demo route shows the product shell itself.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4 utilities
- Lucide React icons

## Routes

- `/` — marketing homepage
- `/demo` — interactive workspace preview

## Getting Started

The app lives in `frontend`, so all npm commands should be run from that directory.

```bash
cd frontend
npm install
npm run dev
```

The local dev server will start with Vite.

## Available Commands

Run these from `frontend/`:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
tactica/
├── README.md
└── frontend/
    ├── components/
    │   ├── demo/
    │   ├── home/
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   └── Layout.tsx
    ├── src/
    │   ├── pages/
    │   │   ├── Demo.tsx
    │   │   └── Home.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   └── theme.tsx
    └── package.json
```

## Key Files

- `frontend/src/App.tsx` — route map for the public app
- `frontend/src/pages/Home.tsx` — homepage composition
- `frontend/src/pages/Demo.tsx` — interactive demo workspace with static dataset
- `frontend/components/home/*` — landing page sections
- `frontend/components/demo/*` — dashboard/workspace UI blocks
- `frontend/src/theme.tsx` — theme provider and local storage persistence

## Demo Workspace Notes

The demo route is intentionally static for now:

- account data is embedded in `Demo.tsx`
- sidebar navigation switches between workspace views
- selecting an account updates scenarios, tasks, and activity panels

This keeps the product story visible before the real app shell, auth, and data model are implemented.

## Next Logical Steps

- add real `/login` and `/signup` routes
- move demo data into a dedicated mock data module
- add URL state for demo sections
- build an authenticated `/app/*` shell
- connect accounts, pipeline, and tasks to a backend
