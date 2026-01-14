# Visual Assets Database System

Complete system for managing ~200 free stock photos organized by motives (categories) for corporate and university themes.

## Overview

This system provides:
- **Database structure** for organizing visual assets by category and motive
- **Download scripts** for automated collection from free stock photo APIs
- **Manual collection guide** for downloading images manually
- **Update scripts** for maintaining the database

## Quick Start

### Option 1: Automated Download (Requires API Keys)

1. **Get API keys** (free):
   - Unsplash: https://unsplash.com/developers
   - Pexels: https://www.pexels.com/api/
   - Pixabay: https://pixabay.com/api/docs/

2. **Set environment variables**:
   ```bash
   export UNSPLASH_ACCESS_KEY='your_key'
   export PEXELS_API_KEY='your_key'
   export PIXABAY_API_KEY='your_key'
   ```

3. **Install Python dependencies**:
   ```bash
   pip install requests
   ```

4. **Run download script**:
   ```bash
   npm run download-photos
   # or
   python3 scripts/download-stock-photos.py
   ```

### Option 2: Manual Collection (Recommended)

1. **Follow the guide**: `scripts/visual-assets-manual-collection.md`
2. **Download images** from Unsplash, Pexels, or Pixabay
3. **Organize** into the folder structure
4. **Update database**:
   ```bash
   npm run update-visual-db
   ```

## Database Structure

### Categories (6 main categories)

1. **Corporate Professionals** (5 motives)
   - Executives & Leadership
   - Team Collaboration
   - Modern Office Workspace
   - Business Meetings
   - Corporate Training

2. **University & Education** (5 motives)
   - Campus Life
   - Lectures & Classrooms
   - Students Learning
   - Graduation & Achievement
   - Research & Innovation

3. **Technology & AI** (4 motives)
   - AI & Machine Learning
   - Digital Transformation
   - Coding & Development
   - Data & Analytics

4. **Certification & Credentials** (3 motives)
   - Certificates & Diplomas
   - Badges & Awards
   - Professional Growth

5. **Diversity & Inclusion** (2 motives)
   - Diverse Teams
   - Inclusive Workplace

6. **Abstract & Backgrounds** (3 motives)
   - Abstract Patterns
   - Gradient Backgrounds
   - Textures

**Total: 22 motives × ~8-10 photos = ~200 photos**

## File Structure

```
website/code/
├── src/lib/
│   └── visualAssetsDatabase.ts      # Main database (TypeScript)
├── public/images/                    # Image storage
│   ├── corporate-professionals/
│   │   ├── executives/
│   │   ├── team-collaboration/
│   │   └── ...
│   ├── university-education/
│   ├── technology-ai/
│   ├── certification-credentials/
│   ├── diversity-inclusion/
│   └── abstract-backgrounds/
└── scripts/
    ├── download-stock-photos.py      # Automated download script
    ├── update-visual-database.ts     # Database update script
    └── visual-assets-manual-collection.md  # Manual collection guide
```

## Usage in Code

### Import the database

```typescript
import {
  visualAssetCategories,
  getAssetsByCategory,
  getAssetsByMotive,
  searchAssetsByTags
} from '@/lib/visualAssetsDatabase';
```

### Get assets by category

```typescript
const corporateAssets = getAssetsByCategory('corporate-professionals');
```

### Get assets by motive

```typescript
const teamAssets = getAssetsByMotive('team-collaboration');
```

### Search by tags

```typescript
const aiAssets = searchAssetsByTags(['AI', 'technology', 'machine learning']);
```

### Use in components

```typescript
import Image from 'next/image';
import { getAssetsByMotive } from '@/lib/visualAssetsDatabase';

export function TeamSection() {
  const teamImages = getAssetsByMotive('team-collaboration');
  
  return (
    <div>
      {teamImages.map(asset => (
        <Image
          key={asset.id}
          src={asset.filename}
          alt={asset.description}
          width={800}
          height={600}
        />
      ))}
    </div>
  );
}
```

## Image Specifications

- **Format**: JPG (preferred) or PNG
- **Aspect Ratio**: Landscape (16:9) preferred
- **Resolution**: Minimum 1920x1080, ideally 2560x1440+
- **File Size**: Optimized to < 500KB when possible
- **Quality**: Professional, high-quality images

## Naming Convention

Format: `{motive}_{source}_{id}.jpg`

Examples:
- `executives_unsplash_abc123.jpg`
- `team-collaboration_pexels_xyz789.jpg`
- `campus-life_pixabay_def456.jpg`

## Free Stock Photo Sources

All images are sourced from free stock photo sites (no attribution required):

1. **Unsplash** (https://unsplash.com)
   - High-resolution, professional
   - Best for: Corporate, professional imagery

2. **Pexels** (https://www.pexels.com)
   - High-quality, diverse collection
   - Best for: Business, education, lifestyle

3. **Pixabay** (https://pixabay.com)
   - Good variety, large collection
   - Best for: Abstract, backgrounds, general use

## Maintenance

### Adding New Images

1. Download images to appropriate folder
2. Follow naming convention
3. Run update script: `npm run update-visual-db`
4. Images are automatically added to database

### Updating Database

```bash
npm run update-visual-db
```

This script:
- Scans all image folders
- Updates the TypeScript database
- Maintains metadata and file paths

### Checking Database

```typescript
import { TOTAL_ASSETS_TARGET, visualAssetCategories } from '@/lib/visualAssetsDatabase';

// Check total assets
const totalAssets = visualAssetCategories.reduce(
  (sum, cat) => sum + cat.motives.reduce((s, m) => s + m.assets.length, 0),
  0
);

console.log(`Total assets: ${totalAssets} / ${TOTAL_ASSETS_TARGET}`);
```

## Collection Strategy

### Target Distribution

- **Total**: ~200 photos
- **Per motive**: ~8-10 photos
- **Per category**: ~40-50 photos (varies by category)

### Priority Motives

Focus on these first for immediate website needs:
1. Corporate professionals (executives, team collaboration)
2. University education (campus life, students learning)
3. Technology & AI (AI technology, digital transformation)
4. Certification credentials (certificates, badges)

### Collection Tips

- **Diversity**: Ensure photos show diverse people and settings
- **Consistency**: Maintain similar style/quality within each motive
- **Relevance**: Choose photos that clearly represent the motive
- **Quality**: Prioritize high-resolution, professional images
- **Licensing**: Double-check that images are free to use commercially

## Troubleshooting

### Images not loading

- Check file paths in database
- Verify images exist in `public/images/` folders
- Ensure Next.js image optimization is configured

### Database not updating

- Check file permissions
- Verify TypeScript compilation
- Review script output for errors

### API download failing

- Verify API keys are set correctly
- Check rate limits (some APIs have limits)
- Try manual collection instead

## Next Steps

1. **Collect images** using manual or automated method
2. **Organize** into folder structure
3. **Update database** with collected images
4. **Integrate** into website components
5. **Optimize** images for web performance

## Resources

- **Manual Collection Guide**: `scripts/visual-assets-manual-collection.md`
- **Download Script**: `scripts/download-stock-photos.py`
- **Update Script**: `scripts/update-visual-database.ts`
- **Database File**: `src/lib/visualAssetsDatabase.ts`
- **Images Directory**: `public/images/README.md`

## Support

For questions or issues:
1. Check the manual collection guide
2. Review script documentation
3. Verify API keys and permissions
4. Check file paths and naming conventions
