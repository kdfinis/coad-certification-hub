const testimonials = [
  {
    quote: 'I was stuck in a data analyst role, watching AI transform everything around me. COAD didn\'t just teach me AI, it gave me the hands-on projects and credentials to completely reposition my career. Now I\'m building AI solutions and my salary reflects that change.',
    author: 'Maria K.',
    role: 'AI Developer',
    outcome: 'Career transition to AI development',
  },
  {
    quote: 'The AIO track gave me the governance skills I needed to lead our company\'s AI compliance initiative. The blockchain-verified certificate gave me credibility with our board.',
    author: 'Thomas R.',
    role: 'Compliance Officer',
    outcome: 'Led enterprise AI governance program',
  },
  {
    quote: 'As a programmer, I needed to prove my AI expertise. The ACD track gave me real projects and Charterholder status that set me apart in job interviews.',
    author: 'Alex M.',
    role: 'Senior Software Engineer',
    outcome: 'Advanced to AI specialist role',
  },
];

const outcomes = [
  { metric: '20-30%', label: 'Average salary increase reported' },
  { metric: '95%', label: 'Course completion rate' },
  { metric: '4.8/5', label: 'Average student rating' },
  { metric: '10,000+', label: 'Certified professionals' },
];

export default function OutcomesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="mb-12">
          <h1 className="university-heading-1 text-foreground mb-4">Student Outcomes</h1>
          <p className="body-large text-muted-foreground max-w-2xl">
            Real results from COAD learners. Verified outcomes and career transformations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {outcomes.map((outcome) => (
            <div key={outcome.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-primary mb-2">{outcome.metric}</p>
              <p className="text-sm text-muted-foreground">{outcome.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="university-heading-2 text-foreground mb-8 text-center">Student Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary mt-2">✓ {testimonial.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border-2 border-primary bg-card p-8 text-center">
          <h3 className="university-heading-3 text-foreground mb-4">Ready to Transform Your Career?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of professionals who have advanced their careers with COAD certifications.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/catalog">
              <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Browse Courses
              </button>
            </a>
            <a href="/lms/auth">
              <button className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted">
                View LMS
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
