# COAD Website - Codebase

**Domain:** coad.ai  
**Platform:** Lovable.dev  
**Framework:** React + Tailwind CSS

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

---

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components/routes
├── styles/             # Global styles, Tailwind config
├── assets/             # Images, icons, fonts
├── utils/              # Helper functions
└── hooks/              # Custom React hooks

public/
├── images/             # Static images
├── icons/              # SVG icons
└── favicon.ico         # Site favicon
```

---

## Development Guidelines

See `../DEVELOPMENT_GUIDELINES.md` for:
- Brand guidelines
- Content standards
- Design system
- Git workflow
- Deployment process

---

## Content Sources

All copywriting content is maintained in markdown files:
- `../copy/AAC_TRACK_COPY.md` - AAC track copy
- `../copy/AIO_TRACK_COPY.md` - AIO track copy
- `../copy/CTAs_AND_LUXEMBOURG_COPY.md` - CTAs and homepage copy
- `../certifications_page.md` - Certifications page copy

**Important:** Always sync content from markdown files before deploying.

---

## Key Pages

- `/` - Homepage
- `/tracks/amcd/` - AMCD (AI Media and Content Development) Track
- `/tracks/acd/` - ACD (AI Code Development) Track
- `/tracks/aio/` - AIO (AI Oversight) Track
- `/certifications/` - Certifications overview
- `/modules/` - Competency modules listing
- `/contact/` - Contact form

---

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CONTACT_EMAIL=contact@coad.ai
```

---

## Deployment

1. Build and test locally
2. Push to Git repository
3. Deploy via hosting platform (Vercel, Netlify, etc.)
4. Verify deployment on coad.ai

---

## Support

- **Documentation:** See `../DEVELOPMENT_GUIDELINES.md`
- **Specs:** See `../COMPLETE_WEBSITE_SPECIFICATION.md`
- **Issues:** Create issue in Git repository

---

**Last Updated:** December 18, 2025

