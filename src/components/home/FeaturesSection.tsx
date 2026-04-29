import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  const features = [
    {
      title: "Systematic Planning",
      description: "Break the vast syllabus into manageable daily targets so progress stays visible and consistent.",
      icon: "calendar_month",
    },
    {
      title: "Small Batch Mentorship",
      description: "Group-4 live classes and one-to-one guidance create space for real questions, real feedback, and real accountability.",
      icon: "groups",
    },
    {
      title: "Strategic Testing",
      description: "Mock tests are used to identify weak areas, improve speed and accuracy, and build confidence before the real exam.",
      icon: "quiz",
    },
    {
      title: "Wellness and Pressure Support",
      description: "Good preparation includes sleep, hydration, emotional balance, and healthy distance from distractions.",
      icon: "favorite",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white perspective-1000">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-6">Built for serious NEET preparation</h2>
          <p className="text-on-surface-variant max-w-2xl text-lg lg:mx-0 mx-auto">The goal is not to overwhelm students. It is to help them study with clarity, stay steady under pressure, and move toward medicine with purpose.</p>
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
