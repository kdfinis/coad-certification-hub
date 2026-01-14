'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/lms/SearchBar';
import { mockCourses } from '@/lib/lms-data';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = searchQuery
    ? mockCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.code?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockCourses;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Courses</h2>
        <p className="text-sm text-muted-foreground">All your enrolled courses</p>
      </div>

      <div className="mb-6">
        <SearchBar
          placeholder="Search courses..."
          onSearch={(query) => setSearchQuery(query)}
        />
      </div>

      {filteredCourses.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground mb-4">
            {searchQuery ? 'No courses found matching your search.' : 'You are not enrolled in any courses yet.'}
          </p>
          {!searchQuery && (
            <Link href="/catalog">
              <Button>Browse Course Catalog</Button>
            </Link>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <Link key={course.id} href={`/lms/courses/${course.id}`}>
              <div className="rounded-2xl border border-border bg-card p-6 card-hover h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{course.title}</h3>
                  {course.code && (
                    <p className="text-sm text-muted-foreground">{course.code}</p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{course.term}</span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {course.status}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
