# COAD Platform - Developer Guide

## Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL (for production)
- Environment variables configured (see `.env.example`)

### Installation

```bash
cd website/code
npm install
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/                # API route handlers
│   ├── catalog/            # Public course catalog
│   ├── checkout/           # Payment and enrollment
│   ├── lms/                # Canvas-like LMS platform
│   ├── support/            # Support center
│   ├── legal/              # Legal pages
│   └── about/              # Trust signals
├── components/             # React components
│   ├── layout/             # Header, Footer
│   ├── lms/                # LMS-specific components
│   └── ui/                 # Reusable UI components
└── lib/                    # Utilities and helpers
    ├── lms-data.ts         # Mock data
    ├── lms-roles.ts        # Role permissions
    ├── lms-utils.ts        # Common utilities
    └── validation.ts       # Form validation
```

## Key Features

### LMS Platform
- **Location**: `/src/app/lms/`
- **Features**: Full Canvas-like functionality
- **Roles**: Student, Instructor, Admin, Observer
- **Tools**: Assignments, Quizzes, Discussions, Gradebook, SpeedGrader, etc.

### Public Website
- **Catalog**: `/catalog` - Course discovery
- **Checkout**: `/checkout` - Payment and enrollment
- **Support**: `/support` - FAQ and help
- **Legal**: `/legal/*` - Privacy, Terms, Refund, Cookie policies

### API Routes
- **Location**: `/src/app/api/`
- **Status**: Stubs ready for backend implementation
- **Documentation**: See `API_INTEGRATION.md`

## Development Workflow

### Adding a New Page

1. Create file in appropriate `app/` directory
2. Export default React component
3. Add metadata if needed
4. Link from navigation or other pages

### Adding an API Route

1. Create route file in `app/api/[route]/route.ts`
2. Export GET, POST, PUT, DELETE handlers as needed
3. Add validation and error handling
4. Document in `API_INTEGRATION.md`

### Styling

- Uses Tailwind CSS with COAD design tokens
- Custom classes defined in `globals.css`
- Component styles in component files
- Responsive design (mobile-first)

## Environment Variables

See `API_INTEGRATION.md` for complete list. Key variables:

- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Authentication secret
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` - Google OAuth
- `LINKEDIN_CLIENT_ID` / `LINKEDIN_CLIENT_SECRET` - LinkedIn OAuth
- `STRIPE_SECRET_KEY` - Payment processing
- `ZOOM_CLIENT_ID` / `ZOOM_CLIENT_SECRET` - Zoom integration

## Testing

### Local Development
- Mock data in `lib/lms-data.ts`
- API routes return mock responses
- No database required for UI development

### Production Testing
- Set up test database
- Configure test OAuth apps
- Use Stripe test mode
- Use Zoom sandbox

## Code Style

- TypeScript for type safety
- React Server Components where possible
- Client components marked with `'use client'`
- Consistent naming: PascalCase for components, camelCase for functions
- Error handling: Try-catch blocks, user-friendly error messages

## Common Tasks

### Adding a New Course Tool
1. Create page in `app/lms/courses/[courseId]/[tool]/page.tsx`
2. Add to course navigation in `app/lms/layout.tsx`
3. Add mock data if needed
4. Wire up API calls

### Adding Form Validation
1. Use validation functions from `lib/validation.ts`
2. Add client-side validation
3. Display error messages
4. Validate on backend API route

### Adding a New Role Permission
1. Update `lib/lms-roles.ts`
2. Add role checks in components
3. Update navigation visibility
4. Test with role switcher (dev mode)

## Deployment

### Build
```bash
npm run build
```

### Production Checklist
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] OAuth apps configured
- [ ] Payment processor set up
- [ ] File storage configured
- [ ] Email service configured
- [ ] Monitoring set up
- [ ] Error tracking configured

## Troubleshooting

### Common Issues

**API routes not working**
- Check route file location matches URL
- Verify HTTP method (GET, POST, etc.)
- Check console for errors

**Styling issues**
- Verify Tailwind classes are valid
- Check `globals.css` for custom classes
- Ensure responsive breakpoints are correct

**Authentication not working**
- Verify OAuth credentials
- Check redirect URLs match
- Verify session handling

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- API Integration Guide: `API_INTEGRATION.md`
- Implementation Status: `COMPLETE_IMPLEMENTATION_STATUS.md`

## Support

For questions or issues:
- Check existing documentation
- Review implementation plans in `/documents/website/implementation_plans/`
- Contact development team
