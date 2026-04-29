export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video group">
            <img alt="Video Testimonial Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" data-alt="group of medical students in a collaborative learning session with anatomical models and tablets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp7nak78aJmWOcGNjWGW-rdRVPqVrNPh-UxHcSzXn7zA3pROvMVTEMzc0iMG1Qt1lu1R6PI9YWzoh-SlofbnIwNzyFcLZj_Yb4GmEfnYaG6VZ4KuDghTGpUB8517o1uLGj_vrxpI8Mo9mYQCwbyKLzgIY8xslsa8aP1pCLRnSL8H8GdIlqtKzEDSB3hmDJwx2zE-xFCc8pC8oXlBilF6Eb2zXujw2RX4G2g5_71V9raT84UcPA61rk14JV9LF16-y3x9Cw3gudhG5b"/>
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl" data-icon="play_arrow" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10">Mindset for the journey</h2>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                <p className="text-slate-300 italic mb-6">"Approach NEET not with fear, but as the first decisive step toward your dream of becoming a doctor."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm">01</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Long-term goal</p>
                    <p className="text-slate-500 text-[0.65rem] uppercase tracking-wider">Purpose over panic</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                <p className="text-slate-300 italic mb-6">"Low scores in mock tests are not a sign to quit. Every setback is a setup for a stronger comeback."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm">02</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Healthy resilience</p>
                    <p className="text-slate-500 text-[0.65rem] uppercase tracking-wider">Progress through feedback</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                <p className="text-slate-300 italic mb-6">"Success in NEET comes from consistent, focused hard work supported by rest, balance, and the right guidance."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm">03</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Balanced preparation</p>
                    <p className="text-slate-500 text-[0.65rem] uppercase tracking-wider">Discipline with support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
