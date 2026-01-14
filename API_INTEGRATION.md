# API Integration Guide

This document outlines the API routes and integration points for the COAD LMS platform.

## Authentication APIs

### Google OAuth
- **Route**: `/api/auth/google`
- **Method**: GET
- **Purpose**: Initiates Google OAuth flow
- **Returns**: Redirects to Google consent screen
- **Environment Variables Required**:
  - `GOOGLE_CLIENT_ID`
  - `GOOGLE_CLIENT_SECRET`

### LinkedIn OAuth
- **Route**: `/api/auth/linkedin`
- **Method**: GET
- **Purpose**: Initiates LinkedIn OAuth flow
- **Returns**: Redirects to LinkedIn consent screen
- **Environment Variables Required**:
  - `LINKEDIN_CLIENT_ID`
  - `LINKEDIN_CLIENT_SECRET`

## Enrollment APIs

### Create Enrollment
- **Route**: `/api/enrollments`
- **Method**: POST
- **Body**:
  ```json
  {
    "userId": "user_123",
    "courseId": "aac-foundations",
    "role": "Student"
  }
  ```
- **Returns**: Enrollment confirmation with enrollment ID

### Get User Enrollments
- **Route**: `/api/enrollments?userId=user_123`
- **Method**: GET
- **Returns**: List of user's course enrollments

## Payment APIs

### Payment Webhook
- **Route**: `/api/payments/webhook`
- **Method**: POST
- **Purpose**: Handles Stripe/PayPal webhook events
- **Events Handled**:
  - `payment_intent.succeeded` - Creates enrollment
  - `payment_intent.failed` - Logs failure
  - `invoice.paid` - Updates enrollment status
- **Environment Variables Required**:
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`

## Zoom Integration APIs

### Create Zoom Meeting
- **Route**: `/api/zoom/create-meeting`
- **Method**: POST
- **Body**:
  ```json
  {
    "courseId": "aac-foundations",
    "title": "Live Session: AI Fundamentals",
    "startTime": "2026-04-10T10:00:00Z",
    "duration": 60
  }
  ```
- **Returns**: Meeting details with join URL
- **Environment Variables Required**:
  - `ZOOM_CLIENT_ID`
  - `ZOOM_CLIENT_SECRET`
  - `ZOOM_ACCOUNT_ID`

## Implementation Checklist

### Phase 1: Core Setup
- [ ] Set up database (PostgreSQL recommended)
- [ ] Configure environment variables
- [ ] Set up authentication providers (Google, LinkedIn)
- [ ] Configure payment processor (Stripe)

### Phase 2: Enrollment Flow
- [ ] Implement enrollment creation API
- [ ] Connect checkout to enrollment API
- [ ] Set up email notifications for enrollments
- [ ] Implement LMS access provisioning

### Phase 3: Payment Integration
- [ ] Set up Stripe webhook endpoint
- [ ] Implement payment success → enrollment flow
- [ ] Add invoice generation
- [ ] Set up refund handling

### Phase 4: Zoom Integration
- [ ] Set up Zoom OAuth
- [ ] Implement meeting creation API
- [ ] Add meeting links to course modules
- [ ] Set up recording access

### Phase 5: File Storage
- [ ] Configure S3/Cloudflare R2
- [ ] Implement file upload API
- [ ] Set up file access controls
- [ ] Add file quota management

## Database Schema Recommendations

### Users Table
- id, email, name, role, created_at, updated_at
- oauth_providers (jsonb) - linked accounts

### Courses Table
- id, title, description, price, duration, status
- metadata (jsonb) - curriculum, outcomes

### Enrollments Table
- id, user_id, course_id, role, status, enrolled_at
- progress (jsonb) - completion tracking

### Assignments Table
- id, course_id, title, due_date, points, submission_type

### Submissions Table
- id, assignment_id, user_id, file_url, submitted_at, grade

### Zoom Sessions Table
- id, course_id, meeting_id, join_url, start_time, recording_url

## Security Considerations

1. **Webhook Verification**: Always verify webhook signatures
2. **Rate Limiting**: Implement rate limiting on all API routes
3. **Input Validation**: Validate all input data
4. **Role-Based Access**: Enforce role-based permissions
5. **Data Encryption**: Encrypt sensitive data at rest
6. **HTTPS Only**: Enforce HTTPS in production

## Testing

Use the provided API route stubs as starting points. Each route includes TODO comments indicating what needs to be implemented.

For local testing:
- Use Stripe test mode
- Use Zoom sandbox environment
- Mock OAuth flows for development
