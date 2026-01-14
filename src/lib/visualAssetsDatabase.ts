/**
 * Visual Assets Database
 * 
 * Database of ~200 free stock photos organized by motives (categories)
 * for corporate and university world themes.
 * 
 * Sources: Unsplash, Pexels, Pixabay (all free, no attribution required)
 */

export interface VisualAsset {
  id: string;
  filename: string;
  category: string;
  motive: string;
  description: string;
  source: 'unsplash' | 'pexels' | 'pixabay';
  sourceUrl: string;
  downloadUrl: string;
  tags: string[];
  aspectRatio: 'landscape' | 'portrait' | 'square';
  useCase: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  motives: Motive[];
}

export interface Motive {
  id: string;
  name: string;
  description: string;
  assets: VisualAsset[];
}

// Main categories and motives for corporate and university themes
export const visualAssetCategories: Category[] = [
  {
    id: 'corporate-professionals',
    name: 'Corporate Professionals',
    description: 'Business professionals, executives, team collaboration',
    motives: [
      {
        id: 'executives',
        name: 'Executives & Leadership',
        description: 'C-suite executives, board meetings, strategic planning',
        assets: []
      },
      {
        id: 'team-collaboration',
        name: 'Team Collaboration',
        description: 'Team meetings, brainstorming, group discussions',
        assets: []
      },
      {
        id: 'office-workspace',
        name: 'Modern Office Workspace',
        description: 'Contemporary office spaces, desks, work environments',
        assets: []
      },
      {
        id: 'business-meetings',
        name: 'Business Meetings',
        description: 'Conference rooms, presentations, client meetings',
        assets: []
      },
      {
        id: 'corporate-training',
        name: 'Corporate Training',
        description: 'Workshops, seminars, professional development',
        assets: []
      }
    ]
  },
  {
    id: 'university-education',
    name: 'University & Education',
    description: 'Academic settings, students, learning environments',
    motives: [
      {
        id: 'campus-life',
        name: 'Campus Life',
        description: 'University campuses, buildings, student life',
        assets: []
      },
      {
        id: 'lectures-classrooms',
        name: 'Lectures & Classrooms',
        description: 'Teaching, learning, academic instruction',
        assets: []
      },
      {
        id: 'students-learning',
        name: 'Students Learning',
        description: 'Students studying, taking notes, group work',
        assets: []
      },
      {
        id: 'graduation',
        name: 'Graduation & Achievement',
        description: 'Graduation ceremonies, diplomas, academic success',
        assets: []
      },
      {
        id: 'research',
        name: 'Research & Innovation',
        description: 'Laboratories, research, scientific work',
        assets: []
      }
    ]
  },
  {
    id: 'technology-ai',
    name: 'Technology & AI',
    description: 'AI, technology, digital transformation',
    motives: [
      {
        id: 'ai-technology',
        name: 'AI & Machine Learning',
        description: 'AI concepts, neural networks, technology',
        assets: []
      },
      {
        id: 'digital-transformation',
        name: 'Digital Transformation',
        description: 'Digitalization, innovation, tech adoption',
        assets: []
      },
      {
        id: 'coding-development',
        name: 'Coding & Development',
        description: 'Programming, software development, tech work',
        assets: []
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics',
        description: 'Data visualization, analytics, insights',
        assets: []
      }
    ]
  },
  {
    id: 'certification-credentials',
    name: 'Certification & Credentials',
    description: 'Certificates, badges, professional recognition',
    motives: [
      {
        id: 'certificates',
        name: 'Certificates & Diplomas',
        description: 'Certificates, diplomas, credentials',
        assets: []
      },
      {
        id: 'badges-awards',
        name: 'Badges & Awards',
        description: 'Achievement badges, awards, recognition',
        assets: []
      },
      {
        id: 'professional-growth',
        name: 'Professional Growth',
        description: 'Career advancement, skill development',
        assets: []
      }
    ]
  },
  {
    id: 'diversity-inclusion',
    name: 'Diversity & Inclusion',
    description: 'Diverse teams, inclusive workplaces',
    motives: [
      {
        id: 'diverse-teams',
        name: 'Diverse Teams',
        description: 'Multicultural teams, diverse professionals',
        assets: []
      },
      {
        id: 'inclusive-workplace',
        name: 'Inclusive Workplace',
        description: 'Inclusive environments, equal opportunities',
        assets: []
      }
    ]
  },
  {
    id: 'abstract-backgrounds',
    name: 'Abstract & Backgrounds',
    description: 'Abstract patterns, backgrounds, textures',
    motives: [
      {
        id: 'abstract-patterns',
        name: 'Abstract Patterns',
        description: 'Geometric patterns, abstract designs',
        assets: []
      },
      {
        id: 'gradient-backgrounds',
        name: 'Gradient Backgrounds',
        description: 'Color gradients, modern backgrounds',
        assets: []
      },
      {
        id: 'textures',
        name: 'Textures',
        description: 'Paper textures, fabric, materials',
        assets: []
      }
    ]
  }
];

// Search terms for each motive (to be used with stock photo APIs)
export const searchTermsByMotive: Record<string, string[]> = {
  'executives': ['executive', 'CEO', 'business leader', 'board meeting', 'corporate executive'],
  'team-collaboration': ['team meeting', 'collaboration', 'brainstorming', 'group discussion', 'teamwork'],
  'office-workspace': ['modern office', 'workspace', 'office desk', 'co-working', 'office interior'],
  'business-meetings': ['business meeting', 'conference room', 'presentation', 'client meeting', 'corporate meeting'],
  'corporate-training': ['corporate training', 'workshop', 'seminar', 'professional development', 'training session'],
  'campus-life': ['university campus', 'college campus', 'campus building', 'university', 'college'],
  'lectures-classrooms': ['lecture', 'classroom', 'teaching', 'professor', 'academic'],
  'students-learning': ['student studying', 'learning', 'taking notes', 'student', 'education'],
  'graduation': ['graduation', 'diploma', 'academic achievement', 'graduation ceremony', 'degree'],
  'research': ['research', 'laboratory', 'scientific research', 'innovation', 'lab'],
  'ai-technology': ['artificial intelligence', 'AI', 'machine learning', 'neural network', 'technology'],
  'digital-transformation': ['digital transformation', 'innovation', 'digitalization', 'tech adoption', 'digital'],
  'coding-development': ['coding', 'programming', 'software development', 'developer', 'code'],
  'data-analytics': ['data visualization', 'analytics', 'data', 'charts', 'insights'],
  'certificates': ['certificate', 'diploma', 'credential', 'certification', 'document'],
  'badges-awards': ['badge', 'award', 'achievement', 'recognition', 'medal'],
  'professional-growth': ['career growth', 'professional development', 'career advancement', 'success', 'growth'],
  'diverse-teams': ['diverse team', 'multicultural', 'diversity', 'inclusive team', 'diverse professionals'],
  'inclusive-workplace': ['inclusive workplace', 'equality', 'inclusion', 'diverse workplace', 'equal opportunity'],
  'abstract-patterns': ['abstract pattern', 'geometric', 'abstract design', 'pattern', 'geometric pattern'],
  'gradient-backgrounds': ['gradient', 'color gradient', 'background', 'modern background', 'colorful background'],
  'textures': ['texture', 'paper texture', 'fabric texture', 'material texture', 'texture background']
};

// Helper function to get all assets by category
export function getAssetsByCategory(categoryId: string): VisualAsset[] {
  const category = visualAssetCategories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  return category.motives.flatMap(motive => motive.assets);
}

// Helper function to get assets by motive
export function getAssetsByMotive(motiveId: string): VisualAsset[] {
  for (const category of visualAssetCategories) {
    const motive = category.motives.find(m => m.id === motiveId);
    if (motive) return motive.assets;
  }
  return [];
}

// Helper function to search assets by tags
export function searchAssetsByTags(tags: string[]): VisualAsset[] {
  const allAssets: VisualAsset[] = [];
  visualAssetCategories.forEach(category => {
    category.motives.forEach(motive => {
      allAssets.push(...motive.assets);
    });
  });
  
  return allAssets.filter(asset => 
    tags.some(tag => asset.tags.some(assetTag => 
      assetTag.toLowerCase().includes(tag.toLowerCase())
    ))
  );
}

// Export total count (will be populated by download script)
export const TOTAL_ASSETS_TARGET = 200;
export const ASSETS_PER_MOTIVE = Math.ceil(TOTAL_ASSETS_TARGET / Object.keys(searchTermsByMotive).length);
