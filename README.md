# ⚙️ MNA ServiceHub

> “All local services in one smart platform.”

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

# 📋 Frontend Tech Stack:

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
