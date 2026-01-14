'use client';

export default function SocialProofSection() {
  const stats = [
    { number: "10,000+", label: "Certified Professionals", icon: "🎓" },
    { number: "500+", label: "Corporate Clients", icon: "🏢" },
    { number: "95%", label: "Pass Rate", icon: "✅" },
    { number: "4.8/5", label: "Average Rating", icon: "⭐" },
  ];

  const badges = [
    { name: "EU AI Act Compliance", alt: "EU AI Act Compliant" },
    { name: "ESG 2015 Certified", alt: "ESG 2015 Compliant" },
    { name: "Blockchain Verified", alt: "Blockchain Verified Certificates" },
    { name: "ECTS Credits", alt: "ECTS Compatible" },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
          Join professionals worldwide advancing their AI competency
        </h2>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Badges Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 text-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="text-sm font-medium text-gray-700">{badge.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
