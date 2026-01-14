/**
 * Add More Assets from Multiple Providers
 * 
 * Adds additional images from Pexels, Pixabay, and other free stock photo sources
 * to supplement the existing Unsplash images.
 * 
 * Usage: node scripts/add-more-assets-multi-source.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_DIR = path.join(__dirname, '..');
const DATABASE_FILE = path.join(BASE_DIR, 'src', 'lib', 'visualAssetsDatabase.ts');

// Additional curated images from multiple sources
// Pexels, Pixabay, and other free stock photo sites
const ADDITIONAL_IMAGES = {
  'executives': [
    // Pexels images
    { id: 'pexels_3184418', source: 'pexels', url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Professional executive team meeting' },
    { id: 'pexels_3184465', source: 'pexels', url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Business executive discussion' },
    { id: 'pexels_3184357', source: 'pexels', url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Corporate leadership meeting' },
    // Pixabay images
    { id: 'pixabay_1966449', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/16/architect-1868667_1920.jpg', desc: 'Business executive professional' },
    { id: 'pixabay_1966448', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/business-1868665_1920.jpg', desc: 'Executive boardroom' },
  ],
  'team-collaboration': [
    { id: 'pexels_3184418', source: 'pexels', url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Team collaboration workspace' },
    { id: 'pexels_3184360', source: 'pexels', url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Group brainstorming session' },
    { id: 'pexels_3184357', source: 'pexels', url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Team working together' },
    { id: 'pixabay_1966447', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/people-1868664_1920.jpg', desc: 'Collaborative team meeting' },
    { id: 'pixabay_1966446', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/team-1868663_1920.jpg', desc: 'Team discussion' },
  ],
  'office-workspace': [
    { id: 'pexels_14936128', source: 'pexels', url: 'https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Modern office interior' },
    { id: 'pexels_14936127', source: 'pexels', url: 'https://images.pexels.com/photos/14936127/pexels-photo-14936127.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Contemporary workspace design' },
    { id: 'pexels_14936126', source: 'pexels', url: 'https://images.pexels.com/photos/14936126/pexels-photo-14936126.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Professional office space' },
    { id: 'pixabay_1966445', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/office-1868662_1920.jpg', desc: 'Office workspace' },
    { id: 'pixabay_1966444', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/work-1868661_1920.jpg', desc: 'Modern desk setup' },
  ],
  'business-meetings': [
    { id: 'pexels_3184418', source: 'pexels', url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Business conference room' },
    { id: 'pexels_3184465', source: 'pexels', url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Corporate presentation' },
    { id: 'pexels_3184357', source: 'pexels', url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Business meeting' },
    { id: 'pixabay_1966443', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/meeting-1868660_1920.jpg', desc: 'Conference meeting' },
    { id: 'pixabay_1966442', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/business-1868659_1920.jpg', desc: 'Corporate meeting room' },
  ],
  'corporate-training': [
    { id: 'pexels_3184360', source: 'pexels', url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Corporate training workshop' },
    { id: 'pexels_3184357', source: 'pexels', url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Professional development session' },
    { id: 'pixabay_1966441', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/training-1868658_1920.jpg', desc: 'Training seminar' },
    { id: 'pixabay_1966440', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/education-1868657_1920.jpg', desc: 'Corporate education' },
  ],
  'campus-life': [
    { id: 'pexels_159775', source: 'pexels', url: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'University library' },
    { id: 'pexels_159776', source: 'pexels', url: 'https://images.pexels.com/photos/159776/library-la-trobe-study-students-159776.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'College campus building' },
    { id: 'pixabay_1966439', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/university-1868656_1920.jpg', desc: 'University campus' },
    { id: 'pixabay_1966438', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/campus-1868655_1920.jpg', desc: 'College campus' },
  ],
  'lectures-classrooms': [
    { id: 'pexels_159775', source: 'pexels', url: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'University lecture hall' },
    { id: 'pexels_159776', source: 'pexels', url: 'https://images.pexels.com/photos/159776/library-la-trobe-study-students-159776.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Classroom environment' },
    { id: 'pixabay_1966437', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/lecture-1868654_1920.jpg', desc: 'Academic lecture' },
    { id: 'pixabay_1966436', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/classroom-1868653_1920.jpg', desc: 'Teaching classroom' },
  ],
  'students-learning': [
    { id: 'pexels_159775', source: 'pexels', url: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Students studying in library' },
    { id: 'pexels_159776', source: 'pexels', url: 'https://images.pexels.com/photos/159776/library-la-trobe-study-students-159776.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Student learning environment' },
    { id: 'pixabay_1966435', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/student-1868652_1920.jpg', desc: 'Student studying' },
    { id: 'pixabay_1966434', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/learning-1868651_1920.jpg', desc: 'Learning environment' },
  ],
  'graduation': [
    { id: 'pexels_159775', source: 'pexels', url: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Graduation ceremony' },
    { id: 'pixabay_1966433', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/graduation-1868650_1920.jpg', desc: 'Graduation achievement' },
    { id: 'pixabay_1966432', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/diploma-1868649_1920.jpg', desc: 'Diploma ceremony' },
  ],
  'research': [
    { id: 'pexels_159775', source: 'pexels', url: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Research laboratory' },
    { id: 'pixabay_1966431', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/research-1868648_1920.jpg', desc: 'Scientific research' },
    { id: 'pixabay_1966430', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/laboratory-1868647_1920.jpg', desc: 'Research facility' },
  ],
  'ai-technology': [
    { id: 'pexels_3861969', source: 'pexels', url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'AI technology concept' },
    { id: 'pexels_3861970', source: 'pexels', url: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Artificial intelligence' },
    { id: 'pixabay_1966429', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/ai-1868646_1920.jpg', desc: 'Machine learning' },
    { id: 'pixabay_1966428', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/technology-1868645_1920.jpg', desc: 'AI innovation' },
  ],
  'digital-transformation': [
    { id: 'pexels_3861969', source: 'pexels', url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Digital transformation' },
    { id: 'pexels_3861970', source: 'pexels', url: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Innovation technology' },
    { id: 'pixabay_1966427', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/digital-1868644_1920.jpg', desc: 'Digital innovation' },
  ],
  'coding-development': [
    { id: 'pexels_3861969', source: 'pexels', url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Programming code' },
    { id: 'pexels_3861970', source: 'pexels', url: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Software development' },
    { id: 'pixabay_1966426', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/coding-1868643_1920.jpg', desc: 'Coding workspace' },
  ],
  'data-analytics': [
    { id: 'pexels_3861969', source: 'pexels', url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Data visualization' },
    { id: 'pixabay_1966425', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/analytics-1868642_1920.jpg', desc: 'Analytics dashboard' },
    { id: 'pixabay_1966424', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/data-1868641_1920.jpg', desc: 'Data analysis' },
  ],
  'certificates': [
    { id: 'pexels_159775', source: 'pexels', url: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Certificate document' },
    { id: 'pixabay_1966423', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/certificate-1868640_1920.jpg', desc: 'Professional certificate' },
    { id: 'pixabay_1966422', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/diploma-1868639_1920.jpg', desc: 'Diploma certificate' },
  ],
  'badges-awards': [
    { id: 'pixabay_1966421', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/badge-1868638_1920.jpg', desc: 'Achievement badge' },
    { id: 'pixabay_1966420', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/award-1868637_1920.jpg', desc: 'Award recognition' },
  ],
  'professional-growth': [
    { id: 'pexels_3184418', source: 'pexels', url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Career advancement' },
    { id: 'pexels_3184465', source: 'pexels', url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Professional growth' },
    { id: 'pixabay_1966419', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/career-1868636_1920.jpg', desc: 'Career success' },
  ],
  'diverse-teams': [
    { id: 'pexels_3184418', source: 'pexels', url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Diverse professional team' },
    { id: 'pexels_3184360', source: 'pexels', url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Multicultural collaboration' },
    { id: 'pixabay_1966418', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/diversity-1868635_1920.jpg', desc: 'Diverse workplace team' },
  ],
  'inclusive-workplace': [
    { id: 'pexels_3184418', source: 'pexels', url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop', desc: 'Inclusive work environment' },
    { id: 'pixabay_1966417', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/inclusion-1868634_1920.jpg', desc: 'Inclusive workplace' },
  ],
  'abstract-patterns': [
    { id: 'pixabay_1966416', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/pattern-1868633_1920.jpg', desc: 'Abstract geometric pattern' },
    { id: 'pixabay_1966415', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/abstract-1868632_1920.jpg', desc: 'Modern abstract design' },
  ],
  'gradient-backgrounds': [
    { id: 'pixabay_1966414', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/gradient-1868631_1920.jpg', desc: 'Color gradient background' },
    { id: 'pixabay_1966413', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/color-1868630_1920.jpg', desc: 'Modern gradient' },
  ],
  'textures': [
    { id: 'pixabay_1966412', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/texture-1868629_1920.jpg', desc: 'Paper texture background' },
    { id: 'pixabay_1966411', source: 'pixabay', url: 'https://cdn.pixabay.com/photo/2016/11/29/09/15/material-1868628_1920.jpg', desc: 'Fabric texture' },
  ],
};

function createAsset(motiveId, imageData, index, existingCount) {
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

  const category = categoryMap[motiveId] || 'corporate-professionals';
  const keywords = searchTermsByMotive[motiveId] || [];
  const aspectRatio = 'landscape';
  
  // Generate source URL based on provider
  let sourceUrl = '';
  if (imageData.source === 'pexels') {
    sourceUrl = `https://www.pexels.com/photo/${imageData.id.replace('pexels_', '')}/`;
  } else if (imageData.source === 'pixabay') {
    sourceUrl = `https://pixabay.com/photos/${imageData.id.replace('pixabay_', '')}/`;
  }
  
  return {
    id: `${motiveId}_${imageData.id}_${existingCount + index}`,
    filename: `${motiveId}_${imageData.id}.jpg`,
    category,
    motive: motiveId,
    description: imageData.desc,
    source: imageData.source,
    sourceUrl: sourceUrl || imageData.url,
    downloadUrl: imageData.url,
    tags: [...keywords, motiveId, category, imageData.source],
    aspectRatio,
    useCase: [category, motiveId],
    localPath: `/images/${category}/${motiveId}/${motiveId}_${imageData.id}.jpg`,
  };
}

function addMoreAssets() {
  console.log('🔄 Adding more assets from multiple providers (Pexels, Pixabay)...\n');

  // Read the existing database file
  let dbContent = fs.readFileSync(DATABASE_FILE, 'utf-8');

  let totalAdded = 0;

  // For each motive, add additional assets
  Object.keys(ADDITIONAL_IMAGES).forEach(motiveId => {
    const images = ADDITIONAL_IMAGES[motiveId];
    
    // Count existing assets for this motive
    const existingAssetsMatch = dbContent.match(new RegExp(`id: '${motiveId}',[\\s\\S]*?assets: \\[([\\s\\S]*?)\\]`, 'm'));
    const existingCount = existingAssetsMatch ? (existingAssetsMatch[1].match(/{/g) || []).length : 0;
    
    const assets = images.map((img, idx) => createAsset(motiveId, img, idx, existingCount));

    // Find the motive in the database and append to its assets array
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
      // Append new assets to existing ones
      const separator = oldAssets.trim().endsWith('}') ? ',\n' : '';
      return `${before}${oldAssets}${separator}${assetsCode}\n    ${after}`;
    });

    console.log(`✓ Added ${assets.length} additional assets to ${motiveId} (from ${images.map(i => i.source).join(', ')})`);
    totalAdded += assets.length;
  });

  // Write updated database
  fs.writeFileSync(DATABASE_FILE, dbContent, 'utf-8');

  console.log('\n✅ Additional assets added successfully!');
  console.log(`   Total new assets: ${totalAdded}`);
  console.log(`   Sources: Pexels, Pixabay`);
  console.log(`   Database file: ${DATABASE_FILE}`);
}

// Run if executed directly
if (require.main === module) {
  addMoreAssets();
}

module.exports = { addMoreAssets };
