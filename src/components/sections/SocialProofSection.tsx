import { useEffect, useRef, useState } from 'react';
import { Shield, Award, Link as LinkIcon, GraduationCap } from 'lucide-react';

const SocialProofSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const badges = [
    { icon: Shield, label: 'EU AI Act Compliant', description: 'Full compliance with European AI regulations' },
    { icon: Award, label: 'ESG 2015 Certified', description: 'Meeting sustainability standards' },
    { icon: LinkIcon, label: 'Blockchain Verified', description: 'Tamper-proof credential verification' },
    { icon: GraduationCap, label: 'ECTS Compatible', description: 'Recognized academic credit system' },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-background to-muted/30" id="about">
      <div className="container-coad">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className={`heading-3 text-foreground mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Trusted Standards for AI Excellence
          </h2>
          <p className={`body-large text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our certifications meet the highest international standards for AI governance and compliance
          </p>
        </div>

        {/* Badges Grid - Better integrated with content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={badge.label}
              className={`
                group relative p-6 bg-card rounded-2xl border border-border
                hover:border-primary/40 hover:shadow-xl transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms` 
              }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {badge.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {badge.description}
              </p>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
