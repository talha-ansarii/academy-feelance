"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function ResultsGallery() {
  const testimonials = [
    {
      quote:
        "Secured AIR 42 with intensive mentorship. The clarity of instruction and personalized attention made the definitive difference in my NEET preparation journey.",
      name: "Arjun Mehta",
      designation: "NEET 2023 • AIR 42",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGysv9YJDmKAADHlkbVzlrI7416mbeX0yeTw6B-hlWjNgSo1kQIWs7IIjpMmyfio9I-1wOgkxQGO7h1lhhZJ8HQV0JFAqF4aZjoDXDR7N6nKfXhBKABmfXi0Y67UxZX86bzxfwpLj8ngnr-I1bRRH-olTAAVkdTtAp_Sn5yqOBPFqRiAmftfvzWXI_yInx2UttO5_AJmZG6rcvC9v0hCjysLuPiDiOH9B_dsW3nOFnvTTSpjl-dx7j4bLHxul8_czZqRCxQgDxvjL9",
    },
    {
      quote:
        "The small batch size meant total transparency. Every doubt was resolved immediately, building immense confidence to tackle the hardest NEET patterns.",
      name: "Sneha Reddy",
      designation: "NEET 2022 • AIR 18",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHpOKANu6D1oezfE4zl4StNBzY_MGPy5mslQa51l8rUH3XN3XBKxm25cMI8u3GM8HdHZa5OBtrnyJCVAAWCPE1G8JtbE2coWp9s02kYvTY5Scx1HYgzE8OcN8VJMsh9C3-R4hmzQh7fF35I2vITCmpKvZ-K48CeRFwz199yP60CUvAtcyHEqEewFrVlKhUSLmXrD3TCvMMLxdIDOH7T4EzEHd9-y1V88SUSKavyYkO6TyDBw_szUofCCkOain4PG_mvjMGbLY30pOG"
    },
    {
      quote:
        "Manohar Sir changed how I approach Biology. A decade of dominance is not just a tagline, it's a measurable reality for every student here.",
      name: "Ishaan Gupta",
      designation: "NEET 2021 • AIR 89",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3lyHZaA8S06Zzwd6XdZYYIc01921h0w4pac2sqomDaLZJLVpm6_7zycFy5aadgC0xpMMn7ikIC2YPD8BCBtrX2YLO_M8gIU71nG2gAK63KVM2PSiLstshWK5HHPSIOvuEun1pGAdZp3vm3j0q2sCggPKRT4OZ0Th_6EMYeRSOYcsj29otuPOzaM1f9MnwfEn-svV0YQS4TS3lUtLuA0pvdWuZlKJw-RsAA9T5In0Oh_hq581zckGuoKLiVx_ToDqnK2Tqg6U6SETo"
    },
    {
      quote:
        "The rigorous mock test environment perfectly simulated the real NEET pressure. By the time I sat for the exam, it felt like just another practice test.",
      name: "Priya Sharma",
      designation: "NEET 2020 • AIR 07",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvV12RzXWWjktZknh-ix1DBq4ofa74rL6WJp8Mg8R7rZW-sbZXtDAtFUCntHClpHcZPeaCLtRKT_9_mlCB4HUi8LlyASY_FScFacZpteT0eXt7NdY8QSrhbwJcNw0lZo3LZgPGS9v1nV9NifczNZkzwDt1v1Q9m3nziLYBr2WUeHZPIRbjTppttq7Tpx_O6x2FB9tbfthwXE0nM3RGGqnQlyX0D7Th8ejFZDEm0m9JibCVctBz9ztbBZzV83i23LMuJbmhAeOxnF2D"
    }
  ];

  return (
    <section className="py-16 layout-px md:py-24 bg-surface-variant overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-background mb-4">
          A Decade of Dominance
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Refining potential into professional performance, year after year.
        </p>
      </div>
      <div className="-mt-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
