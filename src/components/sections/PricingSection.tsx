import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Award, Shield, Layers, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const PricingSection = () => {
  const plans = [
    {
      name: 'AIC Track - Complete',
      subtitle: 'All 3 Tiers (QAP, AAP, MAP)',
      price: '€3,000 - €5,000',
      icon: Award,
      featured: false,
      features: [
        'QAP Certification (Tier 1)',
        'AAP Certification (Tier 2)',
        'MAP Certification (Tier 3)',
        '27 ECTS credits total',
        'Blockchain-verified badges',
        'LinkedIn shareable',
        'Post-nominal designations',
      ],
      cta: 'View AIC Track',
      href: '#aic-track',
      color: 'primary',
    },
    {
      name: 'AIO Track',
      subtitle: 'Certified AI Oversight Professional',
      price: '€4,500',
      icon: Shield,
      featured: true,
      badge: 'Most Popular',
      features: [
        '4 Domain Certifications',
        '12 ECTS credits',
        'Blockchain-verified badge',
        'Compliance portfolio ready',
        'Post-nominal: AIO Certified',
        'EU AI Act focused',
        'High-risk AI expertise',
      ],
      cta: 'View AIO Track',
      href: '#aio-track',
      color: 'teal',
    },
    {
      name: 'Competency Modules',
      subtitle: 'Per Module',
      price: '€1,800 - €2,200',
      icon: Layers,
      featured: false,
      features: [
        'Standalone certification',
        '3-6 ECTS credits',
        'Can feed into tracks',
        'Flexible learning',
        'Blockchain-verified',
        'Self-paced options',
      ],
      cta: 'Browse Modules',
      href: '#modules',
      color: 'primary',
    },
    {
      name: 'Corporate Training',
      subtitle: 'Enterprise Solutions',
      price: 'Custom Pricing',
      icon: Building2,
      featured: false,
      features: [
        'Customized programs',
        'Team certifications',
        'On-site or online',
        'Compliance reporting',
        'Dedicated support',
        'Volume discounts',
      ],
      cta: 'Contact Sales',
      href: 'mailto:contact@coad.ai',
      color: 'primary',
    },
  ];

  return (
    <section className="section-padding bg-muted/50" id="pricing">
      <div className="container-coad">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-2 text-foreground mb-4">
            Choose Your<br />
            <span className="gradient-text">Certification Path</span>
          </h2>
          <p className="body-large text-muted-foreground">
            Select the track or module that fits your career goals and compliance needs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative bg-card rounded-2xl border-2 p-8 transition-all duration-300',
                plan.featured
                  ? 'border-teal shadow-xl scale-[1.02]'
                  : 'border-border hover:border-primary/30 hover:shadow-lg'
              )}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-cta text-white text-sm font-medium rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={cn(
                'w-14 h-14 rounded-xl flex items-center justify-center mb-6',
                plan.color === 'teal' ? 'bg-teal/10' : 'bg-primary/10'
              )}>
                <plan.icon className={cn(
                  'w-7 h-7',
                  plan.color === 'teal' ? 'text-teal' : 'text-primary'
                )} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>

              {/* Price */}
              <div className="mb-6">
                <span className={cn(
                  'text-3xl font-bold',
                  plan.color === 'teal' ? 'text-teal' : 'text-primary'
                )}>
                  {plan.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={cn(
                      'w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5',
                      plan.color === 'teal' ? 'bg-teal/10' : 'bg-success/10'
                    )}>
                      <Check className={cn(
                        'w-3 h-3',
                        plan.color === 'teal' ? 'text-teal' : 'text-success'
                      )} />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? 'gradient' : 'outline'}
                className="w-full group"
                asChild
              >
                <a href={plan.href}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Comparison Note */}
        <p className="text-center text-muted-foreground mt-10">
          All certifications include blockchain verification, EU AI Act alignment, and ECTS credit compatibility.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
