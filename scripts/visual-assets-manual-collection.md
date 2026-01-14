# Manual Visual Assets Collection Guide

Since automated downloading requires API keys, here's a manual guide to collect ~200 free stock photos organized by motives.

## Free Stock Photo Sources

### 1. **Unsplash** (https://unsplash.com)
- **License**: Free, no attribution required
- **Quality**: High-resolution, professional
- **Best for**: Corporate, professional, modern imagery

### 2. **Pexels** (https://www.pexels.com)
- **License**: Free, no attribution required
- **Quality**: High-quality, diverse collection
- **Best for**: Business, education, lifestyle

### 3. **Pixabay** (https://pixabay.com)
- **License**: Free, no attribution required
- **Quality**: Good variety, large collection
- **Best for**: Abstract, backgrounds, general use

## Collection Strategy

### Target: ~200 photos
### Distribution: ~8-10 photos per motive (22 motives total)

## Motives & Search Terms

### Corporate Professionals

#### Executives & Leadership
- Search: "executive", "CEO", "business leader", "board meeting"
- **Target**: 8 photos
- **Use cases**: Leadership pages, executive bios, strategic content

#### Team Collaboration
- Search: "team meeting", "collaboration", "brainstorming"
- **Target**: 8 photos
- **Use cases**: Team pages, collaboration features

#### Modern Office Workspace
- Search: "modern office", "workspace", "office desk"
- **Target**: 8 photos
- **Use cases**: Office environment, workspace features

#### Business Meetings
- Search: "business meeting", "conference room", "presentation"
- **Target**: 8 photos
- **Use cases**: Meeting features, corporate services

#### Corporate Training
- Search: "corporate training", "workshop", "seminar"
- **Target**: 8 photos
- **Use cases**: Training programs, professional development

### University & Education

#### Campus Life
- Search: "university campus", "college campus", "campus building"
- **Target**: 8 photos
- **Use cases**: University partnerships, campus features

#### Lectures & Classrooms
- Search: "lecture", "classroom", "teaching", "professor"
- **Target**: 8 photos
- **Use cases**: Educational content, teaching features

#### Students Learning
- Search: "student studying", "learning", "taking notes"
- **Target**: 8 photos
- **Use cases**: Student success stories, learning features

#### Graduation & Achievement
- Search: "graduation", "diploma", "academic achievement"
- **Target**: 8 photos
- **Use cases**: Success stories, certification completion

#### Research & Innovation
- Search: "research", "laboratory", "scientific research"
- **Target**: 8 photos
- **Use cases**: Research features, innovation content

### Technology & AI

#### AI & Machine Learning
- Search: "artificial intelligence", "AI", "machine learning"
- **Target**: 8 photos
- **Use cases**: AI track pages, technology features

#### Digital Transformation
- Search: "digital transformation", "innovation", "digitalization"
- **Target**: 8 photos
- **Use cases**: Transformation content, digital features

#### Coding & Development
- Search: "coding", "programming", "software development"
- **Target**: 8 photos
- **Use cases**: Development track pages, coding features

#### Data & Analytics
- Search: "data visualization", "analytics", "data"
- **Target**: 8 photos
- **Use cases**: Analytics features, data content

### Certification & Credentials

#### Certificates & Diplomas
- Search: "certificate", "diploma", "credential"
- **Target**: 8 photos
- **Use cases**: Certification pages, credential features

#### Badges & Awards
- Search: "badge", "award", "achievement", "recognition"
- **Target**: 8 photos
- **Use cases**: Achievement pages, badge features

#### Professional Growth
- Search: "career growth", "professional development", "success"
- **Target**: 8 photos
- **Use cases**: Career advancement content, growth stories

### Diversity & Inclusion

#### Diverse Teams
- Search: "diverse team", "multicultural", "diversity"
- **Target**: 8 photos
- **Use cases**: Diversity content, inclusive features

#### Inclusive Workplace
- Search: "inclusive workplace", "equality", "inclusion"
- **Target**: 8 photos
- **Use cases**: Inclusion features, workplace content

### Abstract & Backgrounds

#### Abstract Patterns
- Search: "abstract pattern", "geometric", "abstract design"
- **Target**: 8 photos
- **Use cases**: Backgrounds, design elements

#### Gradient Backgrounds
- Search: "gradient", "color gradient", "modern background"
- **Target**: 8 photos
- **Use cases**: Section backgrounds, hero backgrounds

#### Textures
- Search: "texture", "paper texture", "fabric texture"
- **Target**: 8 photos
- **Use cases**: Background textures, design elements

## File Organization

Download images to:
```
public/images/
├── corporate-professionals/
│   ├── executives/
│   ├── team-collaboration/
│   ├── office-workspace/
│   ├── business-meetings/
│   └── corporate-training/
├── university-education/
│   ├── campus-life/
│   ├── lectures-classrooms/
│   ├── students-learning/
│   ├── graduation/
│   └── research/
├── technology-ai/
│   ├── ai-technology/
│   ├── digital-transformation/
│   ├── coding-development/
│   └── data-analytics/
├── certification-credentials/
│   ├── certificates/
│   ├── badges-awards/
│   └── professional-growth/
├── diversity-inclusion/
│   ├── diverse-teams/
│   └── inclusive-workplace/
└── abstract-backgrounds/
    ├── abstract-patterns/
    ├── gradient-backgrounds/
    └── textures/
```

## Naming Convention

Format: `{motive}_{source}_{id}.jpg`

Examples:
- `executives_unsplash_abc123.jpg`
- `team-collaboration_pexels_xyz789.jpg`
- `campus-life_pixabay_def456.jpg`

## Image Specifications

- **Format**: JPG (preferred) or PNG
- **Aspect Ratio**: Landscape (16:9) preferred for most uses
- **Resolution**: Minimum 1920x1080, ideally 2560x1440 or higher
- **File Size**: Optimize to < 500KB when possible
- **Quality**: Professional, high-quality images

## Quick Collection Workflow

1. **Choose a motive** from the list above
2. **Search** on Unsplash/Pexels/Pixabay using the suggested terms
3. **Select 8-10 photos** that match the theme
4. **Download** to the appropriate folder
5. **Rename** using the naming convention
6. **Update database** (optional - can be done after collection)

## Tips

- **Diversity**: Ensure photos show diverse people, settings, and styles
- **Consistency**: Maintain similar style/quality within each motive
- **Relevance**: Choose photos that clearly represent the motive
- **Quality**: Prioritize high-resolution, professional images
- **Licensing**: Double-check that images are free to use commercially

## After Collection

1. Run the database update script (if using automated system)
2. Verify all images load correctly
3. Update the `visualAssetsDatabase.ts` file with actual image paths
4. Test image loading in the website

## Estimated Time

- **Per motive**: 10-15 minutes (search + download + organize)
- **Total**: ~4-5 hours for all 200 photos
- **Batch approach**: Do 5-6 motives per session
