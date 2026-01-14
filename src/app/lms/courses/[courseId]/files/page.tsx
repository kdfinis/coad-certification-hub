'use client';

import { useState } from 'react';

type FilesPageProps = {
  params: { courseId: string };
};

const files = [
  { name: 'Syllabus.pdf', size: '420 KB' },
  { name: 'Week-1-Reading.pdf', size: '1.2 MB' },
  { name: 'Project-Brief.docx', size: '640 KB' },
];

export default function FilesPage({ params }: FilesPageProps) {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground">Files</h2>
        <p className="text-sm text-muted-foreground">Course: {params.courseId}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="text-sm font-semibold text-foreground">Upload files</p>
        <p className="text-xs text-muted-foreground">Share resources with your cohort.</p>
        <input
          className="mt-3 block w-full text-sm text-muted-foreground"
          type="file"
          onChange={async (event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            
            try {
              // TODO: Implement actual file upload
              // const formData = new FormData();
              // formData.append('file', file);
              // formData.append('courseId', params.courseId);
              // const response = await fetch('/api/files/upload', {
              //   method: 'POST',
              //   body: formData,
              // });
              
              // For now, add to local state
              setUploadedFiles((prev) => [file.name, ...prev]);
            } catch (error) {
              console.error('File upload failed:', error);
              alert('File upload failed. Please try again.');
            }
          }}
        />
        {uploadedFiles.length > 0 && (
          <div className="mt-3 space-y-1 text-xs text-muted-foreground">
            {uploadedFiles.map((file) => (
              <div key={file}>{file}</div>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-3">
        {files.map((file) => (
          <div key={file.name} className="flex items-center justify-between rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{file.name}</p>
            <span className="text-xs text-muted-foreground">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
