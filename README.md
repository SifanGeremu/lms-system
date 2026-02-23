# Learning Management System

A full-stack LMS built with **Laravel, React, and TypeScript** that models real education workflows: public discovery, gated learning, and role-based authoring.

This project focuses on clean API design, structured data flow, and a frontend that reflects backend permissions rather than duplicating logic.

## What this project demonstrates

* Token-based authentication with **Laravel Sanctum**
* Role and permission handling using **Spatie Laravel Permission**
* Public course browsing with protected enrollment paths
* Instructor draft → publish workflow
* Modular course structure (courses → modules → lessons)
* Progress tracking at the lesson level
* Typed API consumption on the React side
* Clear separation between public, learner, and authoring areas

The goal was to build something that feels closer to a real product than a demo CRUD.

---

## Core user journeys

**Visitor**

* Browse course catalog
* View course details

**Student**

* Enroll in courses
* Track lesson completion
* View personal learning dashboard

**Instructor / Admin**

* Create and manage courses
* Organize modules and lessons
* Publish when ready

Permissions are enforced server-side and reflected in the UI.

---

## Tech stack

### Backend

* Laravel 12
* PHP 8.2+
* Laravel Sanctum
* Spatie Laravel Permission
* MySQL (SQLite supported for local testing)

### Frontend

* React 18
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Axios

---

## Getting started

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

API runs at: `http://127.0.0.1:8000`

### Frontend

```bash
cd client
npm install
npm run dev
```

Client runs at: `http://localhost:5173`

---

## Seeded demo users

* Admin → `admin@example.com` / `password`
* Instructor → `instructor@example.com` / `password`
* Student → `student@example.com` / `password`

---

## API surface

Routes live in `backend/routes/api.php`.

**Public**

* `GET /api/courses`
* `GET /api/courses/{slug}`

**Auth**

* `POST /api/register`
* `POST /api/login`
* `POST /api/logout`
* `GET /api/profile`
* `PUT /api/profile`
* `PATCH /api/profile/password`

**Student**

* `GET /api/my-courses`
* `POST /api/courses/{course}/enroll`
* `GET /api/courses/{course}/enrollment`
* `GET /api/lessons/{lesson}`
* `PATCH /api/lessons/{lesson}/complete`

**Instructor/Admin**

* Course CRUD + publish toggle
* Module CRUD
* Lesson CRUD

---

## Frontend routing

Defined in `client/src/App.tsx`.

* `/` – landing
* `/courses` – catalog
* `/courses/:courseRef` – course details
* `/login`, `/signup`
* `/my-courses`, `/profile`, `/lessons/:lessonId` (authenticated)
* `/instructor/*` (role-restricted)

Route guards rely on the API profile response rather than client-side role assumptions.

---

## Project layout

```
Learning Management System/
  backend/   Laravel API (models, policies, controllers, seeders)
  client/    React + TypeScript app (pages, services, components)
 

---

## Architectural notes

* Business rules live in the backend (policies, permissions, publish state)
* The frontend consumes typed DTO-style responses
* Enrollment and completion are modeled as separate resources to support analytics later
* Draft content is never exposed through public endpoints



---

## Useful scripts

### Backend

```bash
php artisan migrate --seed
php artisan serve
php artisan test
```

### Frontend

```bash
npm run dev
npm run type-check
npm run build
```

---

## Production considerations

Planned improvements for a hosted environment:

* CI pipeline (tests, type checks, linting)
* API rate limiting and stricter validation layers
* Centralized logging and error tracking
* End-to-end tests for each role flow
* Docker setup with environment templates

---

## License

MIT

---
