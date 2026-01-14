# Quick Start: Visual Assets Preview

## 🚀 Access the Preview

1. **Start the dev server**:
   ```bash
   cd website/code
   npm run dev
   ```

2. **Open in browser**:
   ```
   http://localhost:8080/visual-assets
   ```

## 📋 What You'll See

- **6 Categories** organized by theme
- **22 Motives** (keywords/themes) with search terms
- **Keyword-based organization** - all assets sorted by search keywords
- **Search & Filter** functionality
- **Grid & List views** for browsing

## 🔍 Features

### Search by Keywords
- Type any keyword in the search bar
- Click keywords in the keyword cloud
- Filter by category or specific motive

### Browse by Category
1. Corporate Professionals (5 motives)
2. University & Education (5 motives)
3. Technology & AI (4 motives)
4. Certification & Credentials (3 motives)
5. Diversity & Inclusion (2 motives)
6. Abstract & Backgrounds (3 motives)

### View Assets
- **Grid View**: Visual browsing with thumbnails
- **List View**: Detailed information view

## 📁 File Structure

```
website/code/
├── src/app/visual-assets/page.tsx    # Preview page
├── src/lib/visualAssetsDatabase.ts    # Database
└── public/images/                     # Image storage
    ├── corporate-professionals/
    ├── university-education/
    ├── technology-ai/
    └── ...
```

## 🎯 Next Steps

1. **View the preview** at `/visual-assets`
2. **Download images** using the collection guide
3. **Update database** with `npm run update-visual-db`
4. **Use in website** by importing from database

## 📚 Documentation

- **Full Guide**: `VISUAL_ASSETS_README.md`
- **Preview Guide**: `VISUAL_ASSETS_PREVIEW.md`
- **Collection Guide**: `scripts/visual-assets-manual-collection.md`
- **Quick Links**: `scripts/quick-search-links.md`
