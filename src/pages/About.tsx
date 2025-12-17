import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  NeuralBrainIcon, 
  NetworkNodesIcon, 
  GlobeNodeIcon,
  CredentialIcon,
  GraduationNodeIcon,
  CodeNodeIcon,
  BalanceScaleIcon,
  DataFlowIcon,
  ShieldNodeIcon
} from '@/components/ui/custom-icons';

const About = () => {
  const pillars = [
    {
      icon: CodeNodeIcon,
      title: "Technology Architects",
      description: "Developers and AI specialists building the infrastructure for next-generation compliance systems and automated oversight tools."
    },
    {
      icon: BalanceScaleIcon,
      title: "Finance & Risk Experts",
      description: "Senior practitioners from banking, asset management, and regulatory bodies bringing real-world governance experience."
    },
    {
      icon: GraduationNodeIcon,
      title: "Higher Education Leaders",
      description: "Accredited curriculum designers and academic professionals ensuring our programmes meet rigorous educational standards."
    },
    {
      icon: NetworkNodesIcon,
      title: "Workforce Development Specialists",
      description: "Industry-leading trainers and L&D professionals who understand how organisations upskill at scale."
    }
  ];

  const values = [
    {
      icon: ShieldNodeIcon,
      title: "Rigorous Standards",
      description: "Every module, assessment, and certification pathway is designed to exceed EU regulatory expectations."
    },
    {
      icon: GlobeNodeIcon,
      title: "Pan-European Reach",
      description: "We serve professionals and organisations across all EU member states with localised compliance guidance."
    },
    {
      icon: DataFlowIcon,
      title: "Practical Application",
      description: "Theory means nothing without practice. Our programmes emphasise real-world implementation from day one."
    },
    {
      icon: NeuralBrainIcon,
      title: "Continuous Evolution",
      description: "As AI regulation evolves, so do our programmes. Charterholders receive lifetime access to updated content."
    }
  ];

  const stats = [
    { value: "27+", label: "EU Member States Served" },
    { value: "500+", label: "Certified Professionals" },
    { value: "50+", label: "Expert Contributors" },
    { value: "100%", label: "EU AI Act Aligned" }
  ];

  return (
    <>
      <Helmet>
        <title>About COAD | European AI Governance Alliance</title>
        <meta name="description" content="COAD is an alliance of coders, finance experts, certified education professionals, and workforce development leaders committed to AI governance excellence across Europe." />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-navy text-primary-foreground py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal rounded-full blur-3xl" />
          </div>
          
          <div className="container-coad relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8">
                <GlobeNodeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">European AI Governance Alliance</span>
              </div>
              
              <h1 className="heading-1 mb-6 animate-fade-in-up">
                Building the Future of <span className="gradient-text">AI Governance</span> in Europe
              </h1>
              
              <p className="body-large text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up stagger-2">
                COAD represents an unprecedented alliance of technologists, financial experts, academic leaders, 
                and workforce development specialists united by a single mission: preparing Europe's workforce 
                for the AI-governed future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/certifications">Explore Certifications</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/auth">Join the Alliance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                  <h2 className="heading-2 mb-6">Our Mission</h2>
                  <p className="body-large text-muted-foreground mb-6">
                    The EU AI Act represents the most comprehensive AI regulatory framework in history. 
                    Organisations across Europe face an urgent need for qualified professionals who understand 
                    both the technical and governance dimensions of AI compliance.
                  </p>
                  <p className="body text-muted-foreground">
                    COAD exists to bridge this gap—creating rigorous, practical certification programmes 
                    that equip professionals with the knowledge and credentials to lead AI governance 
                    initiatives within their organisations.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-2xl p-8 border border-border">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Alliance */}
        <section className="section-padding bg-muted/50">
          <div className="container-coad">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">The Alliance</h2>
              <p className="body-large text-muted-foreground">
                COAD brings together four essential disciplines, each contributing unique expertise 
                to our certification programmes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-4 mb-3">{pillar.title}</h3>
                  <p className="body-small text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-background">
          <div className="container-coad">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">Our Principles</h2>
              <p className="body-large text-muted-foreground">
                Every decision we make is guided by these core principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="flex gap-5 p-6 rounded-xl bg-card border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-teal flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="body-small text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* European Focus */}
        <section className="section-padding bg-navy text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="container-coad relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <GlobeNodeIcon className="w-16 h-16 mx-auto mb-8 text-primary" />
              <h2 className="heading-2 mb-6">European by Design</h2>
              <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
                While AI governance is a global challenge, the EU leads the world in establishing 
                clear regulatory frameworks. Our programmes are built specifically around EU requirements, 
                ensuring our Charterholders are prepared to operate confidently within this landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 rounded-full bg-primary/20 text-primary font-medium">
                  EU AI Act Compliant
                </div>
                <div className="px-6 py-3 rounded-full bg-teal/20 text-teal font-medium">
                  ESG 2015 Aligned
                </div>
                <div className="px-6 py-3 rounded-full bg-primary/20 text-primary font-medium">
                  GDPR Integrated
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-teal/5">
          <div className="container-coad">
            <div className="max-w-3xl mx-auto text-center">
              <CredentialIcon className="w-16 h-16 mx-auto mb-8 text-primary" />
              <h2 className="heading-2 mb-6">Ready to Join?</h2>
              <p className="body-large text-muted-foreground mb-10">
                Whether you're an individual professional seeking to advance your career or an organisation 
                looking to build AI governance capability, COAD has a pathway for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/certifications">View Certifications</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/auth">Create Account</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;