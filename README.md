# Learning Management System

A modern full-stack LMS built with **Laravel + React + TypeScript**, focused on clean role-based workflows for students, instructors, and admins.

## Why this project

This app demonstrates how to build a production-style education platform with:

- Real authentication and role-based access
- Public catalog + protected learning journeys
- Instructor content management (draft to publish)
- Structured backend APIs and typed frontend integration

It is designed to be portfolio-ready and easy to extend.

## Features

- Authentication (register, login, logout) with Laravel Sanctum
- Role-aware UX (`admin`, `instructor`, `student`)
- Landing page + public course catalog
- Course overview and enrollment flow
- My Courses view for learners
- Instructor/Admin draft workspace
- Course creation/edit/publish
- Module and lesson management
- Lesson completion + enrollment progress tracking
- Profile page with role-aware actions

## Tech Stack

### Backend

- Laravel 12
- PHP 8.2+
- Laravel Sanctum
- Spatie Laravel Permission
- MySQL/SQLite compatible migrations and seeders

### Frontend

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Axios

## Quick Start

## 1) Backend setup

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Backend runs by default at `http://127.0.0.1:8000`.

## 2) Frontend setup

```bash
cd client
npm install
npm run dev
```

Frontend runs by default at `http://localhost:5173`.

## Demo Accounts (Seeded)

- `admin@example.com` / `password`
- `instructor@example.com` / `password`
- `student@example.com` / `password`

## API Overview

Main API routes are in `backend/routes/api.php`.

- Public:
  - `GET /api/courses`
  - `GET /api/courses/{slug}`
- Auth:
  - `POST /api/register`
  - `POST /api/login`
  - `POST /api/logout`
  - `GET /api/profile`
  - `PUT /api/profile`
  - `PATCH /api/profile/password`
- Learner:
  - `GET /api/my-courses`
  - `POST /api/courses/{course}/enroll`
  - `GET /api/courses/{course}/enrollment`
  - `GET /api/lessons/{lesson}`
  - `PATCH /api/lessons/{lesson}/complete`
- Instructor/Admin:
  - Course CRUD + publish
  - Module CRUD
  - Lesson CRUD

## Frontend Routes

Defined in `client/src/App.tsx`.

- `/` landing page
- `/courses` public catalog
- `/courses/:courseRef` course details
- `/login`, `/signup`
- `/my-courses`, `/profile`, `/lessons/:lessonId` (protected)
- `/instructor/*` (instructor/admin only)

## Project Structure

```text
Learning Management System/
  backend/   # Laravel API, models, controllers, migrations, seeders
  client/    # React app, routes, pages, API services, UI components
  Docs/      # supplementary docs
```

## Documentation

- Deep technical architecture doc: `APP_ARCHITECTURE.md`

## Scripts

### Backend

- `php artisan migrate --seed`
- `php artisan serve`
- `php artisan test`

### Frontend

- `npm run dev`
- `npm run type-check`
- `npm run build`

## Notes for Production Hardening

- Add CI (type-check + tests + lint)
- Add rate limiting and stricter API validation policies
- Add centralized logging/monitoring
- Add E2E tests for student/instructor/admin journeys
- Add cloud deployment config (Docker + env templates)

## License

MIT
