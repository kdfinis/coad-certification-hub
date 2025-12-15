import { useEffect, useRef, useState } from 'react';
import { Users, Building2, CheckCircle2, Star, Shield, Award, Link as LinkIcon, GraduationCap } from 'lucide-react';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
      icon: Users, 
      number: '10,000+', 
      label: 'Certified Professionals',
      color: 'text-primary'
    },
    { 
      icon: Building2, 
      number: '500+', 
      label: 'Corporate Clients',
      color: 'text-teal'
    },
    { 
      icon: CheckCircle2, 
      number: '95%', 
      label: 'Pass Rate',
      color: 'text-success'
    },
    { 
      icon: Star, 
      number: '4.8/5', 
      label: 'Average Rating',
      color: 'text-primary'
    },
  ];

  const badges = [
    { icon: Shield, label: 'EU AI Act Compliant' },
    { icon: Award, label: 'ESG 2015 Certified' },
    { icon: LinkIcon, label: 'Blockchain Verified' },
    { icon: GraduationCap, label: 'ECTS Compatible' },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50" id="about">
      <div className="container-coad">
        {/* Heading */}
        <h2 className="heading-3 text-center text-foreground mb-12">
          Join professionals worldwide advancing their AI competency
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`
                bg-card rounded-xl p-6 shadow-sm border border-border
                card-hover
                ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Badges Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {badges.map((badge, index) => (
            <div 
              key={badge.label}
              className={`
                flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border
                hover:border-primary/30 hover:shadow-md transition-all duration-300
                ${isVisible ? 'animate-fade-in' : 'opacity-0'}
              `}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
