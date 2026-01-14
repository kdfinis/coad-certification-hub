'use client';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "ESG 2015 Compliant",
      description: "All programs are ESG 2015 compliant, emphasizing environmental sustainability (energy-efficient AI practices), social responsibility (ethical oversight), and governance standards (transparent testing rubrics).",
      bullets: [
        "Environmental: Energy-efficient AI practices",
        "Social: Ethical oversight and inclusion",
        "Governance: Transparent testing and assessment",
      ],
      visual: "🌱",
      align: "left",
    },
    {
      title: "Blockchain-Verified Certificates",
      description: "All certificates are blockchain-verified for authenticity, ensuring your credentials are tamper-proof and permanently verifiable. Share your achievements on LinkedIn and professional networks with confidence.",
      bullets: [],
      visual: "🔗",
      align: "right",
    },
    {
      title: "ECTS Compatible",
      description: "All certifications are convertible to ECTS credits (30 hours per ECTS) for Bologna Process mobility. Use your credentials for academic recognition and career advancement across Europe.",
      bullets: [],
      visual: "🎓",
      align: "left",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
              benefit.align === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            <div className={`${benefit.align === 'right' ? 'md:order-2' : ''}`}>
              <div className="bg-gradient-to-br from-primary-teal/10 to-primary-navy/10 rounded-2xl p-12 aspect-square flex items-center justify-center">
                <div className="text-8xl">{benefit.visual}</div>
              </div>
            </div>

            {/* Content Column */}
            <div className={`${benefit.align === 'right' ? 'md:order-1' : ''}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {benefit.description}
              </p>
              {benefit.bullets.length > 0 && (
                <ul className="space-y-3">
                  {benefit.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
