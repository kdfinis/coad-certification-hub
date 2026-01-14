/**
 * Update Visual Assets Database
 * 
 * This script reads downloaded images and updates the visualAssetsDatabase.ts
 * with actual file paths and metadata.
 * 
 * Usage: ts-node scripts/update-visual-database.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const BASE_DIR = path.join(__dirname, '..');
const IMAGES_DIR = path.join(BASE_DIR, 'public', 'images');
const DATABASE_FILE = path.join(BASE_DIR, 'src', 'lib', 'visualAssetsDatabase.ts');

interface ImageInfo {
  filename: string;
  category: string;
  motive: string;
  filepath: string;
  size: number;
}

function getImageInfo(dir: string, category: string, motive: string): ImageInfo[] {
  const images: ImageInfo[] = [];
  const motiveDir = path.join(dir, category, motive);
  
  if (!fs.existsSync(motiveDir)) {
    return images;
  }
  
  const files = fs.readdirSync(motiveDir);
  
  for (const file of files) {
    if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      const filepath = path.join(motiveDir, file);
      const stats = fs.statSync(filepath);
      
      images.push({
        filename: file,
        category,
        motive,
        filepath: `/images/${category}/${motive}/${file}`,
        size: stats.size
      });
    }
  }
  
  return images;
}

function generateAssetFromImage(image: ImageInfo): string {
  const id = image.filename.replace(/\.(jpg|jpeg|png|webp)$/i, '').replace(/[^a-z0-9]/gi, '_');
  const description = image.motive.split('-').map(w => 
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join(' ');
  
  return `    {
      id: "${id}",
      filename: "${image.filename}",
      category: "${image.category}",
      motive: "${image.motive}",
      description: "${description}",
      source: "unsplash" as const,
      sourceUrl: "",
      downloadUrl: "",
      tags: ["${image.motive}", "${image.category}"],
      aspectRatio: "landscape" as const,
      useCase: ["${image.category}", "${image.motive}"]
    }`;
}

function updateDatabase() {
  console.log('🔄 Updating Visual Assets Database...\n');
  
  const categories = [
    { id: 'corporate-professionals', motives: ['executives', 'team-collaboration', 'office-workspace', 'business-meetings', 'corporate-training'] },
    { id: 'university-education', motives: ['campus-life', 'lectures-classrooms', 'students-learning', 'graduation', 'research'] },
    { id: 'technology-ai', motives: ['ai-technology', 'digital-transformation', 'coding-development', 'data-analytics'] },
    { id: 'certification-credentials', motives: ['certificates', 'badges-awards', 'professional-growth'] },
    { id: 'diversity-inclusion', motives: ['diverse-teams', 'inclusive-workplace'] },
    { id: 'abstract-backgrounds', motives: ['abstract-patterns', 'gradient-backgrounds', 'textures'] }
  ];
  
  const allImages: ImageInfo[] = [];
  
  // Collect all images
  for (const category of categories) {
    for (const motive of category.motives) {
      const images = getImageInfo(IMAGES_DIR, category.id, motive);
      allImages.push(...images);
    }
  }
  
  console.log(`📊 Found ${allImages.length} images\n`);
  
  // Read existing database file
  let dbContent = fs.readFileSync(DATABASE_FILE, 'utf-8');
  
  // Generate assets array for each motive
  const assetsByMotive: Record<string, ImageInfo[]> = {};
  for (const image of allImages) {
    if (!assetsByMotive[image.motive]) {
      assetsByMotive[image.motive] = [];
    }
    assetsByMotive[image.motive].push(image);
  }
  
  // Update each motive's assets array
  for (const category of categories) {
    for (const motive of category.motives) {
      const images = assetsByMotive[motive] || [];
      
      if (images.length > 0) {
        const assetsCode = images.map(img => generateAssetFromImage(img)).join(',\n');
        
        // Find and replace the assets array for this motive
        const motiveRegex = new RegExp(
          `(id: "${motive}",[\\s\\S]*?assets: \\[)([\\s\\S]*?)(\\])`,
          'm'
        );
        
        dbContent = dbContent.replace(motiveRegex, (match, before, oldAssets, after) => {
          return `${before}\n${assetsCode}\n    ${after}`;
        });
        
        console.log(`✓ Updated ${motive}: ${images.length} assets`);
      } else {
        console.log(`⊘ No images found for ${motive}`);
      }
    }
  }
  
  // Write updated database
  fs.writeFileSync(DATABASE_FILE, dbContent, 'utf-8');
  
  console.log(`\n✅ Database updated successfully!`);
  console.log(`   Total images: ${allImages.length}`);
  console.log(`   Database file: ${DATABASE_FILE}`);
}

// Run if executed directly
if (require.main === module) {
  updateDatabase();
}

export { updateDatabase };
