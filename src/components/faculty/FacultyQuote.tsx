export function FacultyQuote() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-40">
      <div className="relative rounded-2xl overflow-hidden bg-primary text-white p-12 md:p-20 flex flex-col md:flex-row gap-16 items-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="relative w-64 md:w-80 flex-none">
          <div className="aspect-square rounded-2xl border-4 border-primary-container/30 overflow-hidden shadow-2xl rotate-3">
            <img
              className="w-full h-full object-cover -rotate-3 scale-110"
              alt="Distinguished gentleman in a library study, looking thoughtfully towards the camera, representing academic leadership"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZwS--EOOjZoWrV5jrpezj7v85pkLe2y6aObV83ahC0PoEOjfrO4hZrUR2oCaZF60fgfxNs_DpzSgTg9K2Gu7QgONKLiNIYaTNX6UOOsHlwk1ZocY5e96G3dexy_XmjcC3p_4rW5pEbDze4zRjv-qWcdudQbeLyt0AU2s9ijehpD1Bur7LkVnowu2R3H01QcNebEhbBOlcPLvlXBVnXxe_UcLD5Ja5KU1zlYQX8ZtbgQ6RqSlMII4N-brfu4Vzgb5CdTHiaqCJzO4"
            />
          </div>
        </div>
        <div className="relative flex-1">
          <span className="material-symbols-outlined text-5xl text-primary-container/40 mb-6 font-[FILL_1]">
            format_quote
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Elite results are never mass-produced. They are curated through 1:1 precision.
          </h2>
          <p className="font-body text-primary-container text-lg leading-relaxed mb-10 italic">
            "The modern academic factory fails the brilliant mind by demanding conformity. At The Sovereign Scholar, we flip the script. Every student is paired with a master mentor for personalized strategy sessions. We don't just teach the syllabus; we architect a mindset. Excellence is a dialogue, not a lecture."
          </p>
          <div>
            <p className="text-xl font-bold mb-1">Amitav Kashyap</p>
            <p className="text-[0.7rem] font-bold tracking-widest uppercase text-primary-container/80">
              Founding Director &amp; Chief Curator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
