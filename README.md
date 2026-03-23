# Tactica

Tactica is a revenue workspace prototype. The project currently combines a React marketing site and demo shell with a minimal Django backend for session-based authentication.

## Current Scope

- Marketing site at `/`
- Interactive demo workspace at `/demo`
- Django auth API for register, login, logout, and current session state
- Dark-only frontend theme
- Frontend demo data is still static

The backend only covers the first auth layer right now. There is still no real CRM data model, dashboard persistence, or authenticated `/app/*` product shell yet.

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
- Django 5
- Django sessions

## Routes

- `/` — marketing homepage
- `/demo` — interactive workspace preview

Backend API:

- `/api/auth/register/`
- `/api/auth/login/`
- `/api/auth/logout/`
- `/api/auth/me/`

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
./venv/bin/python manage.py migrate
./venv/bin/python manage.py runserver
```

The frontend starts with Vite. The backend starts with Django's dev server.

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
./venv/bin/python manage.py check
./venv/bin/python manage.py migrate
./venv/bin/python manage.py test auth_api
./venv/bin/python manage.py runserver
```

## Project Structure

```text
tactica/
├── README.md
├── backend/
│   ├── app/
│   ├── auth_api/
│   ├── manage.py
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
- `backend/app/settings.py` — Django project settings and local SQLite fallback
- `backend/auth_api/views.py` — JSON auth endpoints
- `backend/auth_api/tests.py` — backend auth flow tests

## Demo Workspace Notes

The demo route is intentionally static for now:

- account data is embedded in `Demo.tsx`
- sidebar navigation switches between workspace views
- selecting an account updates scenarios, tasks, and activity panels

This keeps the product story visible before the real app shell, auth, and data model are implemented.

## Auth API Notes

The backend uses Django's built-in user model and session authentication.

Request bodies are JSON:

```json
{
  "email": "owner@tactica.app",
  "password": "SecurePass123!",
  "name": "Ava Chen"
}
```

Current endpoints:

- `POST /api/auth/register/` — creates a user and starts a session
- `POST /api/auth/login/` — authenticates and starts a session
- `POST /api/auth/logout/` — clears the current session
- `GET /api/auth/me/` — returns the current authenticated user or `null`

Local backend setup now falls back to SQLite automatically when Postgres env vars are not provided.

## Next Logical Steps

- connect frontend forms to the auth API
- add real `/login` and `/signup` routes
- move demo data into a dedicated mock data module
- add URL state for demo sections
- build an authenticated `/app/*` shell
- connect accounts, pipeline, and tasks to a backend
