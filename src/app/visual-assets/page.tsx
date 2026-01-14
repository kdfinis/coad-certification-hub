'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { visualAssetCategories, searchTermsByMotive, type Category, type Motive } from '@/lib/visualAssetsDatabase';
import Image from 'next/image';

export default function VisualAssetsPreviewPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMotive, setSelectedMotive] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get all keywords from search terms
  const allKeywords = useMemo(() => {
    const keywords = new Set<string>();
    Object.values(searchTermsByMotive).forEach(terms => {
      terms.forEach(term => keywords.add(term.toLowerCase()));
    });
    return Array.from(keywords).sort();
  }, []);

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    let filtered = visualAssetCategories;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cat => cat.id === selectedCategory);
    }

    // Filter by motive
    if (selectedMotive !== 'all') {
      filtered = filtered.map(cat => ({
        ...cat,
        motives: cat.motives.filter(m => m.id === selectedMotive)
      })).filter(cat => cat.motives.length > 0);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.map(cat => ({
        ...cat,
        motives: cat.motives.map(motive => {
          const matchesSearch = 
            motive.name.toLowerCase().includes(query) ||
            motive.description.toLowerCase().includes(query) ||
            searchTermsByMotive[motive.id]?.some(term => 
              term.toLowerCase().includes(query)
            ) ||
            motive.assets.some(asset => 
              asset.description.toLowerCase().includes(query) ||
              asset.tags.some(tag => tag.toLowerCase().includes(query))
            );
          
          return matchesSearch ? motive : null;
        }).filter((m): m is Motive => m !== null)
      })).filter(cat => cat.motives.length > 0);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedMotive]);

  // Get all motives for dropdown
  const allMotives = useMemo(() => {
    const motives: { id: string; name: string; category: string }[] = [];
    visualAssetCategories.forEach(cat => {
      cat.motives.forEach(m => {
        motives.push({ id: m.id, name: m.name, category: cat.name });
      });
    });
    return motives;
  }, []);

  // Count total assets
  const totalAssets = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => 
      sum + cat.motives.reduce((s, m) => s + m.assets.length, 0), 0
    );
  }, [filteredCategories]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary/10 via-teal/10 to-primary/10 py-12 border-b border-border">
          <div className="container-coad">
            <div className="max-w-4xl">
              <h1 className="university-heading-2 text-foreground mb-4">
                Visual Assets Database Preview
              </h1>
              <p className="body-large text-muted-foreground mb-6">
                Browse and search through ~200 free stock photos organized by categories and motives (keywords).
                All images are sourced from Unsplash, Pexels, and Pixabay.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{visualAssetCategories.length}</span>
                  <span className="text-muted-foreground">Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    {visualAssetCategories.reduce((sum, cat) => sum + cat.motives.length, 0)}
                  </span>
                  <span className="text-muted-foreground">Motives</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{totalAssets}</span>
                  <span className="text-muted-foreground">Assets Found</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{allKeywords.length}</span>
                  <span className="text-muted-foreground">Keywords</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border py-4">
          <div className="container-coad">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              {/* Search */}
              <div className="flex-1 w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Search by keyword, motive, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedMotive('all');
                }}
                className="px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="all">All Categories</option>
                {visualAssetCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>

              {/* Motive Filter */}
              <select
                value={selectedMotive}
                onChange={(e) => setSelectedMotive(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                disabled={selectedCategory === 'all'}
              >
                <option value="all">All Motives</option>
                {allMotives
                  .filter(m => selectedCategory === 'all' || 
                    visualAssetCategories.find(c => c.id === selectedCategory)?.motives.some(mot => mot.id === m.id)
                  )
                  .map(motive => (
                    <option key={motive.id} value={motive.id}>
                      {motive.name}
                    </option>
                  ))}
              </select>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-foreground border-border hover:bg-muted'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    viewMode === 'list'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-foreground border-border hover:bg-muted'
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Keywords Cloud */}
            {searchQuery === '' && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Popular Keywords:</p>
                <div className="flex flex-wrap gap-2">
                  {allKeywords.slice(0, 20).map(keyword => (
                    <button
                      key={keyword}
                      onClick={() => setSearchQuery(keyword)}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8">
          <div className="container-coad">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">No assets found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedMotive('all');
                  }}
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map(category => (
                  <div key={category.id} className="space-y-6">
                    {/* Category Header */}
                    <div className="border-b border-border pb-4">
                      <h2 className="university-heading-3 text-foreground mb-2">
                        {category.name}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {category.description}
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {category.motives.reduce((sum, m) => sum + m.assets.length, 0)} assets across {category.motives.length} motives
                      </div>
                    </div>

                    {/* Motives */}
                    <div className="space-y-8">
                      {category.motives.map(motive => (
                        <div key={motive.id} className="space-y-4">
                          {/* Motive Header */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="university-heading-4 text-foreground mb-1">
                                {motive.name}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {motive.description}
                              </p>
                              {/* Keywords */}
                              <div className="flex flex-wrap gap-2 mb-2">
                                {searchTermsByMotive[motive.id]?.map((keyword, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-medium"
                                  >
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {motive.assets.length} {motive.assets.length === 1 ? 'asset' : 'assets'}
                              </p>
                            </div>
                          </div>

                          {/* Assets */}
                          {motive.assets.length > 0 ? (
                            <div className={
                              viewMode === 'grid'
                                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                                : 'space-y-4'
                            }>
                              {motive.assets.map(asset => (
                                <div
                                  key={asset.id}
                                  className={`bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors ${
                                    viewMode === 'list' ? 'flex gap-4 p-4' : ''
                                  }`}
                                >
                                  {viewMode === 'grid' ? (
                                    <>
                                      <div className="relative w-full aspect-video bg-muted">
                                        {asset.localPath || asset.downloadUrl ? (
                                          <Image
                                            src={asset.localPath || asset.downloadUrl}
                                            alt={asset.description}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                          />
                                        ) : (
                                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                                            No image
                                          </div>
                                        )}
                                      </div>
                                      <div className="p-4">
                                        <p className="text-sm font-medium text-foreground mb-1 truncate">
                                          {asset.filename}
                                        </p>
                                        <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                                          {asset.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs">
                                          <span className="text-muted-foreground capitalize">{asset.source}</span>
                                          <span className="text-muted-foreground capitalize">{asset.aspectRatio}</span>
                                        </div>
                                        {asset.tags.length > 0 && (
                                          <div className="flex flex-wrap gap-1 mt-2">
                                            {asset.tags.slice(0, 3).map((tag, idx) => (
                                              <span
                                                key={idx}
                                                className="px-1.5 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                                              >
                                                {tag}
                                              </span>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div className="relative w-32 h-24 shrink-0 bg-muted rounded overflow-hidden">
                                        {asset.localPath || asset.downloadUrl ? (
                                          <Image
                                            src={asset.localPath || asset.downloadUrl}
                                            alt={asset.description}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                          />
                                        ) : (
                                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs">
                                            No image
                                          </div>
                                        )}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-foreground mb-1">
                                          {asset.filename}
                                        </p>
                                        <p className="text-xs text-muted-foreground mb-2">
                                          {asset.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                          <span className="capitalize">{asset.source}</span>
                                          <span className="capitalize">{asset.aspectRatio}</span>
                                          <span>{asset.localPath ? 'Local' : asset.downloadUrl ? 'URL' : 'Not available'}</span>
                                        </div>
                                        {asset.tags.length > 0 && (
                                          <div className="flex flex-wrap gap-1">
                                            {asset.tags.map((tag, idx) => (
                                              <span
                                                key={idx}
                                                className="px-1.5 py-0.5 text-xs rounded bg-muted text-muted-foreground"
                                              >
                                                {tag}
                                              </span>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-8 text-center border border-dashed border-border rounded-lg bg-muted/30">
                              <p className="text-sm text-muted-foreground">
                                No assets downloaded yet. Use the download script or manual collection guide to add images.
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
