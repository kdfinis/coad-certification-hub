# Visual Assets Preview Page

## Access the Preview

The visual assets preview page is available at:

**URL**: `http://localhost:8080/visual-assets` (when dev server is running)

Or in production: `https://coad.ai/visual-assets`

## Features

### 1. **Search & Filter**
- **Search Bar**: Search by keyword, motive name, or description
- **Category Filter**: Filter by main category (Corporate, University, Technology, etc.)
- **Motive Filter**: Filter by specific motive within a category
- **Keyword Cloud**: Click popular keywords to search

### 2. **View Modes**
- **Grid View**: Card-based layout with image thumbnails
- **List View**: Detailed list with smaller thumbnails

### 3. **Organization by Keywords**
- Each motive displays its search keywords as badges
- Keywords are extracted from `searchTermsByMotive` in the database
- All keywords are searchable

### 4. **Asset Information**
For each asset, you can see:
- Filename
- Description
- Source (Unsplash, Pexels, or Pixabay)
- Aspect ratio (landscape, portrait, square)
- Tags
- Download status (if image exists locally)

### 5. **Statistics**
- Total categories (6)
- Total motives (22)
- Total assets found
- Total keywords available

## Usage

### Starting the Preview

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Navigate to**:
   ```
   http://localhost:8080/visual-assets
   ```

### Searching Assets

1. **By Keyword**: Type any keyword in the search bar
   - Examples: "executive", "campus", "AI", "training"

2. **By Category**: Select a category from the dropdown
   - Corporate Professionals
   - University & Education
   - Technology & AI
   - Certification & Credentials
   - Diversity & Inclusion
   - Abstract & Backgrounds

3. **By Motive**: Select a specific motive
   - Only available after selecting a category

4. **By Clicking Keywords**: Click any keyword in the keyword cloud

### Viewing Assets

- **Grid View**: Best for browsing images visually
- **List View**: Best for seeing detailed information

## Database Structure

The preview reads from:
- `src/lib/visualAssetsDatabase.ts` - Main database file
- `public/images/` - Image storage directory

## Adding Images

After downloading images:

1. **Place images** in appropriate folders:
   ```
   public/images/{category}/{motive}/{filename}.jpg
   ```

2. **Update database**:
   ```bash
   npm run update-visual-db
   ```

3. **Refresh preview page** to see new images

## Keywords by Category

### Corporate Professionals
- executives, CEO, business leader, board meeting
- team meeting, collaboration, brainstorming
- modern office, workspace, office desk
- business meeting, conference room, presentation
- corporate training, workshop, seminar

### University & Education
- university campus, college campus, campus building
- lecture, classroom, teaching, professor
- student studying, learning, taking notes
- graduation, diploma, academic achievement
- research, laboratory, scientific research

### Technology & AI
- artificial intelligence, AI, machine learning
- digital transformation, innovation, digitalization
- coding, programming, software development
- data visualization, analytics, data

### Certification & Credentials
- certificate, diploma, credential
- badge, award, achievement, recognition
- career growth, professional development, success

### Diversity & Inclusion
- diverse team, multicultural, diversity
- inclusive workplace, equality, inclusion

### Abstract & Backgrounds
- abstract pattern, geometric, abstract design
- gradient, color gradient, modern background
- texture, paper texture, fabric texture

## Troubleshooting

### Images Not Showing

1. **Check file paths**: Ensure images are in `public/images/` folder
2. **Verify database**: Run `npm run update-visual-db`
3. **Check localPath**: Asset should have `localPath` property set
4. **File format**: Ensure images are JPG, PNG, or WebP

### Search Not Working

1. **Clear filters**: Click "Clear Filters" button
2. **Check spelling**: Verify search term spelling
3. **Try keywords**: Use keywords from the keyword cloud

### Page Not Loading

1. **Check dev server**: Ensure `npm run dev` is running
2. **Check route**: Verify URL is `/visual-assets`
3. **Check console**: Look for errors in browser console

## Next Steps

1. **Download images** using the collection guide
2. **Update database** with downloaded images
3. **Browse preview** to verify organization
4. **Use in website** by importing from database

## Integration Example

```typescript
import { getAssetsByMotive } from '@/lib/visualAssetsDatabase';

// Get assets for a specific motive
const teamAssets = getAssetsByMotive('team-collaboration');

// Use in component
{teamAssets.map(asset => (
  <Image
    key={asset.id}
    src={asset.localPath || asset.downloadUrl}
    alt={asset.description}
    width={800}
    height={600}
  />
))}
```
