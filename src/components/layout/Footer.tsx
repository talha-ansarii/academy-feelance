import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-tertiary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="font-bold text-xl text-white mb-6 tracking-tight">The Sovereign Scholar</div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Excellence in academic preparation through professional mentorship, exclusivity, and uncompromising standards.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[0.65rem] uppercase tracking-widest text-slate-500 mb-3">Resources</p>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">FAQ</Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Alumni Network</Link>
        </div>
        <div>
          <p className="font-bold text-[0.65rem] uppercase tracking-widest text-slate-500 mb-6">Contact</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            102 Elite Avenue, Knowledge Park,<br />Mumbai, Maharashtra 400001
          </p>
          <p className="text-white font-bold text-sm">+91 98765 43210</p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-slate-600 text-[0.7rem]">© 2024 The Sovereign Scholar. Professional NEET Preparation.</p>
      </div>
    </footer>
  );
}
