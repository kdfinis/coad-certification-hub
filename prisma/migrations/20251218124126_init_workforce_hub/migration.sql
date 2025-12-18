-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('professional', 'client', 'admin', 'allocation_firm');

-- CreateEnum
CREATE TYPE "ProjectRatePreference" AS ENUM ('hourly', 'project', 'both');

-- CreateEnum
CREATE TYPE "AvailabilityType" AS ENUM ('full_time', 'part_time', 'project_based');

-- CreateEnum
CREATE TYPE "CharterholderType" AS ENUM ('ADC', 'ACOS');

-- CreateEnum
CREATE TYPE "EligibilityTier" AS ENUM ('charterholder', 'track_completer', 'module_completer');

-- CreateEnum
CREATE TYPE "ProfileStatus" AS ENUM ('pending', 'active', 'suspended', 'inactive');

-- CreateEnum
CREATE TYPE "CertificationType" AS ENUM ('track', 'module');

-- CreateEnum
CREATE TYPE "TrackName" AS ENUM ('AAC', 'AIO');

-- CreateEnum
CREATE TYPE "CertificationStatus" AS ENUM ('in_progress', 'completed', 'expired');

-- CreateEnum
CREATE TYPE "CompetencyType" AS ENUM ('track', 'module', 'skill');

-- CreateEnum
CREATE TYPE "CompetencyLevel" AS ENUM ('entry', 'mid', 'senior');

-- CreateEnum
CREATE TYPE "PortfolioType" AS ENUM ('project', 'case_study', 'article', 'github', 'website', 'other');

-- CreateEnum
CREATE TYPE "CompanySize" AS ENUM ('startup', 'small', 'medium', 'large', 'enterprise');

-- CreateEnum
CREATE TYPE "ClientType" AS ENUM ('corporate', 'startup', 'government', 'nonprofit', 'individual');

-- CreateEnum
CREATE TYPE "PreferredTier" AS ENUM ('charterholder', 'track_completer', 'any');

-- CreateEnum
CREATE TYPE "RequiredTrack" AS ENUM ('AAC', 'AIO', 'any');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('consulting', 'development', 'audit', 'training', 'other');

-- CreateEnum
CREATE TYPE "EngagementType" AS ENUM ('full_time', 'part_time', 'project_based');

-- CreateEnum
CREATE TYPE "LocationPreference" AS ENUM ('remote', 'onsite', 'hybrid');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('draft', 'submitted', 'matching', 'matched', 'in_progress', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "RequirementType" AS ENUM ('competency', 'skill', 'experience', 'certification', 'other');

-- CreateEnum
CREATE TYPE "RequirementLevel" AS ENUM ('required', 'preferred', 'nice_to_have');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('pending', 'presented', 'accepted', 'declined', 'expired');

-- CreateEnum
CREATE TYPE "ProfessionalResponse" AS ENUM ('pending', 'interested', 'declined', 'accepted');

-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('hourly', 'project', 'retainer');

-- CreateEnum
CREATE TYPE "PaymentSchedule" AS ENUM ('upfront', 'milestone', 'biweekly', 'monthly', 'end');

-- CreateEnum
CREATE TYPE "ContractStatus" AS ENUM ('draft', 'pending', 'signed', 'active', 'completed', 'cancelled', 'disputed');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('client_to_coad', 'coad_to_professional', 'refund');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('bank_transfer', 'stripe', 'paypal', 'other');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('pending', 'processing', 'completed', 'failed', 'refunded');

-- CreateEnum
CREATE TYPE "PartnershipStatus" AS ENUM ('active', 'inactive', 'pending');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('project_match', 'project_accepted', 'contract_signed', 'payment_received', 'message', 'system');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "phone" TEXT,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_login" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "user_type" "UserType" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professionals" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "professional_summary" TEXT,
    "bio" TEXT,
    "linkedin_url" TEXT,
    "website_url" TEXT,
    "location" TEXT,
    "languages" TEXT[],
    "hourly_rate_min" DECIMAL(10,2),
    "hourly_rate_max" DECIMAL(10,2),
    "project_rate_preference" "ProjectRatePreference" NOT NULL DEFAULT 'both',
    "availability_type" "AvailabilityType" NOT NULL,
    "availability_hours_per_week" INTEGER,
    "is_charterholder" BOOLEAN NOT NULL DEFAULT false,
    "charterholder_type" "CharterholderType",
    "eligibility_tier" "EligibilityTier" NOT NULL,
    "profile_status" "ProfileStatus" NOT NULL DEFAULT 'pending',
    "profile_completed_at" TIMESTAMP(3),
    "profile_approved_at" TIMESTAMP(3),
    "profile_approved_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professionals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certifications" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "certification_type" "CertificationType" NOT NULL,
    "track_name" "TrackName",
    "module_name" TEXT,
    "phase_or_domain" TEXT,
    "status" "CertificationStatus" NOT NULL DEFAULT 'in_progress',
    "completed_at" TIMESTAMP(3),
    "certificate_hash" TEXT,
    "certificate_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_certifications" (
    "id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "certification_id" TEXT NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "professional_certifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_competencies" (
    "id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "competency_type" "CompetencyType" NOT NULL,
    "competency_name" TEXT NOT NULL,
    "competency_level" "CompetencyLevel" NOT NULL DEFAULT 'entry',
    "source_certification_id" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "professional_competencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_portfolios" (
    "id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "portfolio_type" "PortfolioType" NOT NULL,
    "url" TEXT,
    "image_url" TEXT,
    "technologies" TEXT[],
    "competencies_demonstrated" TEXT[],
    "date_completed" TIMESTAMP(3),
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "display_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professional_portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_availability" (
    "id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "hours_per_week" INTEGER,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "availableDays" TEXT[],
    "available_hours_start" TEXT,
    "available_hours_end" TEXT,
    "is_current" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "professional_availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_name" TEXT,
    "company_size" "CompanySize",
    "industry" TEXT,
    "location" TEXT,
    "website_url" TEXT,
    "contact_person_name" TEXT,
    "contact_person_title" TEXT,
    "billing_address" TEXT,
    "tax_id" TEXT,
    "client_type" "ClientType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "allocation_firm_id" TEXT,
    "project_title" TEXT NOT NULL,
    "project_description" TEXT NOT NULL,
    "project_scope" TEXT,
    "deliverables" TEXT,
    "required_competencies" JSONB,
    "preferred_tier" "PreferredTier" NOT NULL DEFAULT 'any',
    "required_track" "RequiredTrack" NOT NULL DEFAULT 'any',
    "required_modules" TEXT[],
    "project_type" "ProjectType" NOT NULL,
    "engagement_type" "EngagementType" NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "duration_weeks" INTEGER,
    "budget_min" DECIMAL(10,2),
    "budget_max" DECIMAL(10,2),
    "budget_currency" TEXT NOT NULL DEFAULT 'EUR',
    "location_preference" "LocationPreference" NOT NULL DEFAULT 'remote',
    "language_requirements" TEXT[],
    "status" "ProjectStatus" NOT NULL DEFAULT 'draft',
    "submitted_at" TIMESTAMP(3),
    "matched_at" TIMESTAMP(3),
    "started_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_requirements" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "requirement_type" "RequirementType" NOT NULL,
    "requirement_name" TEXT NOT NULL,
    "requirement_level" "RequirementLevel" NOT NULL DEFAULT 'required',
    "requirement_value" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "project_requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_matches" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "match_score" DECIMAL(5,2) NOT NULL,
    "match_reasons" TEXT[],
    "match_algorithm_version" TEXT,
    "status" "MatchStatus" NOT NULL DEFAULT 'pending',
    "presented_to_client_at" TIMESTAMP(3),
    "client_viewed_at" TIMESTAMP(3),
    "professional_notified_at" TIMESTAMP(3),
    "professional_response" "ProfessionalResponse",
    "professional_response_at" TIMESTAMP(3),
    "client_selected" BOOLEAN NOT NULL DEFAULT false,
    "client_selected_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_matches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "contract_number" TEXT NOT NULL,
    "contract_type" "ContractType" NOT NULL,
    "rate" DECIMAL(10,2) NOT NULL,
    "rate_currency" TEXT NOT NULL DEFAULT 'EUR',
    "total_amount" DECIMAL(10,2) NOT NULL,
    "coad_margin_percentage" DECIMAL(5,2) NOT NULL,
    "professional_payout" DECIMAL(10,2) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "milestones" JSONB,
    "payment_schedule" "PaymentSchedule" NOT NULL,
    "terms_and_conditions" TEXT,
    "contract_status" "ContractStatus" NOT NULL DEFAULT 'draft',
    "signed_by_client_at" TIMESTAMP(3),
    "signed_by_professional_at" TIMESTAMP(3),
    "signed_by_coad_at" TIMESTAMP(3),
    "contract_document_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "contract_id" TEXT NOT NULL,
    "payment_type" "PaymentType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'EUR',
    "payment_method" "PaymentMethod",
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'pending',
    "payment_reference" TEXT,
    "transaction_id" TEXT,
    "due_date" TIMESTAMP(3),
    "paid_at" TIMESTAMP(3),
    "processed_at" TIMESTAMP(3),
    "failure_reason" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allocation_firms" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "firm_name" TEXT NOT NULL,
    "contact_email" TEXT,
    "contact_phone" TEXT,
    "website_url" TEXT,
    "commission_percentage" DECIMAL(5,2) NOT NULL DEFAULT 40.00,
    "partnership_status" "PartnershipStatus" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "allocation_firms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professional_ratings" (
    "id" TEXT NOT NULL,
    "contract_id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review_text" TEXT,
    "review_categories" JSONB,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "professional_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_ratings" (
    "id" TEXT NOT NULL,
    "contract_id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review_text" TEXT,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "notification_type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "link_url" TEXT,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "read_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_user_type_idx" ON "users"("user_type");

-- CreateIndex
CREATE UNIQUE INDEX "professionals_user_id_key" ON "professionals"("user_id");

-- CreateIndex
CREATE INDEX "professionals_user_id_idx" ON "professionals"("user_id");

-- CreateIndex
CREATE INDEX "professionals_eligibility_tier_idx" ON "professionals"("eligibility_tier");

-- CreateIndex
CREATE INDEX "professionals_is_charterholder_idx" ON "professionals"("is_charterholder");

-- CreateIndex
CREATE INDEX "professionals_profile_status_idx" ON "professionals"("profile_status");

-- CreateIndex
CREATE INDEX "certifications_user_id_idx" ON "certifications"("user_id");

-- CreateIndex
CREATE INDEX "certifications_certification_type_idx" ON "certifications"("certification_type");

-- CreateIndex
CREATE INDEX "certifications_track_name_idx" ON "certifications"("track_name");

-- CreateIndex
CREATE INDEX "certifications_module_name_idx" ON "certifications"("module_name");

-- CreateIndex
CREATE INDEX "certifications_status_idx" ON "certifications"("status");

-- CreateIndex
CREATE INDEX "professional_certifications_professional_id_idx" ON "professional_certifications"("professional_id");

-- CreateIndex
CREATE INDEX "professional_certifications_certification_id_idx" ON "professional_certifications"("certification_id");

-- CreateIndex
CREATE UNIQUE INDEX "professional_certifications_professional_id_certification_i_key" ON "professional_certifications"("professional_id", "certification_id");

-- CreateIndex
CREATE INDEX "professional_competencies_professional_id_idx" ON "professional_competencies"("professional_id");

-- CreateIndex
CREATE INDEX "professional_competencies_competency_name_idx" ON "professional_competencies"("competency_name");

-- CreateIndex
CREATE INDEX "professional_competencies_competency_type_idx" ON "professional_competencies"("competency_type");

-- CreateIndex
CREATE INDEX "professional_competencies_competency_level_idx" ON "professional_competencies"("competency_level");

-- CreateIndex
CREATE INDEX "professional_portfolios_professional_id_idx" ON "professional_portfolios"("professional_id");

-- CreateIndex
CREATE INDEX "professional_portfolios_is_featured_idx" ON "professional_portfolios"("is_featured");

-- CreateIndex
CREATE INDEX "professional_availability_professional_id_idx" ON "professional_availability"("professional_id");

-- CreateIndex
CREATE INDEX "professional_availability_is_current_idx" ON "professional_availability"("is_current");

-- CreateIndex
CREATE INDEX "professional_availability_start_date_idx" ON "professional_availability"("start_date");

-- CreateIndex
CREATE INDEX "professional_availability_end_date_idx" ON "professional_availability"("end_date");

-- CreateIndex
CREATE UNIQUE INDEX "clients_user_id_key" ON "clients"("user_id");

-- CreateIndex
CREATE INDEX "clients_user_id_idx" ON "clients"("user_id");

-- CreateIndex
CREATE INDEX "clients_company_name_idx" ON "clients"("company_name");

-- CreateIndex
CREATE INDEX "projects_client_id_idx" ON "projects"("client_id");

-- CreateIndex
CREATE INDEX "projects_status_idx" ON "projects"("status");

-- CreateIndex
CREATE INDEX "projects_preferred_tier_idx" ON "projects"("preferred_tier");

-- CreateIndex
CREATE INDEX "projects_required_track_idx" ON "projects"("required_track");

-- CreateIndex
CREATE INDEX "projects_start_date_idx" ON "projects"("start_date");

-- CreateIndex
CREATE INDEX "project_requirements_project_id_idx" ON "project_requirements"("project_id");

-- CreateIndex
CREATE INDEX "project_requirements_requirement_type_idx" ON "project_requirements"("requirement_type");

-- CreateIndex
CREATE INDEX "project_requirements_requirement_level_idx" ON "project_requirements"("requirement_level");

-- CreateIndex
CREATE INDEX "project_matches_project_id_idx" ON "project_matches"("project_id");

-- CreateIndex
CREATE INDEX "project_matches_professional_id_idx" ON "project_matches"("professional_id");

-- CreateIndex
CREATE INDEX "project_matches_status_idx" ON "project_matches"("status");

-- CreateIndex
CREATE INDEX "project_matches_match_score_idx" ON "project_matches"("match_score");

-- CreateIndex
CREATE INDEX "project_matches_client_selected_idx" ON "project_matches"("client_selected");

-- CreateIndex
CREATE UNIQUE INDEX "project_matches_project_id_professional_id_key" ON "project_matches"("project_id", "professional_id");

-- CreateIndex
CREATE UNIQUE INDEX "contracts_contract_number_key" ON "contracts"("contract_number");

-- CreateIndex
CREATE INDEX "contracts_project_id_idx" ON "contracts"("project_id");

-- CreateIndex
CREATE INDEX "contracts_professional_id_idx" ON "contracts"("professional_id");

-- CreateIndex
CREATE INDEX "contracts_contract_status_idx" ON "contracts"("contract_status");

-- CreateIndex
CREATE INDEX "contracts_contract_number_idx" ON "contracts"("contract_number");

-- CreateIndex
CREATE INDEX "payments_contract_id_idx" ON "payments"("contract_id");

-- CreateIndex
CREATE INDEX "payments_payment_status_idx" ON "payments"("payment_status");

-- CreateIndex
CREATE INDEX "payments_payment_type_idx" ON "payments"("payment_type");

-- CreateIndex
CREATE UNIQUE INDEX "allocation_firms_user_id_key" ON "allocation_firms"("user_id");

-- CreateIndex
CREATE INDEX "allocation_firms_partnership_status_idx" ON "allocation_firms"("partnership_status");

-- CreateIndex
CREATE UNIQUE INDEX "professional_ratings_contract_id_key" ON "professional_ratings"("contract_id");

-- CreateIndex
CREATE INDEX "professional_ratings_professional_id_idx" ON "professional_ratings"("professional_id");

-- CreateIndex
CREATE INDEX "professional_ratings_client_id_idx" ON "professional_ratings"("client_id");

-- CreateIndex
CREATE INDEX "professional_ratings_rating_idx" ON "professional_ratings"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "client_ratings_contract_id_key" ON "client_ratings"("contract_id");

-- CreateIndex
CREATE INDEX "client_ratings_client_id_idx" ON "client_ratings"("client_id");

-- CreateIndex
CREATE INDEX "client_ratings_professional_id_idx" ON "client_ratings"("professional_id");

-- CreateIndex
CREATE INDEX "notifications_user_id_idx" ON "notifications"("user_id");

-- CreateIndex
CREATE INDEX "notifications_is_read_idx" ON "notifications"("is_read");

-- CreateIndex
CREATE INDEX "notifications_notification_type_idx" ON "notifications"("notification_type");

-- CreateIndex
CREATE INDEX "notifications_created_at_idx" ON "notifications"("created_at");

-- AddForeignKey
ALTER TABLE "professionals" ADD CONSTRAINT "professionals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_certifications" ADD CONSTRAINT "professional_certifications_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_certifications" ADD CONSTRAINT "professional_certifications_certification_id_fkey" FOREIGN KEY ("certification_id") REFERENCES "certifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_competencies" ADD CONSTRAINT "professional_competencies_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_portfolios" ADD CONSTRAINT "professional_portfolios_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_availability" ADD CONSTRAINT "professional_availability_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_allocation_firm_id_fkey" FOREIGN KEY ("allocation_firm_id") REFERENCES "allocation_firms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_requirements" ADD CONSTRAINT "project_requirements_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_matches" ADD CONSTRAINT "project_matches_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_matches" ADD CONSTRAINT "project_matches_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_ratings" ADD CONSTRAINT "professional_ratings_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professional_ratings" ADD CONSTRAINT "professional_ratings_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_ratings" ADD CONSTRAINT "client_ratings_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
