#!/usr/bin/env python3
"""
Stock Photo Downloader and Organizer
Downloads free stock photos from Unsplash, Pexels, and Pixabay
and organizes them into the visual assets database structure.

Requirements:
    pip install requests pexels-api unsplash-python

Usage:
    python scripts/download-stock-photos.py
"""

import os
import json
import requests
import time
from pathlib import Path
from typing import List, Dict, Optional
from dataclasses import dataclass, asdict
from urllib.parse import urlparse

# Configuration
BASE_DIR = Path(__file__).parent.parent
IMAGES_DIR = BASE_DIR / "public" / "images"
DATABASE_FILE = BASE_DIR / "src" / "lib" / "visualAssetsDatabase.json"
ASSETS_PER_MOTIVE = 8  # ~8 photos per motive to reach ~200 total

# API Keys (get free keys from respective sites)
# Unsplash: https://unsplash.com/developers
# Pexels: https://www.pexels.com/api/
# Pixabay: https://pixabay.com/api/docs/

UNSPLASH_ACCESS_KEY = os.getenv("UNSPLASH_ACCESS_KEY", "")
PEXELS_API_KEY = os.getenv("PEXELS_API_KEY", "")
PIXABAY_API_KEY = os.getenv("PIXABAY_API_KEY", "")

@dataclass
class PhotoAsset:
    id: str
    filename: str
    category: str
    motive: str
    description: str
    source: str
    sourceUrl: str
    downloadUrl: str
    tags: List[str]
    aspectRatio: str
    useCase: List[str]
    localPath: Optional[str] = None

def download_image(url: str, filepath: Path) -> bool:
    """Download an image from URL to filepath."""
    try:
        response = requests.get(url, stream=True, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def search_unsplash(query: str, count: int = 10) -> List[Dict]:
    """Search Unsplash API for photos."""
    if not UNSPLASH_ACCESS_KEY:
        print("Warning: UNSPLASH_ACCESS_KEY not set. Skipping Unsplash.")
        return []
    
    try:
        url = "https://api.unsplash.com/search/photos"
        headers = {"Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}"}
        params = {
            "query": query,
            "per_page": min(count, 30),
            "orientation": "landscape"
        }
        
        response = requests.get(url, headers=headers, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        return data.get("results", [])
    except Exception as e:
        print(f"Error searching Unsplash: {e}")
        return []

def search_pexels(query: str, count: int = 10) -> List[Dict]:
    """Search Pexels API for photos."""
    if not PEXELS_API_KEY:
        print("Warning: PEXELS_API_KEY not set. Skipping Pexels.")
        return []
    
    try:
        url = "https://api.pexels.com/v1/search"
        headers = {"Authorization": PEXELS_API_KEY}
        params = {
            "query": query,
            "per_page": min(count, 80),
            "orientation": "landscape"
        }
        
        response = requests.get(url, headers=headers, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        return data.get("photos", [])
    except Exception as e:
        print(f"Error searching Pexels: {e}")
        return []

def search_pixabay(query: str, count: int = 10) -> List[Dict]:
    """Search Pixabay API for photos."""
    if not PIXABAY_API_KEY:
        print("Warning: PIXABAY_API_KEY not set. Skipping Pixabay.")
        return []
    
    try:
        url = "https://pixabay.com/api/"
        params = {
            "key": PIXABAY_API_KEY,
            "q": query,
            "image_type": "photo",
            "orientation": "horizontal",
            "per_page": min(count, 200),
            "safesearch": "true"
        }
        
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        return data.get("hits", [])
    except Exception as e:
        print(f"Error searching Pixabay: {e}")
        return []

def convert_unsplash_to_asset(photo: Dict, category: str, motive: str, search_term: str) -> PhotoAsset:
    """Convert Unsplash photo to PhotoAsset."""
    photo_id = photo.get("id", "")
    urls = photo.get("urls", {})
    links = photo.get("links", {})
    
    # Determine aspect ratio
    width = photo.get("width", 0)
    height = photo.get("height", 0)
    aspect_ratio = "landscape" if width > height else "portrait" if height > width else "square"
    
    # Get tags
    tags = [tag.get("title", "") for tag in photo.get("tags", [])]
    tags.append(search_term)
    
    # Generate filename
    filename = f"{motive}_{photo_id}.jpg"
    
    return PhotoAsset(
        id=f"unsplash_{photo_id}",
        filename=filename,
        category=category,
        motive=motive,
        description=photo.get("description", photo.get("alt_description", search_term)),
        source="unsplash",
        sourceUrl=links.get("html", ""),
        downloadUrl=urls.get("regular", ""),  # Use regular size for download
        tags=tags[:5],  # Limit to 5 tags
        aspectRatio=aspect_ratio,
        useCase=[category, motive]
    )

def convert_pexels_to_asset(photo: Dict, category: str, motive: str, search_term: str) -> PhotoAsset:
    """Convert Pexels photo to PhotoAsset."""
    photo_id = str(photo.get("id", ""))
    src = photo.get("src", {})
    
    width = photo.get("width", 0)
    height = photo.get("height", 0)
    aspect_ratio = "landscape" if width > height else "portrait" if height > width else "square"
    
    tags = [tag for tag in photo.get("tags", "").split(", ") if tag]
    tags.append(search_term)
    
    filename = f"{motive}_{photo_id}.jpg"
    
    return PhotoAsset(
        id=f"pexels_{photo_id}",
        filename=filename,
        category=category,
        motive=motive,
        description=photo.get("alt", search_term),
        source="pexels",
        sourceUrl=photo.get("url", ""),
        downloadUrl=src.get("large", src.get("original", "")),
        tags=tags[:5],
        aspectRatio=aspect_ratio,
        useCase=[category, motive]
    )

def convert_pixabay_to_asset(photo: Dict, category: str, motive: str, search_term: str) -> PhotoAsset:
    """Convert Pixabay photo to PhotoAsset."""
    photo_id = str(photo.get("id", ""))
    
    width = photo.get("imageWidth", 0)
    height = photo.get("imageHeight", 0)
    aspect_ratio = "landscape" if width > height else "portrait" if height > width else "square"
    
    tags = [tag for tag in photo.get("tags", "").split(", ") if tag]
    tags.append(search_term)
    
    filename = f"{motive}_{photo_id}.jpg"
    
    return PhotoAsset(
        id=f"pixabay_{photo_id}",
        filename=filename,
        category=category,
        motive=motive,
        description=photo.get("tags", search_term),
        source="pixabay",
        sourceUrl=photo.get("pageURL", ""),
        downloadUrl=photo.get("largeImageURL", photo.get("webformatURL", "")),
        tags=tags[:5],
        aspectRatio=aspect_ratio,
        useCase=[category, motive]
    )

def load_search_terms():
    """Load search terms from the TypeScript database file."""
    # Read from the TypeScript file
    db_file = BASE_DIR / "src" / "lib" / "visualAssetsDatabase.ts"
    
    if not db_file.exists():
        print("Warning: visualAssetsDatabase.ts not found. Using default search terms.")
        return {
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
        }
    
    # Parse the TypeScript file to extract search terms
    # This is a simplified parser - in production, use a proper TS parser
    with open(db_file, 'r') as f:
        content = f.read()
    
    # Extract search terms (simplified - assumes the structure)
    search_terms = {}
    # For now, return default terms
    return {
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
    }

def main():
    """Main function to download and organize stock photos."""
    print("=" * 60)
    print("Stock Photo Downloader and Organizer")
    print("=" * 60)
    print()
    
    # Check API keys
    if not any([UNSPLASH_ACCESS_KEY, PEXELS_API_KEY, PIXABAY_API_KEY]):
        print("⚠️  WARNING: No API keys found!")
        print("Set environment variables:")
        print("  export UNSPLASH_ACCESS_KEY='your_key'")
        print("  export PEXELS_API_KEY='your_key'")
        print("  export PIXABAY_API_KEY='your_key'")
        print()
        print("You can get free API keys from:")
        print("  - Unsplash: https://unsplash.com/developers")
        print("  - Pexels: https://www.pexels.com/api/")
        print("  - Pixabay: https://pixabay.com/api/docs/")
        print()
        print("Continuing with manual URL collection mode...")
        print()
    
    # Create directories
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    
    # Load search terms
    search_terms = load_search_terms()
    
    # Category mapping (simplified)
    category_mapping = {
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
        'textures': 'abstract-backgrounds'
    }
    
    all_assets = []
    downloaded_count = 0
    
    # Process each motive
    for motive_id, terms in search_terms.items():
        category = category_mapping.get(motive_id, 'corporate-professionals')
        motive_dir = IMAGES_DIR / category / motive_id
        motive_dir.mkdir(parents=True, exist_ok=True)
        
        print(f"📁 Processing: {motive_id}")
        print(f"   Category: {category}")
        print(f"   Search terms: {', '.join(terms[:3])}")
        
        assets_for_motive = []
        
        # Try each search term
        for search_term in terms[:2]:  # Use first 2 terms per motive
            if len(assets_for_motive) >= ASSETS_PER_MOTIVE:
                break
            
            # Search Unsplash
            if UNSPLASH_ACCESS_KEY:
                photos = search_unsplash(search_term, ASSETS_PER_MOTIVE)
                for photo in photos[:ASSETS_PER_MOTIVE]:
                    if len(assets_for_motive) >= ASSETS_PER_MOTIVE:
                        break
                    asset = convert_unsplash_to_asset(photo, category, motive_id, search_term)
                    assets_for_motive.append(asset)
                    time.sleep(0.5)  # Rate limiting
            
            # Search Pexels
            if PEXELS_API_KEY:
                photos = search_pexels(search_term, ASSETS_PER_MOTIVE)
                for photo in photos[:ASSETS_PER_MOTIVE]:
                    if len(assets_for_motive) >= ASSETS_PER_MOTIVE:
                        break
                    asset = convert_pexels_to_asset(photo, category, motive_id, search_term)
                    if asset.id not in [a.id for a in assets_for_motive]:
                        assets_for_motive.append(asset)
                    time.sleep(0.5)
            
            # Search Pixabay
            if PIXABAY_API_KEY:
                photos = search_pixabay(search_term, ASSETS_PER_MOTIVE)
                for photo in photos[:ASSETS_PER_MOTIVE]:
                    if len(assets_for_motive) >= ASSETS_PER_MOTIVE:
                        break
                    asset = convert_pixabay_to_asset(photo, category, motive_id, search_term)
                    if asset.id not in [a.id for a in assets_for_motive]:
                        assets_for_motive.append(asset)
                    time.sleep(0.5)
        
        # Download images
        print(f"   Found {len(assets_for_motive)} assets, downloading...")
        for asset in assets_for_motive:
            filepath = motive_dir / asset.filename
            asset.localPath = str(filepath.relative_to(BASE_DIR))
            
            if not filepath.exists():
                if download_image(asset.downloadUrl, filepath):
                    downloaded_count += 1
                    print(f"   ✓ Downloaded: {asset.filename}")
                else:
                    print(f"   ✗ Failed: {asset.filename}")
            else:
                print(f"   ⊙ Skipped (exists): {asset.filename}")
        
        all_assets.extend(assets_for_motive)
        print()
    
    # Save database
    print(f"\n💾 Saving database...")
    database_data = {
        "totalAssets": len(all_assets),
        "downloadedCount": downloaded_count,
        "assets": [asdict(asset) for asset in all_assets],
        "lastUpdated": time.strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(DATABASE_FILE, 'w') as f:
        json.dump(database_data, f, indent=2)
    
    print(f"✅ Complete!")
    print(f"   Total assets: {len(all_assets)}")
    print(f"   Downloaded: {downloaded_count}")
    print(f"   Database saved to: {DATABASE_FILE}")

if __name__ == "__main__":
    main()
