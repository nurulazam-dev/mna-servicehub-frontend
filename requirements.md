Here is a **fully detailed English version** of your project requirements for **MNA ServiceHub**, written in a clear, structured, and professional way. This goes deeper than a typical overview and is suitable for real development or documentation.

---

# 🧾 MNA ServiceHub – Full Detailed Requirements (English)

## 📌 Project Name

**MNA ServiceHub**
“All local services in one smart platform.”

---

# 1. 🧠 System Overview

MNA ServiceHub is a **role-based service management and booking platform** designed to connect customers with local service providers in a structured and controlled workflow.

The system includes:

- User registration and authentication
- Role-based dashboards and permissions
- Service request lifecycle management
- Job recruitment system for service providers
- Payment and review system

---

# 2. 👥 User Roles & Permissions

## 2.1 Admin

### Responsibilities:

- Full system control
- Manage all users and roles
- Manage job posts and candidates
- Assign Service Providers to Service Requests
- Monitor payments and services
- Send system emails

### Features:

- Create Admin/Manager accounts (with temporary password via email)
- Accept/Reject Service Requests
- Assign Service Provider manually
- Manage Service Providers (activate/deactivate)
- Manage Job Posts (create, update, soft delete)
- Review Job Applications
- Convert Job Candidate → Service Provider
- View all payments and system reports

---

## 2.2 Manager

### Responsibilities:

- Handle operational service workflow

### Features:

- View all Service Requests
- Accept/Reject requests (with reason for rejection)
- Assign Service Provider based on:
  - Service expertise
  - Availability (schedule)

- View all Service Provider schedules
- Monitor completed services and payments

---

## 2.3 Service Provider (SP)

### Constraints:

- Can provide **only ONE service type**

### Features:

- Create schedules (max 3 per day)
- Cannot create schedules for past dates
- View assigned Service Requests
- Update Service Request:
  - Change status (pending → in-progress → completed)
  - Add cost breakdown:
    - Service Charge
    - Product Cost
    - Additional Cost

- Cannot update after payment is completed

---

## 2.4 Job Candidate

### Features:

- Apply for jobs (must be logged in)
- Upload CV (PDF)
- Register as Job Candidate via popup form
- Can apply to multiple job posts
- Cannot apply twice to the same position
- After Admin approval → becomes Service Provider

---

## 2.5 Customer

### Features:

- Register with:
  - Name
  - Email
  - Password
  - Phone

- Must verify email
- Request services
- Cancel request (only if still pending)
- Make payment after completion
- Receive invoice via email
- Submit review:
  - Only for completed + paid services
  - Only ONE review per Service Request

---

# 3. 🔐 Authentication & Common Features

## For All Users:

- Email verification (mandatory for Customer & SP)
- Login / Logout
- Forgot Password
- Reset Password
- Change Password
- Profile Management

## Special Cases:

- Admin-created users receive:
  - Temporary password via email
  - Pre-verified email

---

# 4. 📋 Service Request (SR) Workflow

## Step-by-step lifecycle:

1. Customer creates Service Request
2. Default status: `PENDING`
3. Manager/Admin reviews request:
   - Accept → assign Service Provider
   - Reject → must include reason

4. Assigned SP performs service
5. SP updates:
   - Status → COMPLETED
   - Adds total cost

6. Customer:
   - Can now pay

7. Payment successful:
   - Invoice sent via email

8. Customer submits review

---

# 5. 📊 Dashboard Functionalities

## 5.1 Customer Dashboard

### Service Requests Table:

- View all requests
- Actions:
  - View details
  - Cancel (if pending)

- Payment column:
  - Unpaid → “Pay Now” (disabled until completed)
  - Paid → show Payment ID

- Review button:
  - Enabled only after payment
  - Only one review allowed

---

## 5.2 Service Provider Dashboard

### Schedule Page:

- Select date
- Create max 3 schedules/day
- Past dates disabled
- Show:
  - Booked / Not booked
  - Booking ID if booked

### Service Requests Page:

- View assigned SR
- Update status
- Add cost
- Lock editing after payment

---

## 5.3 Manager Dashboard

### Schedules Page:

- Filter by date
- View all SP schedules
- Columns:
  - SP info
  - Total schedules
  - Booked/Empty status

### Service Requests Page:

- Accept / Reject SR
- Assign SP based on availability
- Send email to customer

### Payments Page:

- Show completed service payments only

---

## 5.4 Admin Dashboard

### Includes everything from Manager plus:

- Manage Users
- Create Admin/Manager
- Manage Service Providers
- Manage Job Posts
- Manage Job Candidates
- Assign SP manually
- View all payments
- System-wide control

---

# 6. 💼 Job System

## Job Post:

- Created by Admin
- Fields:
  - Title
  - Description
  - Requirements
  - Status (active/inactive)

## Job Application:

- Candidate can apply
- Must be logged in
- One application per position

## Candidate Management:

- Filter by Job Post
- Accept → convert to Service Provider
- Reject → send feedback email

---

# 7. 📅 Scheduling System

- Each SP can create:
  - Max 3 schedules/day

- Cannot create for past dates
- Each schedule:
  - Can be booked by ONE SR

- Used by Manager/Admin to assign jobs

---

# 8. 💳 Payment System

- Payment allowed only when:
  - SR status = COMPLETED

- Integration: Stripe
- After payment:
  - Status = PAID
  - Payment ID stored
  - Invoice generated (PDF + Email)

---

# 9. ⭐ Review System

- Conditions:
  - Service completed
  - Payment done

- Rules:
  - One review per SR

- Includes:
  - Rating
  - Comment

---

# 10. 📂 File Upload System

- Used for:
  - Job Candidate CV upload

- Storage:
  - Cloudinary

- Format:
  - PDF only

---

# 11. 📧 Email System

Using Nodemailer:

### Trigger Events:

- Email verification
- Temp password (Admin/Manager)
- Job rejection (with feedback)
- Service assignment
- Invoice after payment

---

# 12. 🏗️ Technical Architecture

### Frontend:

- Next.js (App Router)
- React Query
- TanStack Table
- Tailwind CSS + ShadCN

### Backend:

- Express.js
- Prisma ORM
- PostgreSQL
- JWT / Better Auth

---

# 13. ⚙️ Business Rules

- One SP → One Service
- Max 3 schedules/day
- Cannot cancel after accepted
- Payment only after completion
- One review per SR
- One job application per position

---

# 14. 🔒 Validation & Security

- Zod for validation
- JWT authentication
- Role-based access control (RBAC)
- Input sanitization
- Secure file upload

---

# ✅ Final Summary

This system is a **complete service marketplace + workforce management platform** combining:

- Booking system
- Workforce scheduling
- Job recruitment
- Payment system
- Review system

---
