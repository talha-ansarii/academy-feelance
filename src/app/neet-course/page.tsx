import Link from "next/link";

const preparationSteps = [
  {
    title: "Systematic planning",
    description:
      "Break the syllabus into daily targets and weekly priorities so the workload stays manageable and visible.",
  },
  {
    title: "Strategic testing",
    description:
      "Use mock tests to identify weak areas, improve speed and accuracy, and build exam confidence through review.",
  },
  {
    title: "Conceptual clarity",
    description:
      "Focus on understanding, especially in Physics and Chemistry, instead of depending on rote memorization alone.",
  },
  {
    title: "Resilient mindset",
    description:
      "Treat setbacks as feedback. Low scores do not end the journey; they show where the next improvement must happen.",
  },
];

const supportPoints = [
  "6-7 hours of quality sleep, hydration, and light physical activity support long-term retention.",
  "Emotional balance matters. Students are encouraged to stay connected with parents, mentors, and trusted friends.",
  "Social media and other distractions are managed deliberately so focus is protected over the long term.",
];

export default function NeetCoursePage() {
  return (
    <main className="pt-24">
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-block rounded-DEFAULT bg-primary-container px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-primary">
              Destiny 4 NEET course
            </span>
            <h1 className="mt-6 font-headline text-4xl font-extrabold tracking-tight text-on-background md:text-6xl">
              Structured preparation for students who want clarity, consistency, and personal guidance
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              This course is designed for NEET aspirants who want more than a large classroom and generic advice. It combines disciplined study planning, close mentor access, and thoughtful pressure management so students can prepare with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/#enquiry" className="rounded-DEFAULT bg-primary px-6 py-3 text-center font-bold text-white transition hover:bg-blue-700">
                Book a Demo
              </Link>
              <Link href="/about" className="rounded-DEFAULT border border-outline bg-white px-6 py-3 text-center font-bold text-on-surface transition hover:bg-surface-variant">
                Learn Our Philosophy
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-outline-variant bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Who this course is for</p>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-on-surface-variant">
              <li>Students in Classes 11 and 12 preparing seriously for NEET</li>
              <li>Dropped-year aspirants who want a tighter strategy and stronger accountability</li>
              <li>Students who understand better in small groups than in crowded batches</li>
              <li>Families looking for guidance that balances performance with emotional steadiness</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="font-headline text-3xl font-bold text-on-background">How we prepare students</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
              The journey to NEET is not merely a test of academic knowledge. It is a test of character, resilience, and disciplined effort. Our preparation model is designed to support all three.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {preparationSteps.map((step) => (
              <div key={step.title} className="rounded-xl border border-outline-variant bg-surface-variant p-6">
                <h3 className="text-xl font-bold text-on-background">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-background">Course format and batch model</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
              Destiny 4 NEET focuses on one-to-one strategy and Group-4 live classes. The goal is to keep every student visible, coachable, and supported throughout the preparation cycle.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-primary p-6 text-white">
              <h3 className="text-xl font-bold">Only 4 students per live batch</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-container">
                Small groups create space for questions, regular feedback, and direct interaction with subject gurus.
              </p>
            </div>
            <div className="rounded-xl border border-outline-variant bg-white p-6">
              <h3 className="text-xl font-bold text-on-background">Personalized smart strategy</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Students receive targeted guidance shaped around their current level, pace, and exam goals.
              </p>
            </div>
            <div className="rounded-xl border border-outline-variant bg-white p-6">
              <h3 className="text-xl font-bold text-on-background">Direct mentor interaction</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Close access to subject mentors improves creativity, confidence, and conceptual understanding.
              </p>
            </div>
            <div className="rounded-xl border border-outline-variant bg-white p-6">
              <h3 className="text-xl font-bold text-on-background">Focused review loops</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                Regular review of mock performance helps students move from guesswork to precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-variant px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-background">Student support and pressure management</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">
              A rested mind learns better. Strong preparation includes academic discipline, but it also includes sleep, emotional steadiness, and protection from distractions that slowly erode focus.
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant bg-white p-8">
            <ul className="space-y-4 text-sm leading-relaxed text-on-surface-variant">
              {supportPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-xl bg-tertiary px-8 py-12 text-center text-white md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-container">Outcome</p>
          <h2 className="mt-4 font-headline text-3xl font-bold">
            Prepare for NEET with confidence, not confusion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            The path is demanding, but the destination matters. With the right strategy and the right support, students can move toward their medical dream with clarity and purpose.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/#enquiry" className="rounded-DEFAULT bg-white px-6 py-3 font-bold text-on-background transition hover:bg-slate-100">
              Request a Demo Class
            </Link>
            <Link href="/faculty" className="rounded-DEFAULT border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10">
              Meet the Faculty
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
