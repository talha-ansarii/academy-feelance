export function FacultyGrid() {
  const facultyMembers = [
    {
      name: "Dr. D.K. Bharti",
      role: "Physics Expert",
      experience: "20+ Yrs Exp",
      achievements: "Guiding students to excel in NEET Physics through conceptual clarity.",
      image: "/sir/dkbharti.png",
      alt: "Dr. D.K. Bharti"
    },
    {
      name: "Mr. Himanshu",
      role: "Chemistry Expert",
      experience: "15+ Yrs Exp",
      achievements: "Making complex Chemistry equations easy and scoring for NEET.",
      image: "/sir/himanshu.png",
      alt: "Mr. Himanshu"
    },
    {
      name: "Mr. Sanjay Kumar",
      role: "Botany Expert",
      experience: "18+ Yrs Exp",
      achievements: "Specialist in building a strong foundation in Plant Sciences.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD909o4WXhi6v8j4v1gpEhRgzsoynY2wkaj_GFtJbox-6N4RcIJCbrXZJEOftqaDM0a3_X1QVY3b4G8DjhbwzddCHHV24sGbJwUySLo_Qw7-6PR0ZRZCToEYxU5We8p-w7ZpCGplSCfuNmfjQQa3YJFcHYz2dVV3dEP6Xw45MauQmiMw3SxuUq2tq9IK6xOt6Mf9-n64RahA95vwuGsN4DB3t-LT2uYotSgYmB22KpJXNOmL-iQfc7C1k5z-bs86U_DGwoDKHbpsK-e",
      alt: "Mr. Sanjay Kumar"
    },
    {
      name: "Dr. Manohar Sah",
      role: "Zoology Expert",
      experience: "30+ Yrs Exp",
      achievements: "Renowned mentor for Zoology with thousands of successful medical aspirants.",
      image: "/sir/manohar.png",
      alt: "Dr. Manohar Sah"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 mb-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">The Curators of Success</h2>
          <p className="text-on-surface-variant font-body leading-relaxed">
            Meet the architects of our curriculum. Each member brings decades of expertise and a proven track record of placing students in India's top medical colleges.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all">
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant/50 hover:shadow-md transition-all duration-300">
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-6">
              <img className="w-full h-full object-cover" alt={faculty.alt} src={faculty.image} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">{faculty.name}</h3>
                  <p className="text-primary font-label text-[0.7rem] font-bold uppercase tracking-widest">{faculty.role}</p>
                </div>
                <div className="bg-primary-container px-2 py-1 rounded text-on-primary-container text-[0.65rem] font-bold">
                  {faculty.experience}
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  <span className="font-bold text-on-surface block mb-1">Key Achievements:</span>
                  {faculty.achievements}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
