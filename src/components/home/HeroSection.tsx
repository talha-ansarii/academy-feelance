import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[800px] items-center px-6 py-20 lg:py-0">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-3 py-1 mb-6 text-[0.7rem] font-bold tracking-wider text-primary uppercase bg-primary-container rounded-DEFAULT">Personal mentorship for NEET aspirants</span>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-tight text-on-background tracking-tight mb-8">
            Take your first decisive step toward the <span className="text-primary">white coat</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Destiny 4 NEET helps students prepare with calm discipline, conceptual clarity, and direct mentor support. Small batches, personal strategy, and focused feedback turn effort into steady progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#enquiry" className="bg-primary text-white px-8 py-4 rounded-DEFAULT font-bold shadow-md hover:bg-blue-700 transition-all text-center">
              Book Free Demo Class
            </Link>
            <Link href="/neet-course" className="bg-white text-on-surface px-8 py-4 rounded-DEFAULT font-bold border border-outline hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl" data-icon="chat">chat</span>
              Explore the NEET Course
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="clean-card rounded-xl p-6 shadow-xl bg-white relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-slate-100">
              <img alt="Manohar Shah Sir" className="w-full h-full object-cover" data-alt="dignified elder male teacher in a white lab coat sitting in a library setting with warm academic lighting" src="/sir/manohar.png"/>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-background mb-1">Guidance that feels personal</h3>
            <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4">Concept clarity. Mentor access. Real accountability.</p>
            <div className="space-y-3 border-t border-outline-variant pt-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="award_star">award_star</span>
                <span className="text-on-surface-variant text-sm font-medium">Only 4 students in a live batch for focused attention</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="history_edu">history_edu</span>
                <span className="text-on-surface-variant text-sm font-medium">Daily targets, mock-test review, and direct subject-guru guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
