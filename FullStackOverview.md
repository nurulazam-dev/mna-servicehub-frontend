# 🚀 MNA ServiceHub

**“All local services in one smart platform.”**

---

# 📌 1. Project Overview

**MNA ServiceHub** is a role-based service booking platform designed to connect customers with local service providers through a centralized and intelligent system.

It supports multiple user roles:

- **Admin**
- **Manager**
- **Service Provider**
- **Job Candidate**
- **Customer**

The platform enables users to discover, request, manage, deliver, and review local services such as:

> Plumber, Electrician, Cleaner, AC Repair, Painter, Technician, etc.

---

# 🏗️ 2. System Architecture

### 🔹 Frontend

- Built with **Next.js (App Router)**
- UI with **Tailwind CSS + ShadCN**
- State/Data handling using **React Query**
- Form handling using **React Form + Zod**

### 🔹 Backend

- Built with **Node.js + Express (TypeScript)**
- Database: **PostgreSQL + Prisma ORM**
- Authentication: **Better Auth + JWT**
- Payment: **Stripe Integration**
- File Storage: **Cloudinary**
- Email Service: **Nodemailer**

---

# 🔐 3. Authentication & Common Features

### ✅ Available for All Users

- User Registration (Role-based)
- Email Verification
- Login / Logout
- Forgot Password
- Reset Password
- Profile Management
- Change Password

---

# 👥 4. Role-Based Features

---

## 🧑‍💻 Customer

### Features

- Browse services
- Create service requests
- Cancel request (only if not processed)
- Make payment (after completion)
- Give review (after payment)

### Dashboard Functionalities

- View all service requests
- View request details
- Cancel pending requests
- Payment status:
  - `Unpaid` → Show **Pay Now button**
  - `Paid` → Show **Payment ID**

- Review button:
  - Enabled only after successful payment
  - Only one review per request

---

## 🧑‍🔧 Service Provider

### Features

- Provide only **one service (specialized)**
- Create daily schedules
- Manage assigned service requests
- Update service status & cost

### Constraints

- Max **3 schedules per day**
- Each schedule = **3 hours**
- **15 minutes gap** between schedules
- No past date allowed

### Dashboard

- Schedule management
- View booking status (Booked / Not Booked)
- Update service request:
  - Status → Completed
  - Add cost breakdown

---

## 🧑‍💼 Manager

### Features

- Manage service requests
- Assign service providers
- Monitor schedules
- View payments

### Dashboard

- View schedules by date
- Accept / Reject service requests
- Assign provider based on availability
- Send email to customer after assignment
- View all payments

---

## 👑 Admin

### Full System Control

### Features

- Manage users (Admin, Manager, Customer, Provider)
- Manage job posts
- Manage job candidates
- Manage service providers
- Manage payments
- Manage service requests

### Special Capabilities

- Create Admin/Manager (with temp password via email)
- Accept/Reject Job Candidates → convert to Service Provider
- Remove Service Providers
- View system-wide analytics

---

## 🧾 Job Candidate

### Features

- Apply for jobs
- Register as Job Candidate (with CV upload)
- Track applications

### Rules

- Can apply to multiple jobs
- Cannot apply twice for same position
- Admin approval required to become Service Provider

---

# 🔄 5. Core Workflow (End-to-End)

### 🧩 Service Request Lifecycle

1. Customer creates service request
2. Manager/Admin:
   - Accepts or Rejects request
   - Assigns Service Provider

3. Email sent to customer with details
4. Service Provider:
   - Completes the work
   - Updates status → `COMPLETED`
   - Adds cost breakdown

5. Customer:
   - Makes payment via Stripe

6. System:
   - Generates invoice (PDF)
   - Sends invoice via email

7. Customer:
   - Submits review

---

# 💳 6. Payment System

### Flow

- Payment allowed only when:
  - Service Request = `COMPLETED`

### Features

- Stripe Checkout integration
- Webhook handling
- Invoice generation (PDF)
- Cloudinary upload
- Email delivery with attachment

---

# ⭐ 7. Review System

### Rules

- Only after:
  - Service completed
  - Payment successful

- One review per service request

### Effects

- Updates:
  - Service average rating
  - Service Provider rating

---

# 📡 8. API Structure

### Base URL

```
/api/v1
```

---

## 🔹 Auth APIs

```
POST   /auth/login
POST   /auth/register
POST   /auth/verify-email
POST   /auth/forgot-password
POST   /auth/reset-password
```

---

## 🔹 Service Requests

```
POST   /service-requests
GET    /service-requests
PATCH  /service-requests/:id
```

---

## 🔹 Service Schedules

```
POST   /service-schedules/create-schedule
GET    /service-schedules/my-schedules
GET    /service-schedules/schedule-by-date
GET    /service-schedules
GET    /service-schedules/:id
```

---

## 🔹 Payments

```
POST   /payments/create-payment
GET    /payments
GET    /payments/my-payments
GET    /payments/:id
POST   /payments/webhook
```

---

## 🔹 Reviews

```
POST   /reviews/give-review
GET    /reviews
GET    /reviews/service/:serviceId
GET    /reviews/my-reviews
GET    /reviews/provider-reviews
DELETE /reviews/:id
```

---

# 🧱 9. Database Design Highlights

- **User → Role-based system**
- **ServiceRequest → Core entity**
- **Schedule → Time-slot system**
- **Payment → Stripe integrated**
- **Review → Linked to Service + Provider**

---

# ⚙️ 10. Key Business Rules

- One Service Provider → One Service
- One Request → One Review
- Payment only after completion
- Max 3 schedules per day
- Schedule must be future date
- Job Candidate must be approved to become Provider

---

# 🌐 11. Frontend Features

- Fully responsive UI
- Role-based dashboards
- Dynamic forms with validation
- Real-time status updates
- Secure API integration
- Optimized data fetching (React Query)

---

# 📦 12. Deployment

### Backend

- Vercel (Serverless)

### Frontend

- Vercel / Any Node-supported hosting

---

# 👨‍💻 Author

Developed and maintained by **Mohammad Nurul Azam**
GitHub: [https://github.com/nurulazam-dev](https://github.com/nurulazam-dev)
