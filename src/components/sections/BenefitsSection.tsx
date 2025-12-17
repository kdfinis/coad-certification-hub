import { Check } from 'lucide-react';
import { GraduationNodeIcon, CredentialIcon, SustainabilityIcon } from '@/components/ui/custom-icons';
import benefitEducation from '@/assets/benefit-education.png';
import benefitCredentials from '@/assets/benefit-credentials.png';
import benefitSustainability from '@/assets/benefit-sustainability.png';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: GraduationNodeIcon,
      title: 'ECTS Compatible',
      description: 'All certifications are convertible to ECTS credits (30 hours per ECTS) for Bologna Process mobility and academic recognition.',
      points: [
        'Recognized across EU institutions',
        'Supports career mobility',
        'Academic credit transfer',
      ],
      color: 'teal' as const,
      imagePosition: 'right',
      image: benefitEducation,
    },
    {
      icon: CredentialIcon,
      title: 'Verifiable Digital Credentials',
      description: 'All certificates are digitally verified for authenticity, ensuring your credentials are secure and easily shareable.',
      points: [
        'Secure credential records',
        'Instant verification for employers',
        'Shareable on LinkedIn and portfolios',
      ],
      color: 'primary' as const,
      imagePosition: 'left',
      image: benefitCredentials,
    },
    {
      icon: SustainabilityIcon,
      title: 'Sustainability-Focused',
      description: 'Programs incorporate responsible AI practices with attention to environmental impact and ethical considerations.',
      points: [
        'Energy-efficient AI practices',
        'Ethical oversight principles',
        'Transparent assessment standards',
      ],
      color: 'success' as const,
      imagePosition: 'right',
      image: benefitSustainability,
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
        const colors = colorClasses[benefit.color];
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
                    <benefit.icon className="w-5 h-5" color={benefit.color} />
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

                {/* Visual - Now with generated images */}
                <div className={`relative ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className={`aspect-square max-w-md mx-auto rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center overflow-hidden`}>
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
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
