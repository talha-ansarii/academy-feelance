export function HeroSection() {
  return (
    <section className="relative min-h-[800px] flex items-center px-6 py-20 lg:py-0">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <span className="inline-block px-3 py-1 mb-6 text-[0.7rem] font-bold tracking-wider text-primary uppercase bg-primary-container rounded-DEFAULT">Premier NEET Coaching</span>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-tight text-on-background tracking-tight mb-8">
            Crack NEET with <span className="text-primary">Personal Mentorship</span> — Not Crowded Classrooms
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Experience the professional standard of medical entrance preparation. We prioritize depth over volume, ensuring every student masters the curriculum with direct faculty guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-DEFAULT font-bold shadow-md hover:bg-blue-700 transition-all">
              Book Free Demo Class
            </button>
            <button className="bg-white text-on-surface px-8 py-4 rounded-DEFAULT font-bold border border-outline hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-xl" data-icon="chat">chat</span>
              Talk on WhatsApp
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="clean-card rounded-xl p-6 shadow-xl bg-white relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-slate-100">
              <img alt="Manohar Shah Sir" className="w-full h-full object-cover" data-alt="dignified elder male teacher in a white lab coat sitting in a library setting with warm academic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUxMoDfPMwU7aFKkUWEGyvPE_L_pU-pH3DvRHgC5MLGr2oTK5a860oDlT0iWOyu7Bs0d35erc0TunlZxze8UgAJ0iOQV6vN2EZcK0I9nDe05UyPjjBp_RPaZNLIxP_tRwQFUYcZkQFSBfdWxHhlN3omX3qylmB2IhdaFxTsr4yB1IA5yLIUcmc0Z5xgNQNgItgVuT59mkHff-FBmqQH3Nl3e6DjJcTzphxSqHQMIL6ZpWPUFTU-7me32OYxNzbfhk-YxQ_NkzJoxMp"/>
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-background mb-1">Manohar Shah Sir</h3>
            <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4">Master Faculty - Biology</p>
            <div className="space-y-3 border-t border-outline-variant pt-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="award_star">award_star</span>
                <span className="text-on-surface-variant text-sm font-medium">Mentored 500+ AIR under 1000</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" data-icon="history_edu">history_edu</span>
                <span className="text-on-surface-variant text-sm font-medium">Ex-HOD of Premier Medical Institute</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
