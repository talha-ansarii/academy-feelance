import type { Metadata } from "next";
import { db } from "@/server/db";

export const metadata: Metadata = {
  title: "The Sovereign Scholar | Student Resource Page",
  description: "Download free previous year papers, mock tests, and study notes for NEET preparation.",
};

export default async function ResourcesPage() {
  // Fetch all published resources
  const allResources = await db.resource.findMany({
    where: { status: "Published" },
    orderBy: { createdAt: "desc" },
  });

  // Option C: Full Dynamic Mapping
  // Categorize the resources
  const pyqResources = allResources.filter(r => r.category === "Previous Year Paper");
  const mockTests = allResources.filter(r => r.category === "Mock Test");
  const studyNotes = allResources.filter(r => r.category === "Study Notes");

  // For PYQs, group by year (or just sort by year descending)
  const pyqSorted = [...pyqResources].sort((a, b) => {
    const yearA = a.year || 0;
    const yearB = b.year || 0;
    return yearB - yearA; // Descending
  });

  // For Study Notes, separate by Class and Subject
  // We'll default to Class 11 initially if doing client side, 
  // but for server component we can just show both or group them.
  // The provided HTML uses a custom tab for Class 11/12. We'll render all grouped by subject,
  // since the HTML had Physics, Bio, Chem columns.
  const getSubjectNotes = (subject: string) => studyNotes.filter(n => n.subject === subject);
  const physicsNotes = getSubjectNotes("Physics");
  const bioNotes = getSubjectNotes("Biology");
  const chemNotes = getSubjectNotes("Chemistry");

  return (
    <main className="pt-20 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-20 text-center md:text-left border-b border-outline pb-16">
        <div className="inline-block px-3 py-1 mb-6 bg-primary-container text-on-primary-container rounded text-[10px] font-bold tracking-wider uppercase">
          Academic Repository
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-on-surface mb-6 leading-tight tracking-tight">
          The Scholarly <br/><span className="text-primary">Archive.</span>
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed mb-10">
          Access a curated collection of rigorous academic material designed for the aspiring medical professional. From decadal archives to simulated examinations.
        </p>
      </section>

      {/* Section 1: NEET Previous Year Papers */}
      <section className="mb-24" id="previous-papers">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-2">NEET Previous Year Papers</h2>
            <p className="text-on-surface-variant text-sm">Download official past papers and answer keys</p>
          </div>
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary-container text-4xl">history_edu</span>
          </div>
        </div>
        
        {pyqSorted.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pyqSorted.map((paper, idx) => (
              <a 
                key={paper.id}
                href={paper.blobUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface p-6 rounded border border-outline hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer block"
              >
                <div className="text-[10px] font-bold text-on-surface-variant opacity-60 mb-2 tracking-widest uppercase truncate">
                  {paper.subject !== "All" ? paper.subject : "PREMIUM PDF"}
                </div>
                <div className="font-heading text-xl font-bold mb-4 truncate" title={paper.title}>
                  {paper.year || paper.title}
                </div>
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-lg text-primary">download</span>
                  {idx === 0 && (
                    <span className="text-[9px] font-bold text-primary tracking-widest uppercase">Latest</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center border border-dashed border-outline rounded text-on-surface-variant text-sm">
            No previous year papers uploaded yet.
          </div>
        )}
      </section>

      {/* Section 2: Free Mock Tests */}
      <section className="mb-24">
        <div className="relative rounded overflow-hidden mb-12 py-12 px-10 text-white bg-on-secondary-container">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#DEEBFF 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-bold mb-4">Free Mock Assessments</h2>
              <p className="text-primary-container text-base opacity-90">Simulate the pressure of the examination hall. Our tests are calibrated to the latest NTA difficulty standards.</p>
            </div>
            <button className="bg-white text-on-secondary-container px-6 py-3 rounded font-bold text-sm hover:bg-primary-container transition-all">Start Full Length Test</button>
          </div>
        </div>
        
        {mockTests.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {mockTests.map((test) => (
              <div key={test.id} className="bg-surface p-8 rounded border border-outline hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-10 h-10 bg-primary-container text-primary rounded flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-xl">
                    {test.subject === 'Physics' ? 'bolt' : test.subject === 'Biology' ? 'biotech' : test.subject === 'Chemistry' ? 'science' : 'timer'}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-on-surface mb-2">{test.title}</h3>
                <p className="text-on-surface-variant mb-6 text-sm">
                  {test.classLevel} • {test.subject}
                </p>
                <div className="mt-auto">
                  <a 
                    href={test.blobUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-bold gap-1 text-xs uppercase tracking-wider group"
                  >
                    Download Test PDF <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center border border-dashed border-outline rounded text-on-surface-variant text-sm">
            No mock tests uploaded yet.
          </div>
        )}
      </section>

      {/* Section 3: Study Notes */}
      <section className="mb-24">
        <div className="mb-10">
          <h2 className="font-heading text-2xl font-bold text-on-surface mb-2">Curated Study Notes</h2>
          <p className="text-on-surface-variant text-sm">Class 11 & 12 structured wisdom</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Physics Column */}
          <div className="lg:col-span-4 bg-surface p-8 rounded border border-outline shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-xl">bolt</span>
              <h4 className="font-heading text-lg font-bold text-on-surface">Physics</h4>
            </div>
            {physicsNotes.length > 0 ? (
              <div className="space-y-3">
                {physicsNotes.map(note => (
                  <a key={note.id} href={note.blobUrl} target="_blank" rel="noopener noreferrer" className="block p-3 border border-outline rounded hover:border-primary transition-colors group">
                    <span className="text-sm font-semibold text-on-surface group-hover:text-primary">{note.title}</span>
                    <div className="text-xs text-on-surface-variant mt-1">{note.classLevel}</div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-on-surface-variant">No notes available.</p>
            )}
          </div>
          
          {/* Biology Column */}
          <div className="lg:col-span-5 bg-surface p-8 rounded border border-outline shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-xl">biotech</span>
              <h4 className="font-heading text-lg font-bold text-on-surface">Biology</h4>
            </div>
            {bioNotes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bioNotes.map(note => (
                  <a key={note.id} href={note.blobUrl} target="_blank" rel="noopener noreferrer" className="block p-3 border border-outline rounded hover:border-primary transition-colors group">
                    <span className="text-sm font-semibold text-on-surface group-hover:text-primary line-clamp-1">{note.title}</span>
                    <div className="text-xs text-on-surface-variant mt-1">{note.classLevel}</div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-on-surface-variant">No notes available.</p>
            )}
          </div>
          
          {/* Chemistry Column */}
          <div className="lg:col-span-3 bg-surface p-8 rounded border border-outline shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-xl">syringe</span>
              <h4 className="font-heading text-lg font-bold text-on-surface">Chemistry</h4>
            </div>
            {chemNotes.length > 0 ? (
              <div className="space-y-3">
                {chemNotes.map(note => (
                  <a key={note.id} href={note.blobUrl} target="_blank" rel="noopener noreferrer" className="block p-3 border border-outline rounded hover:border-primary transition-colors group">
                    <span className="text-sm font-semibold text-on-surface group-hover:text-primary">{note.title}</span>
                    <div className="text-xs text-on-surface-variant mt-1">{note.classLevel}</div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-xs text-on-surface-variant">No notes available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-container/30 border border-primary/10 rounded p-12 text-center">
        <h3 className="font-heading text-2xl font-bold text-on-surface mb-4">Never Miss a Critical Update</h3>
        <p className="text-on-surface-variant mb-8 max-w-md mx-auto text-sm">Join 20,000+ aspirants receiving weekly high-yield notes and exam notifications directly in their inbox.</p>
        <form className="flex flex-col md:flex-row gap-2 max-w-lg mx-auto">
          <input className="flex-grow rounded border border-outline px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 bg-white" placeholder="Enter your academic email" type="email" />
          <button type="button" className="bg-primary text-white px-6 py-2 rounded font-bold text-sm hover:bg-on-primary-container transition-all">Subscribe</button>
        </form>
      </section>

    </main>
  );
}
