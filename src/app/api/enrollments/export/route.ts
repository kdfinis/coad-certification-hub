import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // TODO: Implement CSV export
    // 1. Fetch all enrollments from database
    // 2. Format as CSV
    // 3. Return CSV file

    const csv = 'email,course_id,role\n'; // Header row

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="enrollments.csv"',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to export enrollments' },
      { status: 500 }
    );
  }
}
