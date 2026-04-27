# Tactica

Tactica is a revenue workspace prototype. The project currently combines a React marketing site and demo shell with a minimal FastAPI backend.

## Current Scope

- Marketing site at `/`
- Interactive demo workspace at `/demo`
- Minimal FastAPI API entrypoint
- Dark-only frontend theme
- Frontend demo data is still static

The backend is intentionally small right now. There is still no real CRM data model, dashboard persistence, auth flow, or authenticated `/app/*` product shell yet.

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
- FastAPI
- Uvicorn

## Routes

- `/` — marketing homepage
- `/demo` — interactive workspace preview

Backend API:

- `/` — service status
- `/health` — health check

## Getting Started

Frontend commands should be run from `frontend`.

```bash
cd frontend
npm install
npm run dev
```

Backend commands should be run from `backend`.

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

The frontend starts with Vite. The backend starts with Uvicorn.

## Available Commands

Run these from `frontend/`:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

Run these from `backend/`:

```bash
uvicorn main:app --reload
```

## Project Structure

```text
tactica/
├── README.md
├── backend/
│   ├── main.py
│   └── requirements.txt
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
    └── package.json
```

## Key Files

- `frontend/src/App.tsx` — route map for the public app
- `frontend/src/pages/Home.tsx` — homepage composition
- `frontend/src/pages/Demo.tsx` — interactive demo workspace with static dataset
- `frontend/components/home/*` — landing page sections
- `frontend/components/demo/*` — dashboard/workspace UI blocks
- `backend/main.py` — FastAPI application entrypoint

## Demo Workspace Notes

The demo route is intentionally static for now:

- account data is embedded in `Demo.tsx`
- sidebar navigation switches between workspace views
- selecting an account updates scenarios, tasks, and activity panels

This keeps the product story visible before the real app shell, auth, and data model are implemented.

## FastAPI Notes

The backend is a minimal FastAPI app. It currently exposes a service status route and a health check.

Current endpoints:

- `GET /` — returns the service name and status
- `GET /health` — returns `{ "status": "ok" }`

## Next Logical Steps

- add real auth endpoints
- move demo data into a dedicated mock data module
- add URL state for demo sections
- build an authenticated `/app/*` shell
- connect accounts, pipeline, and tasks to the FastAPI backend
