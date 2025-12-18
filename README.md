# COAD Certification Hub

**Domain:** coad.ai  
**Status:** Production-Ready  
**Repository:** https://github.com/kdfinis/coad-certification-hub

---

## 🚀 Quick Start

### Preview Without Localhost

**Option 1: Vercel (Recommended)**
1. Visit: https://vercel.com/new
2. Import: `kdfinis/coad-certification-hub`
3. Deploy → Get instant preview URL

**Option 2: Netlify**
1. Visit: https://netlify.com
2. Import: `kdfinis/coad-certification-hub`
3. Deploy → Get preview URL

**See:** [PREVIEW_WITHOUT_LOCALHOST.md](./PREVIEW_WITHOUT_LOCALHOST.md) for details

---

## 📦 Tech Stack

- **Frontend:** Vite + React + TypeScript
- **UI:** shadcn-ui + Tailwind CSS
- **Backend:** Express.js + Prisma
- **Database:** PostgreSQL

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
├── src/              # Frontend source code
├── server/           # Backend API server
├── prisma/           # Database schema & migrations
├── public/           # Static assets
└── dist/             # Production build output
```

---

## 🌐 Deployment

### Environment Variables

Set these in your hosting platform:

```env
VITE_API_BASE_URL=https://api.coad.ai
VITE_DOMAIN=https://coad.ai
VITE_APP_URL=https://app.coad.ai
```

### Build Commands

- **Vercel/Netlify:** Auto-detected from config files
- **GitHub Pages:** Uses `.github/workflows/deploy.yml`

---

## 📚 Documentation

- [Production Deployment](./PRODUCTION_DEPLOYMENT.md)
- [Preview Without Localhost](./PREVIEW_WITHOUT_LOCALHOST.md)
- [Database Setup](./DATABASE_SETUP.md)
- [Repository Status](./REPOSITORY_STATUS.md)

---

## 🔗 Links

- **GitHub:** https://github.com/kdfinis/coad-certification-hub
- **Domain:** https://coad.ai (when deployed)

---

**Ready to deploy?** Use Vercel for instant previews!
