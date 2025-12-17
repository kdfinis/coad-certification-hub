import { Button } from '@/components/ui/button';
import { 
  ArrowNodeIcon, 
  ShieldNodeIcon, 
  AwardNodeIcon, 
  GlobeNodeIcon, 
  SparkleNodeIcon 
} from '@/components/ui/custom-icons';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-background to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />

      <div className="container-coad relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-fade-in">
              <SparkleNodeIcon className="w-4 h-4" />
              Europe's Leading AI Certification Platform
            </div>

            {/* Headline */}
            <h1 className="heading-1 text-foreground animate-fade-in-up stagger-1">
              Master AI Governance<br />
              <span className="gradient-text">& Competence</span>
            </h1>

            {/* Subheadline */}
            <p className="body-large text-muted-foreground max-w-xl animate-fade-in-up stagger-2">
              Earn your ADC or ACOS Charterholder status with EU-recognized credentials. Join our Accredited Experts Directory with priority placement and exclusive recognition for professionals mastering AI.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in-up stagger-3">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                No coding background required
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                Charterholder prestige & directory
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                CFA-style progression model
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                EU-recognized certification
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.coad.ai/signup" className="group">
                  Start Free Module Trial
                  <ArrowNodeIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#pricing">View Corporate Training</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-in-up stagger-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <ShieldNodeIcon className="w-5 h-5 text-success" />
                </div>
                <span>EU AI Act<br />Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <AwardNodeIcon className="w-5 h-5 text-primary" />
                </div>
                <span>ESG 2015<br />Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <GlobeNodeIcon className="w-5 h-5 text-teal" />
                </div>
                <span>EU<br />Recognized</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in-up stagger-5">
            {/* Certificate Card Mockup */}
            <div className="relative mx-auto max-w-md">
              {/* Main Certificate */}
              <div className="relative bg-card rounded-2xl shadow-xl border border-border p-8 animate-float">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-teal/20 blur-xl -z-10" />
                
                {/* Certificate Content */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xl">C</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">COAD</p>
                        <p className="text-xs text-muted-foreground">Certificate of Competency</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-success/10 rounded-full">
                      <span className="text-xs font-medium text-success">Verified</span>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Certification</p>
                      <p className="font-semibold text-foreground">ADC Charterholder</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Study Hours</p>
                        <p className="font-semibold text-foreground">360 Hours</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                        <p className="font-semibold text-foreground">6 Months</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShieldNodeIcon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">Blockchain Verified</span>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      0x7f3a...9c2b
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-card shadow-lg border border-border flex items-center justify-center animate-pulse-glow">
                <AwardNodeIcon className="w-10 h-10 text-primary" />
              </div>

              {/* Background Cards */}
              <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl bg-primary/5 border border-primary/10 -z-10" />
              <div className="absolute -bottom-12 -left-12 w-full h-full rounded-2xl bg-teal/5 border border-teal/10 -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;