import { Button } from '@/components/ui/button';
import { OversightEyeIcon, DataNodeIcon, CredentialIcon, RiskAlertIcon, ShieldNodeIcon } from '@/components/ui/custom-icons';

const ComplianceSection = () => {
  const features = [
    {
      Icon: OversightEyeIcon,
      title: 'Human Oversight Training',
      description: 'Learn to implement effective human oversight mechanisms for AI systems as required by Article 13',
      article: 'Article 13',
    },
    {
      Icon: DataNodeIcon,
      title: 'Data Governance Standards',
      description: 'Master data governance requirements for AI system compliance under Article 15',
      article: 'Article 15',
    },
    {
      Icon: CredentialIcon,
      title: 'Transparency & Disclosure',
      description: 'Understand transparency obligations and disclosure requirements for AI systems',
      article: 'Transparency',
    },
    {
      Icon: RiskAlertIcon,
      title: 'Risk Assessment Methods',
      description: 'Learn systematic risk assessment approaches for AI systems classification',
      article: 'Risk-Based',
    },
  ];

  return (
    <section className="section-padding bg-muted/50" id="compliance">
      <div className="container-coad">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <ShieldNodeIcon className="w-5 h-5" />
            Regulatory Compliance
          </div>
          <h2 className="heading-2 text-foreground mb-4">
            EU AI Act Compliant<br />
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="body-large text-muted-foreground">
            All COAD certifications are structured to meet the demands of the EU AI Act, ensuring compliance with high-risk system requirements such as human oversight (Article 13) and data governance (Article 15). Our programs directly satisfy Act obligations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl border border-border p-8 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.Icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <span className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground">
                      {feature.article}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg">
            Learn About Compliance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
