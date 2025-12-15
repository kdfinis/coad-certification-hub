import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

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
            Start Your Journey
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your AI Certification<br />
            Journey Today
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join 10,000+ professionals who have advanced their careers with COAD certifications. Get started with a free preview or explore our corporate training options.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              className="bg-white text-navy hover:bg-white/90 hover:scale-[1.02] font-semibold shadow-lg"
              asChild
            >
              <a href="https://app.coad.ai/signup" className="group">
                Get Started Free
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

          {/* Trust Line */}
          <p className="mt-10 text-sm text-white/60">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
