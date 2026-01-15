'use client';

import { useState } from 'react';

const initialEnrollments = [
  { student: 'Student A', course: 'AAC Foundations', role: 'Student', status: 'Active' },
  { student: 'Student B', course: 'AIO Oversight', role: 'Student', status: 'Active' },
  { student: 'COAD Faculty', course: 'AAC Foundations', role: 'Instructor', status: 'Active' },
];

export default function EnrollmentsAdminPage() {
  const [enrollments, setEnrollments] = useState(initialEnrollments);
  const [csvData, setCsvData] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Enrollment Management</h2>
        <p className="text-sm text-muted-foreground">Bulk import, export, and manage course enrollments.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Bulk Import</h3>
          <p className="text-sm text-muted-foreground">Upload CSV with columns: email, course_id, role</p>
          <textarea
            className="w-full rounded-md border border-border px-3 py-2 text-sm font-mono"
            rows={6}
            value={csvData}
            onChange={(event) => setCsvData(event.target.value)}
            placeholder="email,course_id,role&#10;student@example.com,aac-foundations,Student"
          />
          <button
            className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
            type="button"
            onClick={async () => {
              if (!csvData.trim()) {
                alert('Please enter CSV data');
                return;
              }
              
              try {
                // TODO: Parse CSV and import enrollments
                // const response = await fetch('/api/enrollments/import', {
                //   method: 'POST',
                //   headers: { 'Content-Type': 'application/json' },
                //   body: JSON.stringify({ csvData }),
                // });
                
                alert('Enrollments imported successfully');
                setCsvData('');
              } catch (error) {
                console.error('Import failed:', error);
                alert('Failed to import enrollments. Please check CSV format.');
              }
            }}
          >
            Import enrollments
          </button>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Export</h3>
          <p className="text-sm text-muted-foreground">Download all enrollments as CSV</p>
          <button
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted"
            type="button"
            onClick={async () => {
              try {
                // TODO: Export enrollments as CSV
                // const response = await fetch('/api/enrollments/export');
                // const blob = await response.blob();
                // const url = window.URL.createObjectURL(blob);
                // const a = document.createElement('a');
                // a.href = url;
                // a.download = 'enrollments.csv';
                // a.click();
                
                alert('CSV export started');
              } catch (error) {
                console.error('Export failed:', error);
                alert('Failed to export enrollments.');
              }
            }}
          >
            Export CSV
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="grid grid-cols-[2fr_2fr_1fr_1fr] gap-4 border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Student</span>
          <span>Course</span>
          <span>Role</span>
          <span>Status</span>
        </div>
        {enrollments.map((enrollment, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_2fr_1fr_1fr] gap-4 px-4 py-3 text-sm text-foreground"
          >
            <span>{enrollment.student}</span>
            <span>{enrollment.course}</span>
            <span>{enrollment.role}</span>
            <span className="text-muted-foreground">{enrollment.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
