// AI Workforce API Routes
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { calculateMatchScore, generateMatchReasons } from '../lib/matching-algorithm';

const prisma = new PrismaClient();

const router = express.Router();

// GET /api/workforce/professionals
// Get professionals with filtering
router.get('/professionals', async (req, res) => {
  try {
    const {
      track,
      competency,
      tier,
      availability,
      level,
      minRate,
      maxRate,
      page = '1',
      limit = '20',
    } = req.query;

    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    // Build where clause
    const where: any = {
      profileStatus: 'active',
    };

    if (tier) {
      where.eligibilityTier = tier;
    }

    if (availability) {
      where.availabilityType = availability;
    }

    if (minRate || maxRate) {
      where.OR = [];
      if (minRate) {
        where.OR.push({ hourlyRateMin: { gte: parseFloat(minRate as string) } });
      }
      if (maxRate) {
        where.OR.push({ hourlyRateMax: { lte: parseFloat(maxRate as string) } });
      }
    }

    // Competency filter
    if (competency) {
      where.competencies = {
        some: {
          competencyName: competency as string,
          verified: true,
        },
      };
    }

    // Track filter (through certifications)
    if (track) {
      const trackValue = track === 'AAC' ? 'AAC' : track === 'AIO' ? 'AIO' : null;
      if (trackValue) {
        where.certifications = {
          some: {
            certification: {
              trackName: trackValue,
              status: 'completed',
            },
          },
        };
      }
    }

    // Level filter
    if (level) {
      where.competencies = {
        some: {
          competencyLevel: level as string,
          verified: true,
        },
      };
    }

    // Execute query
    const [professionals, total] = await Promise.all([
      prisma.professional.findMany({
        where,
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
            },
          },
          certifications: {
            include: {
              certification: {
                where: { status: 'completed' },
              },
            },
          },
          competencies: {
            where: { verified: true },
          },
          portfolios: {
            where: { isFeatured: true },
            take: 3,
          },
          ratings: {
            select: {
              rating: true,
            },
          },
        },
        skip,
        take: limitNum,
        orderBy: [
          { isCharterholder: 'desc' },
          { profileApprovedAt: 'desc' },
        ],
      }),
      prisma.professional.count({ where }),
    ]);

    // Transform data
    const transformedProfessionals = professionals.map((prof) => ({
      id: prof.id,
      name: `${prof.user.firstName || ''} ${prof.user.lastName || ''}`.trim(),
      email: prof.user.email,
      certifications: prof.certifications.map((pc) => ({
        id: pc.certification.id,
        name: pc.certification.moduleName || pc.certification.trackName,
        type: pc.certification.certificationType,
      })),
      competencies: prof.competencies.map((pc) => pc.competencyName),
      isCharterholder: prof.isCharterholder,
      charterholderType: prof.charterholderType,
      availability: prof.availabilityType,
      rateMin: prof.hourlyRateMin?.toString(),
      rateMax: prof.hourlyRateMax?.toString(),
      rating:
        prof.ratings.length > 0
          ? prof.ratings.reduce((sum, r) => sum + r.rating, 0) / prof.ratings.length
          : null,
      projectsCompleted: prof.ratings.length,
      portfolio: prof.portfolios,
    }));

    res.json({
      professionals: transformedProfessionals,
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    });
  } catch (error: any) {
    console.error('Error fetching professionals:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/workforce/projects
// Create project request
router.post('/projects', async (req, res) => {
  try {
    const {
      clientId,
      projectTitle,
      projectDescription,
      projectScope,
      deliverables,
      requiredCompetencies,
      preferredTier,
      requiredTrack,
      requiredModules,
      projectType,
      engagementType,
      startDate,
      endDate,
      durationWeeks,
      budgetMin,
      budgetMax,
      locationPreference,
      languageRequirements,
    } = req.body;

    // Create project
    const project = await prisma.project.create({
      data: {
        clientId,
        projectTitle,
        projectDescription,
        projectScope,
        deliverables,
        requiredCompetencies: requiredCompetencies || [],
        preferredTier: preferredTier || 'any',
        requiredTrack: requiredTrack || 'any',
        requiredModules: requiredModules || [],
        projectType,
        engagementType,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        durationWeeks,
        budgetMin: budgetMin ? parseFloat(budgetMin) : null,
        budgetMax: budgetMax ? parseFloat(budgetMax) : null,
        locationPreference: locationPreference || 'remote',
        languageRequirements: languageRequirements || [],
        status: 'submitted',
        submittedAt: new Date(),
      },
    });

    // Trigger matching algorithm (async)
    triggerMatchingAlgorithm(project.id).catch(console.error);

    res.status(201).json({ project });
  } catch (error: any) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET /api/workforce/stats
// Get hub statistics
router.get('/stats', async (req, res) => {
  try {
    const [totalProfessionals, totalProjects, completedProjects, totalValue, avgSatisfaction] =
      await Promise.all([
        prisma.professional.count({
          where: { profileStatus: 'active' },
        }),
        prisma.project.count(),
        prisma.project.count({
          where: { status: 'completed' },
        }),
        prisma.contract.aggregate({
          where: { contractStatus: 'completed' },
          _sum: { totalAmount: true },
        }),
        prisma.professionalRating.aggregate({
          _avg: { rating: true },
        }),
      ]);

    res.json({
      total_professionals: totalProfessionals,
      total_projects: totalProjects,
      completed_projects: completedProjects,
      total_value: totalValue._sum.totalAmount || 0,
      satisfaction_rate: avgSatisfaction._avg.rating
        ? Math.round((avgSatisfaction._avg.rating / 5) * 100)
        : 95,
    });
  } catch (error: any) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: error.message });
  }
});

// POST /api/workforce/match
// Trigger matching algorithm for a project
router.post('/match', async (req, res) => {
  try {
    const { projectId } = req.body;
    await triggerMatchingAlgorithm(projectId);
    res.json({ success: true, message: 'Matching algorithm triggered' });
  } catch (error: any) {
    console.error('Error triggering matching:', error);
    res.status(500).json({ error: error.message });
  }
});

// Helper function to trigger matching algorithm
async function triggerMatchingAlgorithm(projectId: string) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      requirements: true,
    },
  });

  if (!project || project.status !== 'submitted') {
    return;
  }

  // Get all active professionals
  const professionals = await prisma.professional.findMany({
    where: {
      profileStatus: 'active',
    },
    include: {
      competencies: {
        where: { verified: true },
      },
      certifications: {
        where: { status: 'completed' },
        include: { certification: true },
      },
      availability: {
        where: { isCurrent: true },
      },
      ratings: {
        select: { rating: true },
      },
    },
  });

  // Calculate match scores
  const matches = professionals.map((professional) => {
    const score = calculateMatchScore(project, professional);
    return {
      professionalId: professional.id,
      projectId: project.id,
      matchScore: score,
      matchReasons: generateMatchReasons(project, professional),
      status: 'pending' as const,
    };
  });

  // Filter and sort matches
  const qualifiedMatches = matches
    .filter((m) => m.matchScore >= 60)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);

  // Create match records
  if (qualifiedMatches.length > 0) {
    await prisma.projectMatch.createMany({
      data: qualifiedMatches,
    });

    await prisma.project.update({
      where: { id: projectId },
      data: {
        status: 'matching',
        matchedAt: new Date(),
      },
    });
  }
}

export default router;

