# MediConnect

A full-stack doctor appointment booking platform. Patients can browse doctors by speciality, book appointments, and manage their profile. Doctors have a dedicated panel to manage their schedule. Admins can add doctors, oversee all appointments, and monitor platform activity.

---

## Project Structure

```
mediconnect/
├── frontend/     # Patient-facing React app
├── admin/        # Admin & Doctor panel React app
└── backend/      # Node.js / Express REST API
```

---

## Tech Stack

| Layer     | Technology                                      |
|-----------|-------------------------------------------------|
| Frontend  | React 18, React Router v6, Tailwind CSS, Axios  |
| Admin     | React 18, React Router v6, Tailwind CSS, Axios  |
| Backend   | Node.js, Express, MongoDB (Mongoose)            |
| Auth      | JSON Web Tokens (JWT)                           |
| Storage   | Cloudinary (doctor & user profile images)       |

---

## Features

### Patient (Frontend)
- Browse all doctors or filter by speciality
- View doctor details, availability, and fees
- Register / login with secure JWT auth
- Book appointment slots (30-minute intervals, 10 AM – 9 PM)
- View, and cancel upcoming appointments
- Edit personal profile (name, phone, address, gender, DOB, photo)

### Doctor (Admin Panel)
- Login with doctor credentials
- View all assigned appointments
- Mark appointments as completed or cancel them
- Edit profile (bio, fees, address, availability)

### Admin (Admin Panel)
- Login with admin credentials
- Add new doctors with photo upload
- View and manage all doctors 
- View all appointments across the platform
- Cancel any appointment

---

## Getting Started

### Prerequisites

- Node.js v18+
- A MongoDB Atlas cluster (or local MongoDB instance)
- A Cloudinary account

---

### 1. Backend

```bash
cd backend
npm install
```

Start the server:

```bash
# Development (with auto-reload)
npm run server

# Production
npm start
```

The API runs on **http://localhost:4000** by default.

---

### 2. Frontend

```bash
cd frontend
npm install
```

Start the dev server:

```bash
npm run dev
```

Runs on **http://localhost:5173** by default.

---

### 3. Admin Panel

```bash
cd admin
npm install
```

Start the dev server:

```bash
npm run dev
```

Runs on **http://localhost:5174** by default (or the next available port).

---

## Student IDS

- 230103115
- 230103069
- 250103123
- 230103185 


---