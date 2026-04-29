"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function ResultsGallery() {
  const testimonials = [
    {
      quote:
        "I am Dr Vandana Sharma-a MBBS graduate from Lady Hardinge Medical College, Delhi, and I would like to share my experience with my zoology teacher Dr. Manohar Sah sir for NEET -UG -preparation . The way the concepts were explained was very simple and easy to understand, even for topics that usually feel confusing. Sir mainly focused on building clear basics, which really helped me solve multiple questions from any given topic. Doubts were always addressed patiently, and the teaching approach made learning interesting instead of stressful. Regular revisions and practical examples made it easier to remember concepts for a long time. In addition to helping us excel in academics, he mentored us throughout the course and motivated us to reach our goals and brought out the best in us. He is the GOAT of Zoology. I would definitely recommend him to other NEET UG aspirants.",
      name: "Dr Vandana Sharma",
      designation: "Lady Hardinge Medical College, Delhi",
      src: "/testimonials/Dr_Vandana_Sharma/dr_vandana.png",
    },
    {
      quote:
        "Respected sir, Thank you for your guidance. You truly inspired us to achieve our goals. I am fortunate enough to be your student. Your classes were truly engaging. Thank you sir.",
      name: "Dr. Monica Mehta",
      designation: "AIIMS Kalyani",
      src: "/testimonials/Dr_Monika/dr_monika.png"
    }
  ];

  return (
    <section className="py-16 layout-px md:py-24 bg-surface-variant overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-12">
          What disciplined preparation looks like
        </h2>
      </div>
      <div className="-mt-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
