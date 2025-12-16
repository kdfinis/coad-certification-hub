import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Award, Shield, Layers, Building2, Clock, Percent, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const PricingSection = () => {
  const plans = [
    {
      name: 'ADC Track',
      subtitle: 'AI Development Certified',
      tiers: [
        { name: 'Level 1 (Professional)', price: '€1,800', hours: '180 hours', duration: '3 months' },
        { name: 'Level 2 (Advanced Expert)', price: '€2,200', hours: '270 hours', duration: '4 months' },
        { name: 'Level 3 (Master)', price: '€2,200', hours: '360 hours', duration: '6 months' },
      ],
      icon: Award,
      featured: false,
      features: [
        'Progressive 3-level certification',
        'ADC Charterholder upon Level 3',
        'Priority directory placement',
        'LinkedIn shareable credentials',
        'Hands-on project learning',
      ],
      cta: 'View ADC Track',
      href: '#adc-track',
      color: 'primary',
    },
    {
      name: 'ACOS Track',
      subtitle: 'AI Controlling & Oversight Certified',
      tiers: [
        { name: 'Transformation Controller', price: '€2,880', hours: '150 hours' },
        { name: 'Safety & Risk Controller', price: '€1,640', hours: '90 hours' },
        { name: 'Ethics Controller', price: '€1,640', hours: '90 hours' },
        { name: 'Legal & Compliance Controller', price: '€1,640', hours: '90 hours' },
      ],
      duration: '6 months',
      icon: Shield,
      featured: true,
      badge: 'Charterholder Track',
      features: [
        '4 Controller Pillars',
        'ACOS Charterholder upon completion',
        'Priority directory placement',
        'Executive-level credentials',
        'Strategic leadership focus',
      ],
      cta: 'View ACOS Track',
      href: '#acos-track',
      color: 'teal',
    },
    {
      name: 'Competency Modules',
      subtitle: 'Standalone Certifications',
      priceRange: '€800 - €2,100',
      hours: '90 hours each',
      icon: Layers,
      featured: false,
      features: [
        '18 specialized modules available',
        'ADC & ACOS aligned options',
        'Feed into full track (20% credit)',
        'Flexible self-paced learning',
        'Verifiable credentials',
      ],
      cta: 'Browse Modules',
      href: '#modules',
      color: 'primary',
    },
    {
      name: 'Corporate Training',
      subtitle: 'Enterprise Solutions',
      price: 'From €20,000',
      icon: Building2,
      featured: false,
      features: [
        'Customized team programs',
        'Cohort certifications',
        'On-site or online delivery',
        'Compliance reporting',
        'Dedicated account manager',
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
            All prices VAT-inclusive (17% Luxembourg). Pay monthly or upfront with 10% discount.
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
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-cta text-white text-sm font-medium rounded-full shadow-lg">
                    <Star className="w-3 h-3" />
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

              {/* Price - Handle tiered pricing */}
              <div className="mb-6">
                {plan.tiers ? (
                  <div className="space-y-2">
                    {plan.tiers.map((tier) => (
                      <div key={tier.name} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{tier.name}</span>
                        <span className="font-semibold text-foreground">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <span className={cn(
                      'text-3xl font-bold',
                      plan.color === 'teal' ? 'text-teal' : 'text-primary'
                    )}>
                      {plan.price || plan.priceRange}
                    </span>
                    {plan.hours && (
                      <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {plan.hours}
                        {plan.duration && ` • ${plan.duration}`}
                      </div>
                    )}
                  </>
                )}
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

        {/* Discount Note */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Percent className="w-4 h-4 text-primary" />
            <span>10% discount for full upfront payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            <span>Module credits apply 20% toward full tracks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;