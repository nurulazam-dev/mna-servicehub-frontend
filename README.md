# 🚀 MNA ServiceHub

**“All local services in one smart platform.”**

**MNA ServiceHub** is a role-based service booking platform (Admin, Manager, Service Provider, Job Candidate, Customer) where customers can discover and request local services. Managers assign service providers to requests based on their schedules, service providers complete the assigned tasks, and the Admin oversees and controls the entire system.

MNA ServiceHub acts as a centralized digital platform that enables all local service-related activities to be managed efficiently from a single place.

## 🔗 Project Links

- **Frontend Live Link:** [mna-servicehub.vercel.app](https://mna-servicehub.vercel.app/)
- **Backend Repository:** [MNA-ServiceHub Backend](https://github.com/nurulazam-dev/mna-servicehub-backend)
  <br>
  <br>
  [![Backend Deployment](https://img.shields.io/badge/Deployment-Vercel-blue)](https://mna-servicehub-backend.vercel.app/)
  [![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748)](https://www.prisma.io/)
  [![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791)](https://www.postgresql.org/)

---

## 🔑 Verified Login Credentials (Testing)

| Role                 | Email                       | Password       |
| :------------------- | :-------------------------- | :------------- |
| **Admin**            | `admin@servicehub.com`      | `Admin123`     |
| **Manager**          | `manager@servicehub.com`    | `Manager123`   |
| **Service_Provider** | `sprovider@servicehub.com`  | `Provider123`  |
| **Job_Candidate**    | `jcandidate@servicehub.com` | `Candidate123` |
| **Customer**         | `customer@servicehub.com`   | `Customer123`  |

---

The system ensures smooth coordination between users, managers, and service providers while maintaining full administrative control.

# 🎯 2. Core Features

## 🔐 Authentication & Authorization

- Role-based authentication system
- Email verification (required for new users)
- Forgot password & reset password
- Secure login/logout system
- JWT-based authentication

---

## 👤 User Registration System

### 🧑 Customer Registration

- Register with:
  - Name
  - Email
  - Password
  - Phone

- Email verification required before access

---

### 🧑‍💼 Job Candidate Registration

- Separate **“Job Candidate Register”** flow
- Requires:
  - Personal information
  - CV upload (PDF)

- Admin actions:
  - ✅ Accept → becomes **Service Provider**
  - ❌ Reject → email with feedback

---

### 🛠 Admin & Manager Creation

- Created by Admin from dashboard
- Receive **temporary password via email**
- Must reset password on first login
- Email is auto-verified

---

### 👑 First Admin

- Created via **seeded admin system**

---

# 🧩 3. Common Features (All Users)

### Logged-out Users

- Email verification
- Forgot password
- Reset password

### Logged-in Users

- Dashboard access
- Profile management (view/update)
- Change password

---

# 👥 4. Role-Based Functionalities

---

# 🧑‍💻 Customer Module

## ✅ Capabilities

- Create service requests (login required)
- Cancel request (only if status = `PENDING`)
- Make payment after service completion
- Receive invoice via email
- Submit review (after payment)

---

## 📊 Customer Dashboard

### Service Request Table

- View all requests
- Actions:
  - View details
  - Cancel request (if pending)

---

### Payment System

| Status    | Behavior                                               |
| --------- | ------------------------------------------------------ |
| Unpaid    | Shows **"Pay Now" button (disabled if not completed)** |
| Completed | "Pay Now" becomes enabled                              |
| Paid      | Shows **Payment ID** instead                           |

---

### Review System

- Enabled only after payment
- One review per service request
- “Add Feedback” button remains disabled until payment

---

# 🧑‍🎓 Job Candidate Module

## 🌐 Career Page

- List of all job posts
- Each job includes:
  - Details page
  - Apply button
  - Register as Job Candidate

---

## 📌 Rules

- Must be logged in to apply
- Can apply for multiple jobs
- Can apply **only once per job**

---

## 📊 Dashboard

- View all applied jobs

---

# 🛠 Service Provider Module

## ⚙️ Rules

- One Service Provider → One Service Expertise

---

## 📅 Schedule Management

- Max **3 schedules per day**
- Each schedule = **3 hours**
- 15-minute gap between schedules
- Cannot create past schedules

---

## 📊 Schedule View

- Shows:
  - Date
  - Booking status (Booked / Not Booked)
  - Booking ID (if booked)

---

## 📋 Service Request Management

- View assigned service requests
- Update:
  - Status (e.g., COMPLETED)
  - Cost breakdown:
    - Service Charge
    - Product Cost
    - Additional Cost

---

## ⚠️ Restrictions

- Cannot update:
  - Unassigned requests
  - After payment is completed

---

# 🧑‍💼 Manager Module

## 📅 Schedule Monitoring

- View all SP schedules by date
- See:
  - Provider details
  - Total schedules
  - Booking status

---

## 📋 Service Request Management

### Actions:

#### ✅ Accept Request

- Assign Service Provider
- Assign available schedule
- Validate:
  - Service expertise
  - Availability

- Send email to customer

---

#### ❌ Reject Request

- Must provide rejection reason
- Customer can view reason

---

## 💳 Payments

- View all completed service payments
- Payment appears only after:
  - Service completed
  - Cost added by SP

---

# 👑 Admin Module

## 📋 Full System Control

---

## 📊 Service Requests

- Accept / Reject requests
- Assign SP via filtering:
  - Service type
  - Availability

- Send email notification

---

## 📅 SP Schedules

- Same as Manager view

---

## 💳 Payments

- Full visibility of all transactions

---

## 👥 Service Providers

- Manage SP lifecycle
- Remove providers if needed

---

## 👤 Users Management

- Manage all users
- Create Admin/Manager
- Auto-send temp password via email

---

## 💼 Job Posts

- Create / Update / Deactivate jobs
- View number of applicants

---

## 🧑‍🎓 Job Candidates

- Filter by job post
- Accept / Reject candidates
- Accept → convert to Service Provider

---

# 🔄 5. Service Request Lifecycle

## Step-by-Step Flow

1. Customer selects a service
2. Creates a service request
3. Manager/Admin:
   - Accepts or rejects request

4. If accepted:
   - Assigns Service Provider + Schedule
   - Sends email notification

5. Service Provider:
   - Completes service
   - Updates status → `COMPLETED`
   - Adds cost breakdown

6. Customer:
   - Makes payment
   - Receives invoice via email

7. Customer:
   - Submits review (1 per request)

---

# 💳 6. Payment System

- Payment allowed only when:
  - Service status = `COMPLETED`

- Powered by Stripe
- Generates:
  - Transaction ID
  - Invoice (PDF)

- Invoice:
  - Stored in cloud
  - Sent via email

---

# ⭐ 7. Review System

## Rules

- Only after:
  - Service completed
  - Payment successful

- One review per service request

---

## Effects

- Updates:
  - Service rating
  - Service Provider rating

---

# 🔐 8. Authorization Matrix

| Feature                | Customer | SP  | Manager | Admin |
| ---------------------- | -------- | --- | ------- | ----- |
| Create Service Request | ✅       | ❌  | ❌      | ❌    |
| View Own Requests      | ✅       | ❌  | ❌      | ❌    |
| View Assigned Requests | ❌       | ✅  | ❌      | ❌    |
| Manage Requests        | ❌       | ❌  | ✅      | ✅    |
| Manage Users           | ❌       | ❌  | ❌      | ✅    |
| Payment Access         | Own      | ❌  | All     | All   |
| Review                 | Own      | ❌  | ❌      | ❌    |

---

# ⚠️ 9. Critical Business Rules

- One request = one service
- One review per request
- Payment required before review
- Cannot update after payment
- Only owner can cancel (if pending)
- SP must be assigned before execution
- Admin/Manager controls approval

---

---

# 📋 Frontend Tech Stack:

| Package Name                                | Purpose                                                                    |
| ------------------------------------------- | -------------------------------------------------------------------------- |
| **next (Next.js 16)**                       | Full-stack React framework with App Router, SSR, routing, and API handling |
| **react / react-dom**                       | Core libraries for building interactive UI components                      |
| **@tanstack/react-query**                   | Server state management (data fetching, caching, synchronization)          |
| **@tanstack/react-query-next-experimental** | Optimized React Query integration for Next.js App Router                   |
| **@tanstack/react-form**                    | Type-safe form state management and validation                             |
| **@tanstack/react-form-nextjs**             | Next.js integration for TanStack Form                                      |
| **@tanstack/react-table**                   | Advanced table/data grid (sorting, filtering, pagination)                  |
| **@tanstack/react-form-devtools**           | Devtools for debugging and inspecting form state                           |
| **axios**                                   | Promise-based HTTP client for API communication                            |
| **better-auth**                             | Authentication system (session management, OAuth, secure login)            |
| **jsonwebtoken**                            | JWT handling (token decoding and verification if needed)                   |
| **zod**                                     | Schema validation and type-safe data parsing                               |
| **date-fns**                                | Lightweight date manipulation and formatting utilities                     |
| **react-day-picker**                        | Flexible and customizable date picker component                            |
| **input-otp**                               | OTP input handling for authentication flows                                |
| **recharts**                                | Data visualization and charts (dashboard analytics)                        |
| **lucide-react**                            | Modern and customizable icon library                                       |
| **sonner**                                  | Toast notification system (success, error, alerts)                         |
| **next-themes**                             | Theme management (dark/light mode support)                                 |
| **@base-ui/react**                          | Accessible low-level UI primitives                                         |
| **shadcn**                                  | Prebuilt UI components using Tailwind CSS and Radix UI                     |
| **vaul**                                    | Drawer / bottom-sheet UI component (mobile-friendly modals)                |
| **clsx**                                    | Utility for conditional className composition                              |
| **tailwind-merge**                          | Intelligent merging of Tailwind CSS classes                                |
| **class-variance-authority (cva)**          | Utility for managing component style variants                              |
| **tw-animate-css**                          | Tailwind-based animation utilities                                         |

---

# 🧠 Architecture Insight (Short)

### 🧩 Core Stack

- **Next.js + React** → App structure & UI
- **React Query** → API state management
- **Zod + TanStack Form** → Form + validation layer

### 🎨 UI System

- **Tailwind CSS**
- **shadcn + base-ui + vaul**
- **lucide-react (icons)**

### 🔐 Auth & API

- **better-auth**
- **axios**
- **jsonwebtoken**

### 📊 Advanced Features

- **react-table → data tables**
- **recharts → analytics dashboard**
- **date-fns → date handling**

---

# 🚀 Local Development Setup

Follow the steps below to run the project locally.

---

## 1️⃣ Clone Repository & Install Dependencies

```bash
git clone https://github.com/nurulazam-dev/mna-servicehub-frontend.git

cd mna-servicehub-frontend

pnpm install
```

---

## 2️⃣ Environment Configuration

Create a `.env` file in the root directory and configure the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1

JWT_ACCESS_SECRET=

FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000
BACKEND_API_URL=http://localhost:5000
BACKEND_AUTH_URL=http://localhost:5000

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NEXT_PUBLIC_FRONTEND=http://localhost:3000
NEXT_PUBLIC_BACKEND=http://localhost:5000
```

---

## 4️⃣ Start Development Server

```bash
pnpm dev
```

Server will run at:

```
http://localhost:3000
```

---

# 👨‍💻 Author

Developed and maintained by **Mohammad Nurul Azam**
GitHub: [https://github.com/nurulazam-dev](https://github.com/nurulazam-dev)

---
