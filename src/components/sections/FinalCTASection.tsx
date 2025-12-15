import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Award } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal/20 rounded-full blur-3xl" />

      <div className="container-coad relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-8">
            <Sparkles className="w-4 h-4" />
            Luxembourg's AI Training Innovator
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start Free Luxembourg AI<br />
            Module Trial Today
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            From Luxembourg to Europe, gain Act-compliant skills for career revamp or leadership solidification. Hands-on modules, blockchain certificates, and local prestige for professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="xl" 
              className="bg-white text-navy hover:bg-white/90 hover:scale-[1.02] font-semibold shadow-lg"
              asChild
            >
              <a href="https://app.coad.ai/signup" className="group">
                Start Free Module Trial – Act-Compliant Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              asChild
            >
              <a href="#pricing">View Corporate Training</a>
            </Button>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
            <a href="#aic-track" className="hover:text-white transition-colors underline underline-offset-4">
              Revamp Your Career with AIC
            </a>
            <span>•</span>
            <a href="#aio-track" className="hover:text-white transition-colors underline underline-offset-4">
              Solidify Leadership with AIO
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="w-5 h-5" />
              <span className="text-sm">EU AI Act Aligned</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Award className="w-5 h-5" />
              <span className="text-sm">ESG 2015 Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">20% Career Boost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;