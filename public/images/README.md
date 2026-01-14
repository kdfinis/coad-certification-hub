# Visual Assets Directory

This directory contains all visual assets (images, photos) organized by category and motive for the COAD website.

## Structure

```
images/
├── corporate-professionals/     # Business and corporate imagery
│   ├── executives/              # C-suite, leadership
│   ├── team-collaboration/      # Team meetings, collaboration
│   ├── office-workspace/        # Modern offices, workspaces
│   ├── business-meetings/       # Conferences, presentations
│   └── corporate-training/      # Workshops, seminars
│
├── university-education/         # Academic and educational imagery
│   ├── campus-life/             # University campuses
│   ├── lectures-classrooms/     # Teaching, classrooms
│   ├── students-learning/       # Students studying
│   ├── graduation/              # Graduation ceremonies
│   └── research/                # Research, laboratories
│
├── technology-ai/               # Technology and AI imagery
│   ├── ai-technology/           # AI concepts, ML
│   ├── digital-transformation/  # Innovation, digitalization
│   ├── coding-development/      # Programming, development
│   └── data-analytics/          # Data visualization, analytics
│
├── certification-credentials/   # Certificates and credentials
│   ├── certificates/            # Certificates, diplomas
│   ├── badges-awards/           # Badges, awards
│   └── professional-growth/     # Career advancement
│
├── diversity-inclusion/         # Diversity and inclusion
│   ├── diverse-teams/           # Multicultural teams
│   └── inclusive-workplace/     # Inclusive environments
│
└── abstract-backgrounds/        # Abstract and backgrounds
    ├── abstract-patterns/       # Geometric patterns
    ├── gradient-backgrounds/    # Color gradients
    └── textures/                # Textures, materials
```

## Image Sources

All images are sourced from free stock photo sites:
- **Unsplash** (https://unsplash.com) - Free, no attribution required
- **Pexels** (https://www.pexels.com) - Free, no attribution required
- **Pixabay** (https://pixabay.com) - Free, no attribution required

## Naming Convention

Format: `{motive}_{source}_{id}.jpg`

Examples:
- `executives_unsplash_abc123.jpg`
- `team-collaboration_pexels_xyz789.jpg`
- `campus-life_pixabay_def456.jpg`

## Image Specifications

- **Format**: JPG (preferred) or PNG
- **Aspect Ratio**: Landscape (16:9) preferred
- **Resolution**: Minimum 1920x1080, ideally 2560x1440+
- **File Size**: Optimized to < 500KB when possible
- **Quality**: Professional, high-quality images

## Usage in Code

Images are referenced via the visual assets database:

```typescript
import { getAssetsByMotive, searchAssetsByTags } from '@/lib/visualAssetsDatabase';

// Get all assets for a specific motive
const teamAssets = getAssetsByMotive('team-collaboration');

// Search by tags
const corporateAssets = searchAssetsByTags(['corporate', 'business']);
```

## Adding New Images

1. Download images from free stock photo sites
2. Place in appropriate category/motive folder
3. Follow naming convention
4. Run update script: `npm run update-visual-db`
5. Images will be automatically added to database

## Database

The visual assets database is maintained in:
- `src/lib/visualAssetsDatabase.ts` - TypeScript database with metadata
- `src/lib/visualAssetsDatabase.json` - JSON export (if using automated download)

## Target Count

- **Total**: ~200 photos
- **Per motive**: ~8-10 photos
- **Total motives**: 22

## Maintenance

- Regularly check for broken links
- Optimize images for web (compress if needed)
- Update database when adding/removing images
- Ensure all images are properly licensed (free to use)
