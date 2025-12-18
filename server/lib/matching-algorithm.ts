// Matching Algorithm for AI Workforce Hub
import { Project, Professional } from '@prisma/client';

interface ProfessionalWithRelations extends Professional {
  competencies: Array<{ competencyName: string; competencyLevel: string }>;
  certifications: Array<{ certification: { trackName: string | null } }>;
  availability: Array<{ startDate: Date; endDate: Date | null; isCurrent: boolean }>;
  ratings: Array<{ rating: number }>;
}

export function calculateMatchScore(
  project: Project,
  professional: ProfessionalWithRelations
): number {
  let score = 0;
  const maxScore = 100;

  // Competency match (40 points)
  const requiredCompetencies = (project.requiredCompetencies as string[]) || [];
  const professionalCompetencies = professional.competencies.map((pc) => pc.competencyName);

  const competencyOverlap = requiredCompetencies.filter((req) =>
    professionalCompetencies.includes(req)
  ).length;

  const competencyScore =
    requiredCompetencies.length > 0
      ? (competencyOverlap / requiredCompetencies.length) * 40
      : 20; // Default if no specific requirements

  score += competencyScore;

  // Tier match (20 points)
  if (project.preferredTier === 'charterholder' && professional.isCharterholder) {
    score += 20;
  } else if (
    project.preferredTier === 'track_completer' &&
    ['charterholder', 'track_completer'].includes(professional.eligibilityTier)
  ) {
    score += 15;
  } else if (project.preferredTier === 'any') {
    score += 10;
  }

  // Availability match (20 points)
  const availabilityMatch = checkAvailabilityMatch(
    professional,
    project.startDate,
    project.endDate,
    project.engagementType
  );
  score += availabilityMatch * 20;

  // Rate compatibility (10 points)
  const rateMatch = checkRateCompatibility(
    professional,
    project.budgetMin,
    project.budgetMax
  );
  score += rateMatch * 10;

  // Previous ratings (10 points)
  if (professional.ratings.length > 0) {
    const avgRating =
      professional.ratings.reduce((sum, r) => sum + r.rating, 0) /
      professional.ratings.length;
    score += (avgRating / 5) * 10;
  } else {
    score += 5; // New professionals get baseline
  }

  // Charterholder bonus
  if (professional.isCharterholder && project.preferredTier !== 'any') {
    score += 5;
  }

  return Math.min(Math.round(score), 100);
}

function checkAvailabilityMatch(
  professional: ProfessionalWithRelations,
  startDate: Date | null,
  endDate: Date | null,
  engagementType: string
): number {
  // Simplified logic - would be more complex in production
  if (professional.availabilityType === engagementType) {
    return 1.0;
  }
  if (professional.availabilityType === 'full_time' && engagementType !== 'full_time') {
    return 0.8; // Can work part-time/project if full-time available
  }
  return 0.5; // Partial match
}

function checkRateCompatibility(
  professional: ProfessionalWithRelations,
  budgetMin: number | null,
  budgetMax: number | null
): number {
  if (!budgetMin && !budgetMax) return 1.0;

  const profMin = professional.hourlyRateMin ? Number(professional.hourlyRateMin) : 0;
  const profMax = professional.hourlyRateMax
    ? Number(professional.hourlyRateMax)
    : Infinity;

  if (budgetMin && profMax < budgetMin) return 0;
  if (budgetMax && profMin > budgetMax) return 0;

  // Calculate overlap percentage
  const overlapMin = Math.max(profMin, budgetMin || 0);
  const overlapMax = Math.min(profMax, budgetMax || Infinity);
  const overlap = Math.max(0, overlapMax - overlapMin);
  const budgetRange = (budgetMax || Infinity) - (budgetMin || 0);

  return budgetRange > 0 ? overlap / budgetRange : 1.0;
}

export function generateMatchReasons(
  project: Project,
  professional: ProfessionalWithRelations
): string[] {
  const reasons: string[] = [];

  if (professional.isCharterholder) {
    reasons.push('Charterholder status');
  }

  const requiredCompetencies = (project.requiredCompetencies as string[]) || [];
  const professionalCompetencies = professional.competencies.map((pc) => pc.competencyName);
  const matchingCompetencies = requiredCompetencies.filter((req) =>
    professionalCompetencies.includes(req)
  );

  if (matchingCompetencies.length > 0) {
    reasons.push(`Matches ${matchingCompetencies.length} required competencies`);
  }

  if (professional.ratings.length > 0) {
    const avgRating =
      professional.ratings.reduce((sum, r) => sum + r.rating, 0) /
      professional.ratings.length;
    if (avgRating >= 4.5) {
      reasons.push('High client ratings');
    }
  }

  return reasons;
}

