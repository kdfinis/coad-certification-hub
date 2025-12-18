# COAD Certification Hub - Production Deployment Guide

**Domain:** coad.ai  
**Status:** Production-Ready Configuration  
**Date:** December 18, 2025

---

## 🚀 Production Configuration

### Environment Variables

The project uses environment variables for configuration:

**Development (`.env`):**
```env
DATABASE_URL="postgresql://user@localhost:5432/coad_workforce?schema=public"
PORT=3001
VITE_API_BASE_URL=http://localhost:3001
VITE_DOMAIN=http://localhost:8080
VITE_APP_URL=https://app.coad.ai
```

**Production (`.env.production`):**
```env
DATABASE_URL="postgresql://user:password@your-production-db-host:5432/coad_workforce?schema=public"
PORT=3001
NODE_ENV=production
VITE_API_BASE_URL=https://api.coad.ai
VITE_DOMAIN=https://coad.ai
VITE_APP_URL=https://app.coad.ai
JWT_SECRET=your-secure-production-secret
CORS_ORIGIN=https://coad.ai,https://www.coad.ai,https://app.coad.ai
```

---

## 📦 Build & Deploy Commands

### Frontend Build
```bash
# Production build
npm run build

# Output: dist/ directory with optimized static files
```

### Backend Build
```bash
# Build TypeScript
npm run server:build

# Start production server
npm run server:start
```

### Full Production Build
```bash
# Build both frontend and backend
npm run build && npm run server:build
```

---

## 🌐 Domain Configuration

### Primary Domain
- **Website:** https://coad.ai
- **API:** https://api.coad.ai (or subdomain of your choice)
- **App:** https://app.coad.ai (for authenticated users)

### DNS Setup
1. Point `coad.ai` → Frontend hosting (Vercel/Netlify/etc.)
2. Point `api.coad.ai` → Backend server (Railway/Render/etc.)
3. Point `app.coad.ai` → Frontend app (same as main domain)

---

## 🗄️ Database Setup (Production)

### PostgreSQL Database
1. **Create production database:**
   ```sql
   CREATE DATABASE coad_workforce_production;
   ```

2. **Run migrations:**
   ```bash
   DATABASE_URL="your-production-url" npm run prisma:migrate deploy
   ```

3. **Generate Prisma Client:**
   ```bash
   npm run prisma:generate
   ```

---

## 🔧 Server Configuration

### Backend Server (Express)
- **Port:** 3001 (or set via `PORT` env var)
- **CORS:** Configured for production domains
- **Environment:** Set `NODE_ENV=production`

### Frontend Server (Vite)
- **Build Output:** `dist/` directory
- **Static Files:** Serve from CDN or static hosting
- **SPA Routing:** Configure server to handle client-side routing

---

## 📋 Deployment Checklist

### Pre-Deployment
- [ ] Update `.env.production` with production values
- [ ] Set secure `JWT_SECRET`
- [ ] Configure production database URL
- [ ] Update CORS origins
- [ ] Set `NODE_ENV=production`

### Frontend Deployment
- [ ] Build frontend: `npm run build`
- [ ] Test build locally: `npm run preview`
- [ ] Deploy `dist/` to hosting (Vercel/Netlify/etc.)
- [ ] Configure domain DNS
- [ ] Set up SSL certificate
- [ ] Configure redirects for SPA routing

### Backend Deployment
- [ ] Build backend: `npm run server:build`
- [ ] Set environment variables on hosting platform
- [ ] Deploy to server (Railway/Render/etc.)
- [ ] Configure domain for API (`api.coad.ai`)
- [ ] Set up SSL certificate
- [ ] Test API endpoints

### Database
- [ ] Create production database
- [ ] Run migrations: `prisma migrate deploy`
- [ ] Set up database backups
- [ ] Configure connection pooling

### Post-Deployment
- [ ] Test all API endpoints
- [ ] Verify frontend-backend communication
- [ ] Test authentication flow
- [ ] Monitor error logs
- [ ] Set up monitoring/analytics

---

## 🔐 Security Checklist

- [ ] Use HTTPS everywhere
- [ ] Set secure `JWT_SECRET` (32+ random characters)
- [ ] Configure CORS properly
- [ ] Enable rate limiting on API
- [ ] Set up database connection pooling
- [ ] Configure firewall rules
- [ ] Enable security headers
- [ ] Set up error logging (Sentry/etc.)
- [ ] Regular security updates

---

## 📊 Monitoring & Analytics

### Recommended Tools
- **Error Tracking:** Sentry
- **Analytics:** Google Analytics / Plausible
- **Uptime:** UptimeRobot / Pingdom
- **Logs:** Logtail / Datadog

### Environment Variables
```env
VITE_ANALYTICS_ID=your-analytics-id
SENTRY_DSN=your-sentry-dsn
```

---

## 🚀 Deployment Platforms

### Frontend Options
- **Vercel** (Recommended for React/Vite)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages** (static only)

### Backend Options
- **Railway**
- **Render**
- **Fly.io**
- **DigitalOcean App Platform**
- **AWS / GCP / Azure**

### Database Options
- **Supabase**
- **Neon**
- **Railway PostgreSQL**
- **Render PostgreSQL**
- **AWS RDS**

---

## 📝 GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - # Deploy to your hosting platform

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run server:build
      - # Deploy to your server
```

---

## 🔄 Environment-Specific URLs

The API client (`src/lib/api.ts`) automatically uses:
- **Development:** `http://localhost:3001`
- **Production:** `https://api.coad.ai` (from `VITE_API_BASE_URL`)

No code changes needed - just set environment variables!

---

## ✅ Production Ready

The codebase is configured for production deployment:
- ✅ Environment-based configuration
- ✅ API client uses env variables
- ✅ Production build optimized
- ✅ CORS configured
- ✅ Database migrations ready

**Next:** Deploy to your chosen hosting platform!

