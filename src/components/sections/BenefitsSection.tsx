import { Leaf, Link as LinkIcon, GraduationCap, Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: 'ESG 2015 Compliant',
      description: 'All programs are ESG 2015 compliant, emphasizing environmental sustainability, social responsibility, and governance standards.',
      points: [
        'Environmental: Energy-efficient AI practices',
        'Social: Ethical oversight and inclusion',
        'Governance: Transparent testing and assessment',
      ],
      color: 'success',
      imagePosition: 'right',
    },
    {
      icon: LinkIcon,
      title: 'Blockchain-Verified Certificates',
      description: 'All certificates are blockchain-verified for authenticity, ensuring your credentials are tamper-proof and permanently verifiable.',
      points: [
        'Immutable credential records',
        'Instant verification for employers',
        'Shareable on LinkedIn and portfolios',
      ],
      color: 'primary',
      imagePosition: 'left',
    },
    {
      icon: GraduationCap,
      title: 'ECTS Compatible',
      description: 'All certifications are convertible to ECTS credits (30 hours per ECTS) for Bologna Process mobility and academic recognition.',
      points: [
        'Recognized across EU institutions',
        'Supports career mobility',
        'Academic credit transfer',
      ],
      color: 'teal',
      imagePosition: 'right',
    },
  ];

  const colorClasses = {
    success: {
      bg: 'bg-success/10',
      text: 'text-success',
      border: 'border-success/20',
    },
    primary: {
      bg: 'bg-primary/10',
      text: 'text-primary',
      border: 'border-primary/20',
    },
    teal: {
      bg: 'bg-teal/10',
      text: 'text-teal',
      border: 'border-teal/20',
    },
  };

  return (
    <section className="bg-background" id="benefits">
      {benefits.map((benefit, index) => {
        const colors = colorClasses[benefit.color as keyof typeof colorClasses];
        const isReversed = benefit.imagePosition === 'left';
        
        return (
          <div 
            key={benefit.title}
            className={`section-padding-sm ${index % 2 === 1 ? 'bg-muted/50' : 'bg-background'}`}
          >
            <div className="container-coad">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
                    <benefit.icon className="w-4 h-4" />
                    {benefit.title}
                  </div>
                  
                  <h3 className="heading-3 text-foreground">
                    {benefit.title}
                  </h3>
                  
                  <p className="body-large text-muted-foreground">
                    {benefit.description}
                  </p>

                  <ul className="space-y-3">
                    {benefit.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className={`w-3 h-3 ${colors.text}`} />
                        </div>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`relative ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-square max-w-md mx-auto rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center`}>
                    <div className="relative">
                      {/* Icon Container */}
                      <div className="w-32 h-32 rounded-2xl bg-card shadow-lg flex items-center justify-center animate-float">
                        <benefit.icon className={`w-16 h-16 ${colors.text}`} />
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-card shadow-md flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center">
                        <span className="text-lg">✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative */}
                  <div className={`absolute -top-6 ${isReversed ? '-left-6' : '-right-6'} w-32 h-32 ${colors.bg} rounded-full blur-2xl -z-10`} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BenefitsSection;
