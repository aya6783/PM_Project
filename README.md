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
| Payments  | Stripe, Razorpay                                |

---

## Features

### Patient (Frontend)
- Browse all doctors or filter by speciality
- View doctor details, availability, and fees
- Register / login with secure JWT auth
- Book appointment slots (30-minute intervals, 10 AM – 9 PM)
- View, and cancel upcoming appointments
- Edit personal profile (name, phone, address, gender, DOB, photo)
- Payment via Razorpay or Stripe

### Doctor (Admin Panel)
- Login with doctor credentials
- View all assigned appointments
- Mark appointments as completed or cancel them
- Edit profile (bio, fees, address, availability)

### Admin (Admin Panel)
- Login with admin credentials
- Add new doctors with photo upload
- View and manage all doctors (toggle availability)
- View all appointments across the platform
- Cancel any appointment

---

## Getting Started

### Prerequisites

- Node.js v18+
- A MongoDB Atlas cluster (or local MongoDB instance)
- A Cloudinary account
- Razorpay and/or Stripe accounts (for payment features)

---

### 1. Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
# Currency
CURRENCY=USD

# JWT
JWT_SECRET=your_jwt_secret_here

# Admin credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

# MongoDB
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>

# Cloudinary
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret

# Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
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

Create a `.env` file in the `frontend/` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
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

Create a `.env` file in the `admin/` directory:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=$
```

Start the dev server:

```bash
npm run dev
```

Runs on **http://localhost:5174** by default (or the next available port).

---

## API Reference

All routes are prefixed with the base URL (e.g. `http://localhost:4000`).

### User Routes — `/api/user`

| Method | Endpoint              | Auth     | Description                        |
|--------|-----------------------|----------|------------------------------------|
| POST   | `/register`           | —        | Register a new patient             |
| POST   | `/login`              | —        | Login and receive JWT token        |
| GET    | `/get-profile`        | User     | Get the logged-in user's profile   |
| POST   | `/update-profile`     | User     | Update profile (supports image)    |
| POST   | `/book-appointment`   | User     | Book a doctor appointment          |
| GET    | `/appointments`       | User     | List all appointments for the user |
| POST   | `/cancel-appointment` | User     | Cancel an appointment              |
| POST   | `/payment-razorpay`   | User     | Create a Razorpay payment order    |
| POST   | `/verifyRazorpay`     | User     | Verify Razorpay payment            |
| POST   | `/payment-stripe`     | User     | Create a Stripe checkout session   |
| POST   | `/verifyStripe`       | User     | Verify Stripe payment              |

### Admin Routes — `/api/admin`

| Method | Endpoint               | Auth  | Description                        |
|--------|------------------------|-------|------------------------------------|
| POST   | `/login`               | —     | Admin login                        |
| POST   | `/add-doctor`          | Admin | Add a new doctor (supports image)  |
| GET    | `/all-doctors`         | Admin | List all doctors                   |
| POST   | `/change-availability` | Admin | Toggle a doctor's availability     |
| GET    | `/appointments`        | Admin | List all appointments              |
| POST   | `/cancel-appointment`  | Admin | Cancel any appointment             |
| GET    | `/dashboard`           | Admin | Get platform dashboard stats       |

### Doctor Routes — `/api/doctor`

| Method | Endpoint               | Auth   | Description                        |
|--------|------------------------|--------|------------------------------------|
| POST   | `/login`               | —      | Doctor login                       |
| GET    | `/list`                | —      | List all doctors (public)          |
| GET    | `/appointments`        | Doctor | Get doctor's own appointments      |
| POST   | `/cancel-appointment`  | Doctor | Cancel an appointment              |
| POST   | `/complete-appointment`| Doctor | Mark appointment as completed      |
| GET    | `/dashboard`           | Doctor | Get doctor's dashboard stats       |
| GET    | `/profile`             | Doctor | Get doctor's own profile           |
| POST   | `/update-profile`      | Doctor | Update fees, address, availability |
| POST   | `/change-availability` | Doctor | Toggle own availability            |

---

## Available Specialities

- General Physician
- Gynecologist
- Dermatologist
- Pediatricians
- Neurologist
- Gastroenterologist

---