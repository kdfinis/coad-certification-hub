# AI Workforce Hub - Database Setup Guide

**Date:** December 18, 2025  
**Status:** Ready for Implementation

---

## Prerequisites

1. **PostgreSQL Database** installed and running
2. **Node.js** v18+ installed
3. **npm** or **yarn** package manager

---

## Step 1: Install Dependencies

```bash
cd "/Users/karlodefinis/Desktop/AI COMPANY/website/code"
npm install
```

---

## Step 2: Set Up Environment Variables

Create `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and set your database URL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/coad_workforce?schema=public"
PORT=3001
VITE_API_BASE_URL=http://localhost:3001
```

---

## Step 3: Generate Prisma Client

```bash
npx prisma generate
```

---

## Step 4: Run Database Migrations

```bash
npx prisma migrate dev --name init_workforce_hub
```

This will:
- Create all 17 tables in your database
- Set up indexes
- Create relationships

---

## Step 5: (Optional) Seed Database

Create seed data for testing:

```bash
npx prisma db seed
```

---

## Step 6: Start Backend API Server

```bash
cd server
npm install
npm run dev
```

The API will run on `http://localhost:3001`

---

## Step 7: Verify Database

Open Prisma Studio to view your database:

```bash
npx prisma studio
```

---

## Database Schema Overview

The schema includes **17 tables**:

1. **users** - Base user accounts
2. **professionals** - Professional profiles
3. **certifications** - Certification records
4. **professional_certifications** - Junction table
5. **professional_competencies** - Competencies for matching
6. **professional_portfolios** - Portfolio items
7. **professional_availability** - Availability schedules
8. **clients** - Client profiles
9. **projects** - Project requests
10. **project_requirements** - Detailed requirements
11. **project_matches** - Matching results
12. **contracts** - Project contracts
13. **payments** - Payment records
14. **allocation_firms** - Partner firms
15. **professional_ratings** - Client ratings
16. **client_ratings** - Professional ratings
17. **notifications** - System notifications

---

## API Endpoints

Once the server is running, you can access:

- `GET /health` - Health check
- `GET /api/workforce/professionals` - List professionals (with filters)
- `POST /api/workforce/projects` - Create project request
- `GET /api/workforce/stats` - Get hub statistics
- `POST /api/workforce/match` - Trigger matching algorithm

---

## Next Steps

1. **Frontend Integration:** Connect React components to API
2. **Authentication:** Add user authentication
3. **Matching Algorithm:** Test and refine matching logic
4. **Payment Integration:** Set up payment processing
5. **Testing:** Write tests for API endpoints

---

**Status:** Database architecture ready for implementation

