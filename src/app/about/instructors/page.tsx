const instructors = [
  {
    name: 'Karlo Definis',
    role: 'CEO & Lead Instructor',
    credentials: '10+ years executive education, Digital transformation expert',
    expertise: ['AI program design', 'GDPR compliance', 'Blockchain applications', 'Market strategy'],
    bio: 'Founder of COAD with extensive experience in executive education and AI workforce development.',
  },
  {
    name: 'Vlado Sutlovic',
    role: 'Privacy Expert',
    credentials: 'German-based privacy specialist',
    expertise: ['EU AI Act compliance', 'Data governance', 'Privacy auditing'],
    bio: 'Expert in privacy regulations and AI compliance frameworks.',
  },
  {
    name: 'Petra Krizan',
    role: 'Cybersecurity Expert',
    credentials: 'Cybersecurity and risk management specialist',
    expertise: ['Security auditing', 'Risk assessment', 'Threat protection'],
    bio: 'Specialist in AI security and cyber-resilient systems.',
  },
];

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-coad py-16">
        <div className="mb-12">
          <h1 className="university-heading-1 text-foreground mb-4">Our Instructors</h1>
          <p className="body-large text-muted-foreground max-w-2xl">
            Learn from industry-leading experts with proven track records in AI, governance, and compliance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="rounded-2xl border border-border bg-card p-6 card-hover">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-teal mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {instructor.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="university-heading-4 text-foreground mb-1">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{instructor.role}</p>
                <p className="text-xs text-muted-foreground">{instructor.credentials}</p>
              </div>
              <p className="text-sm text-foreground mb-4">{instructor.bio}</p>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {instructor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
