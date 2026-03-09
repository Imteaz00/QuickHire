# QuickHire

QuickHire is a full-stack job board web application where candidates can discover roles and apply online, while admins can manage job postings and review incoming applications.

## Overview

The application includes:

- Public job listing and job detail pages
- Search and filtering by category/location
- Job application form with validation
- Admin screens to create and delete jobs
- Admin screen to view all submitted applications

## Tech Stack

### Frontend (`/frontend`)

- Next.js (App Router)
- React
- Tailwind CSS
- React Hook Form + Zod

### Backend (`/backend`)

- Node.js + Express
- TypeScript
- PostgreSQL
- Drizzle ORM + Drizzle Kit

## Project Structure

```text
QuickHire/
	backend/
		src/
			modules/
				jobs/
				applications/
			config/
	frontend/
		app/
			(landing)/
			jobs/
			admin/
		actions/
		components/
```

## Features

### Candidate Flow

- Browse all jobs
- Search jobs by keyword
- Filter jobs by category and location
- View complete job details
- Apply with:
  - Name
  - Email
  - Resume link (URL)
  - Cover note

### Admin Flow

- Create a new job post
- Delete an existing job post
- View all submitted applications

## API

Base URL (local): `http://localhost:8000`

### Jobs

- `GET /api/jobs` - List jobs (supports `search`, `category`, `location`)
- `GET /api/jobs/:id` - Get one job
- `POST /api/jobs` - Create job
- `DELETE /api/jobs/:id` - Delete job
- `GET /api/jobs/categoryCounts` - Get category counts
- `GET /api/jobs/locations` - Get unique locations

### Applications

- `POST /api/applications` - Submit an application
- `GET /api/applications` - List all applications

### Utility

- `GET /api` - API information
- `GET /health` - Health check

## Data Model

### Job

- `id` (uuid)
- `title`
- `company`
- `location`
- `category` (enum array)
- `description`
- `created_at`

### Application

- `id` (uuid)
- `job_id` (FK -> jobs.id, cascade delete)
- `name`
- `email`
- `resume_link`
- `cover_note`
- `created_at`

Relationship:

- One job can have many applications

## Validation

- Frontend validation with Zod for job and application forms
- Backend checks for required fields
- Backend email format validation for applications

## Environment Variables

### Backend (`backend/.env`)

Create `backend/.env` from `backend/example.env`:

```env
PORT=8000
DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<database>
FRONTEND_URL=http://localhost:3000
```

### Frontend (`frontend/.env.local`)

Create `frontend/.env.local` from `frontend/example.env`:

```env
BACKEND_URL=http://localhost:8000
```

## Local Development

### 1. Install dependencies

```bash
git clone <your-repo-url>
cd QuickHire

cd backend
npm install

cd ../frontend
npm install
```

### 2. Set up environment files

- `backend/.env`
- `frontend/.env`

### 3. Initialize database schema

From `backend/`:

```bash
npm run build
npm run db:push
```

### 4. Run the app

Backend (from `backend/`):

```bash
npm run dev
```

Frontend (from `frontend/`):

```bash
npm run dev
```

Open:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`

## Production Build

Backend:

```bash
cd backend
npm run build
npm run start
```

Frontend:

```bash
cd frontend
npm run build
npm run start
```

## Notes

- Backend is organized by module (`jobs`, `applications`) with routes/controllers/queries.
- Frontend uses reusable components and server actions for API interaction.
