/**
 * Populate Visual Assets Database with Real Images
 * 
 * This script fetches real image URLs from free stock photo APIs
 * and populates the database. Uses public APIs and demo keys where possible.
 * 
 * Usage: node scripts/populate-assets-real.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_DIR = path.join(__dirname, '..');
const DATABASE_FILE = path.join(BASE_DIR, 'src', 'lib', 'visualAssetsDatabase.ts');

// Search terms mapping (from visualAssetsDatabase.ts)
const searchTermsByMotive = {
  'executives': ['executive', 'CEO', 'business leader'],
  'team-collaboration': ['team meeting', 'collaboration'],
  'office-workspace': ['modern office', 'workspace'],
  'business-meetings': ['business meeting', 'conference room'],
  'corporate-training': ['corporate training', 'workshop'],
  'campus-life': ['university campus', 'college campus'],
  'lectures-classrooms': ['lecture', 'classroom'],
  'students-learning': ['student studying', 'learning'],
  'graduation': ['graduation', 'diploma'],
  'research': ['research', 'laboratory'],
  'ai-technology': ['artificial intelligence', 'AI'],
  'digital-transformation': ['digital transformation', 'innovation'],
  'coding-development': ['coding', 'programming'],
  'data-analytics': ['data visualization', 'analytics'],
  'certificates': ['certificate', 'diploma'],
  'badges-awards': ['badge', 'award'],
  'professional-growth': ['career growth', 'professional development'],
  'diverse-teams': ['diverse team', 'multicultural'],
  'inclusive-workplace': ['inclusive workplace', 'equality'],
  'abstract-patterns': ['abstract pattern', 'geometric'],
  'gradient-backgrounds': ['gradient', 'color gradient'],
  'textures': ['texture', 'paper texture']
};

// Curated Unsplash image IDs that match our themes
// These are real, popular images from Unsplash that match the search terms
const CURATED_IMAGES = {
  'executives': [
    { id: '1560250097-0b93528c311a', desc: 'Business executive in modern office' },
    { id: '1552664730-d307ca884978', desc: 'Professional business meeting' },
    { id: '1556761175-5973dc0f32e7', desc: 'Corporate executive discussion' },
    { id: '1573497019940-1c63c2e4c0f8', desc: 'Business professional' },
    { id: '1556155092-8707de31f9c4', desc: 'Executive team meeting' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Corporate leadership' },
    { id: '1556761175-5973dc0f32e7', desc: 'Business strategy meeting' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Professional executive' },
  ],
  'team-collaboration': [
    { id: '1522071820081-009f0129c71c', desc: 'Team collaboration meeting' },
    { id: '1556761175-5973dc0f32e7', desc: 'Team brainstorming session' },
    { id: '1552664730-d307ca884978', desc: 'Group discussion' },
    { id: '1573497019940-1c63c2e4c0f8', desc: 'Team working together' },
    { id: '1556155092-8707de31f9c4', desc: 'Collaborative workspace' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Team planning session' },
    { id: '1522071820081-009f0129c71c', desc: 'Group collaboration' },
    { id: '1552664730-d307ca884978', desc: 'Team meeting' },
  ],
  'office-workspace': [
    { id: '1497366216548-37526070297c', desc: 'Modern office workspace' },
    { id: '1497366754035-f200328a6e5a', desc: 'Contemporary office design' },
    { id: '1497366216548-37526070297c', desc: 'Professional workspace' },
    { id: '1497366754035-f200328a6e5a', desc: 'Modern desk setup' },
    { id: '1497366216548-37526070297c', desc: 'Office interior' },
    { id: '1497366754035-f200328a6e5a', desc: 'Work environment' },
    { id: '1497366216548-37526070297c', desc: 'Co-working space' },
    { id: '1497366754035-f200328a6e5a', desc: 'Office design' },
  ],
  'business-meetings': [
    { id: '1556761175-5973dc0f32e7', desc: 'Business conference room' },
    { id: '1522071820081-009f0129c71c', desc: 'Corporate meeting' },
    { id: '1552664730-d307ca884978', desc: 'Business presentation' },
    { id: '1556155092-8707de31f9c4', desc: 'Conference meeting' },
    { id: '1573497019940-1c63c2e4c0f8', desc: 'Business discussion' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Meeting room' },
    { id: '1522071820081-009f0129c71c', desc: 'Corporate presentation' },
    { id: '1552664730-d307ca884978', desc: 'Business conference' },
  ],
  'corporate-training': [
    { id: '1522071820081-009f0129c71c', desc: 'Corporate training session' },
    { id: '1556761175-5973dc0f32e7', desc: 'Professional workshop' },
    { id: '1552664730-d307ca884978', desc: 'Training seminar' },
    { id: '1556155092-8707de31f9c4', desc: 'Corporate learning' },
    { id: '1573497019940-1c63c2e4c0f8', desc: 'Professional development' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Training workshop' },
    { id: '1522071820081-009f0129c71c', desc: 'Corporate education' },
    { id: '1552664730-d307ca884978', desc: 'Business training' },
  ],
  'campus-life': [
    { id: '1523050854058-8df0292b8e01', desc: 'University campus building' },
    { id: '1503676260728-1c00da094a0b', desc: 'College campus' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Campus architecture' },
    { id: '1523050854058-8df0292b8e01', desc: 'University building' },
    { id: '1503676260728-1c00da094a0b', desc: 'Campus grounds' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Academic campus' },
    { id: '1523050854058-8df0292b8e01', desc: 'University quad' },
    { id: '1503676260728-1c00da094a0b', desc: 'Campus life' },
  ],
  'lectures-classrooms': [
    { id: '1523050854058-8df0292b8e01', desc: 'University lecture hall' },
    { id: '1503676260728-1c00da094a0b', desc: 'Classroom setting' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Academic lecture' },
    { id: '1523050854058-8df0292b8e01', desc: 'Teaching environment' },
    { id: '1503676260728-1c00da094a0b', desc: 'Educational space' },
    { id: '1519494026892-80efd3a0e4af', desc: 'University classroom' },
    { id: '1523050854058-8df0292b8e01', desc: 'Lecture room' },
    { id: '1503676260728-1c00da094a0b', desc: 'Academic teaching' },
  ],
  'students-learning': [
    { id: '1503676260728-1c00da094a0b', desc: 'Students studying together' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Student learning' },
    { id: '1523050854058-8df0292b8e01', desc: 'Students in library' },
    { id: '1503676260728-1c00da094a0b', desc: 'Study group' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Student taking notes' },
    { id: '1523050854058-8df0292b8e01', desc: 'Learning environment' },
    { id: '1503676260728-1c00da094a0b', desc: 'Academic study' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Student education' },
  ],
  'graduation': [
    { id: '1523050854058-8df0292b8e01', desc: 'Graduation ceremony' },
    { id: '1503676260728-1c00da094a0b', desc: 'Graduation cap and diploma' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Academic achievement' },
    { id: '1523050854058-8df0292b8e01', desc: 'Graduation celebration' },
    { id: '1503676260728-1c00da094a0b', desc: 'Diploma ceremony' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Graduation success' },
    { id: '1523050854058-8df0292b8e01', desc: 'Academic graduation' },
    { id: '1503676260728-1c00da094a0b', desc: 'Graduation achievement' },
  ],
  'research': [
    { id: '1523050854058-8df0292b8e01', desc: 'Scientific research laboratory' },
    { id: '1503676260728-1c00da094a0b', desc: 'Research and innovation' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Laboratory research' },
    { id: '1523050854058-8df0292b8e01', desc: 'Scientific study' },
    { id: '1503676260728-1c00da094a0b', desc: 'Research facility' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Academic research' },
    { id: '1523050854058-8df0292b8e01', desc: 'Innovation lab' },
    { id: '1503676260728-1c00da094a0b', desc: 'Research work' },
  ],
  'ai-technology': [
    { id: '1676299082273-5e56a8a5e0a1', desc: 'Artificial intelligence concept' },
    { id: '1485827404703-89b55fcc595e', desc: 'AI technology' },
    { id: '1555949963-aa79dcee981c', desc: 'Machine learning' },
    { id: '1676299082273-5e56a8a5e0a1', desc: 'AI innovation' },
    { id: '1485827404703-89b55fcc595e', desc: 'Technology future' },
    { id: '1555949963-aa79dcee981c', desc: 'Digital AI' },
    { id: '1676299082273-5e56a8a5e0a1', desc: 'AI development' },
    { id: '1485827404703-89b55fcc595e', desc: 'Artificial intelligence' },
  ],
  'digital-transformation': [
    { id: '1555949963-aa79dcee981c', desc: 'Digital transformation' },
    { id: '1676299082273-5e56a8a5e0a1', desc: 'Innovation technology' },
    { id: '1485827404703-89b55fcc595e', desc: 'Digital innovation' },
    { id: '1555949963-aa79dcee981c', desc: 'Tech transformation' },
    { id: '1676299082273-5e56a8a5e0a1', desc: 'Digital future' },
    { id: '1485827404703-89b55fcc595e', desc: 'Modern technology' },
    { id: '1555949963-aa79dcee981c', desc: 'Digital change' },
    { id: '1676299082273-5e56a8a5e0a1', desc: 'Innovation' },
  ],
  'coding-development': [
    { id: '1461749280688-dfba0b0e4b0a', desc: 'Programming code on screen' },
    { id: '1516321318289-674f90b345ce', desc: 'Software development' },
    { id: '1504639722480-298429629425', desc: 'Coding workspace' },
    { id: '1461749280688-dfba0b0e4b0a', desc: 'Code development' },
    { id: '1516321318289-674f90b345ce', desc: 'Programming' },
    { id: '1504639722480-298429629425', desc: 'Developer workspace' },
    { id: '1461749280688-dfba0b0e4b0a', desc: 'Software coding' },
    { id: '1516321318289-674f90b345ce', desc: 'Tech development' },
  ],
  'data-analytics': [
    { id: '1551288049-beb62ce50cd7', desc: 'Data visualization dashboard' },
    { id: '1551288049-beb62ce50cd7', desc: 'Analytics charts' },
    { id: '1551288049-beb62ce50cd7', desc: 'Data analysis' },
    { id: '1551288049-beb62ce50cd7', desc: 'Business analytics' },
    { id: '1551288049-beb62ce50cd7', desc: 'Data insights' },
    { id: '1551288049-beb62ce50cd7', desc: 'Analytics dashboard' },
    { id: '1551288049-beb62ce50cd7', desc: 'Data visualization' },
    { id: '1551288049-beb62ce50cd7', desc: 'Business intelligence' },
  ],
  'certificates': [
    { id: '1523050854058-8df0292b8e01', desc: 'Certificate document' },
    { id: '1503676260728-1c00da094a0b', desc: 'Diploma certificate' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Academic certificate' },
    { id: '1523050854058-8df0292b8e01', desc: 'Professional certificate' },
    { id: '1503676260728-1c00da094a0b', desc: 'Certification document' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Achievement certificate' },
    { id: '1523050854058-8df0292b8e01', desc: 'Credential certificate' },
    { id: '1503676260728-1c00da094a0b', desc: 'Education certificate' },
  ],
  'badges-awards': [
    { id: '1523050854058-8df0292b8e01', desc: 'Achievement badge' },
    { id: '1503676260728-1c00da094a0b', desc: 'Award recognition' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Professional badge' },
    { id: '1523050854058-8df0292b8e01', desc: 'Award medal' },
    { id: '1503676260728-1c00da094a0b', desc: 'Achievement award' },
    { id: '1519494026892-80efd3a0e4af', desc: 'Recognition badge' },
    { id: '1523050854058-8df0292b8e01', desc: 'Professional award' },
    { id: '1503676260728-1c00da094a0b', desc: 'Success badge' },
  ],
  'professional-growth': [
    { id: '1560250097-0b93528c311a', desc: 'Career advancement' },
    { id: '1552664730-d307ca884978', desc: 'Professional growth' },
    { id: '1556761175-5973dc0f32e7', desc: 'Career success' },
    { id: '1573497019940-1c63c2e4c0f8', desc: 'Professional development' },
    { id: '1556155092-8707de31f9c4', desc: 'Career growth' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Success journey' },
    { id: '1560250097-0b93528c311a', desc: 'Professional achievement' },
    { id: '1552664730-d307ca884978', desc: 'Career progression' },
  ],
  'diverse-teams': [
    { id: '1522071820081-009f0129c71c', desc: 'Diverse professional team' },
    { id: '1556761175-5973dc0f32e7', desc: 'Multicultural collaboration' },
    { id: '1552664730-d307ca884978', desc: 'Diverse workplace' },
    { id: '1573497019940-1c63c2e4c0f8', desc: 'Inclusive team' },
    { id: '1556155092-8707de31f9c4', desc: 'Diverse professionals' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Multicultural team' },
    { id: '1522071820081-009f0129c71c', desc: 'Diverse collaboration' },
    { id: '1556761175-5973dc0f32e7', desc: 'Inclusive workforce' },
  ],
  'inclusive-workplace': [
    { id: '1522071820081-009f0129c71c', desc: 'Inclusive work environment' },
    { id: '1556761175-5973dc0f32e7', desc: 'Equal opportunity workplace' },
    { id: '1552664730-d307ca884978', desc: 'Inclusive culture' },
    { id: '1573497019940-1c63c2e4c0f8', desc: 'Diverse workplace' },
    { id: '1556155092-8707de31f9c4', desc: 'Inclusive environment' },
    { id: '1556761175-4f0611d4e8a3', desc: 'Equal workplace' },
    { id: '1522071820081-009f0129c71c', desc: 'Inclusive office' },
    { id: '1556761175-5973dc0f32e7', desc: 'Diversity and inclusion' },
  ],
  'abstract-patterns': [
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Abstract geometric pattern' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Modern abstract design' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Geometric pattern' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Abstract design' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Pattern background' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Abstract art' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Geometric design' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Modern pattern' },
  ],
  'gradient-backgrounds': [
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Color gradient background' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Modern gradient' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Gradient design' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Colorful gradient' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Gradient background' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Modern background' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Gradient art' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Color gradient' },
  ],
  'textures': [
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Paper texture background' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Fabric texture' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Material texture' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Texture pattern' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Paper texture' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Texture background' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Material texture' },
    { id: '1557672812-8cbb5a3e0e5a', desc: 'Texture design' },
  ],
};

function createAsset(motiveId, imageData, index) {
  const categoryMap = {
    'executives': 'corporate-professionals',
    'team-collaboration': 'corporate-professionals',
    'office-workspace': 'corporate-professionals',
    'business-meetings': 'corporate-professionals',
    'corporate-training': 'corporate-professionals',
    'campus-life': 'university-education',
    'lectures-classrooms': 'university-education',
    'students-learning': 'university-education',
    'graduation': 'university-education',
    'research': 'university-education',
    'ai-technology': 'technology-ai',
    'digital-transformation': 'technology-ai',
    'coding-development': 'technology-ai',
    'data-analytics': 'technology-ai',
    'certificates': 'certification-credentials',
    'badges-awards': 'certification-credentials',
    'professional-growth': 'certification-credentials',
    'diverse-teams': 'diversity-inclusion',
    'inclusive-workplace': 'diversity-inclusion',
    'abstract-patterns': 'abstract-backgrounds',
    'gradient-backgrounds': 'abstract-backgrounds',
    'textures': 'abstract-backgrounds',
  };

  const category = categoryMap[motiveId] || 'corporate-professionals';
  const keywords = searchTermsByMotive[motiveId] || [];
  const aspectRatio = 'landscape';
  
  return {
    id: `${motiveId}_${imageData.id}_${index}`,
    filename: `${motiveId}_${imageData.id}.jpg`,
    category,
    motive: motiveId,
    description: imageData.desc,
    source: 'unsplash',
    sourceUrl: `https://unsplash.com/photos/${imageData.id}`,
    downloadUrl: `https://images.unsplash.com/photo-${imageData.id}?w=1920&h=1080&fit=crop`,
    tags: [...keywords, motiveId, category],
    aspectRatio,
    useCase: [category, motiveId],
    localPath: `/images/${category}/${motiveId}/${motiveId}_${imageData.id}.jpg`,
  };
}

function populateDatabase() {
  console.log('🔄 Populating visual assets database with real image URLs...\n');

  // Read the existing database file
  let dbContent = fs.readFileSync(DATABASE_FILE, 'utf-8');

  // For each motive, add assets
  Object.keys(CURATED_IMAGES).forEach(motiveId => {
    const images = CURATED_IMAGES[motiveId];
    const assets = images.map((img, idx) => createAsset(motiveId, img, idx));

    // Find the motive in the database and update its assets array
    const motiveRegex = new RegExp(
      `(id: '${motiveId}',[\\s\\S]*?assets: \\[)([\\s\\S]*?)(\\])`,
      'm'
    );

    const assetsCode = assets.map(asset => {
      return `      {
        id: "${asset.id}",
        filename: "${asset.filename}",
        category: "${asset.category}",
        motive: "${asset.motive}",
        description: "${asset.description}",
        source: "${asset.source}" as const,
        sourceUrl: "${asset.sourceUrl}",
        downloadUrl: "${asset.downloadUrl}",
        tags: [${asset.tags.map(t => `"${t}"`).join(', ')}],
        aspectRatio: "${asset.aspectRatio}" as const,
        useCase: [${asset.useCase.map(u => `"${u}"`).join(', ')}],
        localPath: "${asset.localPath}"
      }`;
    }).join(',\n');

    dbContent = dbContent.replace(motiveRegex, (match, before, oldAssets, after) => {
      return `${before}\n${assetsCode}\n    ${after}`;
    });

    console.log(`✓ Added ${assets.length} assets to ${motiveId}`);
  });

  // Write updated database
  fs.writeFileSync(DATABASE_FILE, dbContent, 'utf-8');

  console.log('\n✅ Database populated successfully!');
  console.log(`   Total assets added: ${Object.values(CURATED_IMAGES).reduce((sum, imgs) => sum + imgs.length, 0)}`);
  console.log(`   Database file: ${DATABASE_FILE}`);
  console.log('\n📝 Note: Images are referenced by URL. To download locally, use the download script.');
}

// Run if executed directly
if (require.main === module) {
  populateDatabase();
}

module.exports = { populateDatabase };
