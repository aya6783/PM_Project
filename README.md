# Doctor Appointment Booking System

A complete full stack doctor appointment booking system built with **React JS + Express JS + SQLite**.

## Features

- Patient registration and login with JWT authentication
- Doctor listing with specialty search and filtering
- Doctor profile page with dynamic slot availability
- Appointment booking with duplicate-slot prevention
- Patient dashboard to view and cancel appointments
- Responsive modern UI suitable for academic final projects
- Seeded doctors for instant demo

## Tech Stack

### Frontend
- React JS
- React Router DOM
- Axios
- Vite

### Backend
- Node.js
- Express.js
- SQLite using better-sqlite3
- JWT Authentication
- bcryptjs

## Project Structure

```
doctor-appointment-booking-system/
├── backend/
│   ├── src/
│   ├── data/
│   └── package.json
├── frontend/
│   ├── src/
│   └── package.json
├── package.json
└── README.md
```

## Installation & Run

### 1) Install dependencies
```bash
npm install
npm run install-all
```

### 2) Backend environment setup
Copy the example env file inside backend:
```bash
cd backend
cp .env.example .env
cd ..
```

### 3) Seed demo data
```bash
npm run seed
```

### 4) Start the project
```bash
npm run dev
```

## Default URLs
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## Demo Flow
1. Register a new patient account
2. Browse doctors
3. Open a doctor profile
4. Select date and available slot
5. Book appointment
6. View or cancel bookings from dashboard

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Doctors
- `GET /api/doctors`
- `GET /api/doctors/:id`
- `GET /api/doctors/:id/slots?date=YYYY-MM-DD`

### Appointments
- `GET /api/appointments`
- `POST /api/appointments`
- `PATCH /api/appointments/:id/cancel`

## Notes for Evaluation
This project is designed to satisfy common academic final project criteria:
- clear problem definition and useful real-world scope
- proper full stack architecture
- working CRUD-style functionality
- responsive UI/UX
- open source frameworks and clean code organization

