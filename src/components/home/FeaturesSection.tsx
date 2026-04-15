import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  const features = [
    {
      title: "20+ Years Experience",
      description: "Time-tested pedagogy refined over two decades of evolving NEET patterns.",
      icon: "history",
    },
    {
      title: "Elite Batches",
      description: "Max 4 students per session. Guaranteed personal attention from Manohar Sir.",
      icon: "groups",
    },
    {
      title: "24/7 Doubt Desk",
      description: "Never get stuck. Direct digital and call support for immediate concept clearing.",
      icon: "support_agent",
    },
    {
      title: "100+ Mock Tests",
      description: "Adaptive testing environment simulating the exact high-pressure NEET arena.",
      icon: "quiz",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white perspective-1000">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-6">Designed for Depth</h2>
          <p className="text-on-surface-variant max-w-2xl text-lg lg:mx-0 mx-auto">We cultivation scholars through targeted intervention and professional boutique classroom sizes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
