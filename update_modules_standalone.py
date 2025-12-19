#!/usr/bin/env python3
"""
Script to update all module pages to clarify standalone status.
Removes track references and adds standalone clarification section.
"""

import re
import os
from pathlib import Path

# Base directory
BASE_DIR = Path(__file__).parent / "src" / "pages" / "modules"

# Track credit pattern to remove from Module Benefits
TRACK_CREDIT_BENEFIT = re.compile(
    r'<li className="flex items-start gap-2">\s*<CheckNodeIcon[^>]*/>\s*<span><strong className="text-foreground">Track Credit:</strong> Counts toward[^<]*</span>\s*</li>',
    re.MULTILINE | re.DOTALL
)

# Track credit pattern to remove from Enrollment Options
TRACK_CREDIT_ENROLLMENT = re.compile(
    r'<li className="flex items-start gap-2">\s*<CheckNodeIcon[^>]*/>\s*<span><strong className="text-foreground">Track Credit:</strong> Counts toward[^<]*</span>\s*</li>',
    re.MULTILINE | re.DOTALL
)

# Track Integration section pattern
TRACK_INTEGRATION_SECTION = re.compile(
    r'\{/\* Track Integration \*/\}.*?\{/\* Track Integration \*/\}.*?</section>',
    re.MULTILINE | re.DOTALL
)

# Standalone clarification section template
STANDALONE_SECTION = '''        {/* Standalone Module Clarification */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-card rounded-xl p-8 border border-border">
                <h2 className="heading-3 mb-4">Standalone Competency Module</h2>
                <p className="body-large text-muted-foreground mb-6">
                  This is a <strong>standalone competency module</strong> that is <strong>unrelated to certification tracks</strong>. 
                  It can be taken independently and provides its own certificate of competency upon completion.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-3">This Module</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Standalone 4-week competency module</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Independent certificate of competency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>No track enrollment required</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Certification Tracks</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Structured programs (ADC or ACOS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Progression to Charterholder status</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckNodeIcon className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                        <span>Separate from competency modules</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/auth">Enroll Now – €[PRICE]</Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link to="/certifications">Explore Certification Tracks</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>'''

def update_module_file(file_path):
    """Update a single module file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Remove Track Credit from Module Benefits
    content = TRACK_CREDIT_BENEFIT.sub('', content)
    
    # Remove Track Credit from Enrollment Options
    content = TRACK_CREDIT_ENROLLMENT.sub('', content)
    
    # Find and replace Track Integration section
    # Look for the section pattern
    track_section_pattern = re.compile(
        r'\{/\* Track Integration \*/\}.*?<section className="section-padding bg-navy[^>]*>.*?</section>',
        re.MULTILINE | re.DOTALL
    )
    
    # Extract price from the track section if it exists
    price_match = re.search(r'Enroll Now – €(\d+(?:,\d+)?)', content)
    price = price_match.group(1) if price_match else '[PRICE]'
    
    # Replace track integration section
    standalone_section = STANDALONE_SECTION.replace('[PRICE]', price)
    
    content = track_section_pattern.sub(standalone_section, content)
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """Update all module files."""
    updated = []
    for track_dir in ['aad', 'aio']:
        track_path = BASE_DIR / track_dir
        if not track_path.exists():
            continue
        
        for module_file in track_path.glob('*.tsx'):
            if update_module_file(module_file):
                updated.append(str(module_file))
                print(f"Updated: {module_file.name}")
    
    print(f"\nTotal files updated: {len(updated)}")
    return updated

if __name__ == '__main__':
    main()

