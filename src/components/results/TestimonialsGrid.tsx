"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, X, Quote } from 'lucide-react';
import { Pagination } from './Pagination';

interface Testimonial {
  id: string;
  name: string;
  college: string;
  score: string;
  rank: string;
  batch: string;
  image: string;
  quote: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: "v1",
    name: "Dr Vandana Sharma",
    college: "Lady Hardinge Medical College",
    score: "MBBS Graduate",
    rank: "NEET UG",
    batch: "Zoology",
    image: "/testimonials/Dr_Vandana_Sharma/dr_vandana.jpeg",
    quote: "I am Dr Vandana Sharma-a MBBS graduate from Lady Hardinge Medical College, Delhi, and I would like to share my experience with my zoology teacher Dr. Manohar Sah sir for NEET -UG -preparation . The way the concepts were explained was very simple and easy to understand, even for topics that usually feel confusing. Sir mainly focused on building clear basics, which really helped me solve multiple questions from any given topic. Doubts were always addressed patiently, and the teaching approach made learning interesting instead of stressful. Regular revisions and practical examples made it easier to remember concepts for a long time. In addition to helping us excel in academics, he mentored us throughout the course and motivated us to reach our goals and brought out the best in us. He is the GOAT of Zoology. I would definitely recommend him to other NEET UG aspirants."
  },
  {
    id: "m1",
    name: "Dr. Monica Mehta",
    college: "AIIMS Kalyani",
    score: "Top Ranker",
    rank: "NEET UG",
    batch: "Target Batch",
    image: "/testimonials/Dr_Monika/dr_monika.png",
    quote: "Respected sir, Thank you for your guidance. You truly inspired us to achieve our goals. I am fortunate enough to be your student. Your classes were truly engaging. Thank you sir."
  },
  {
    id: "1",
    name: "Ritu Gupta",
    college: "AIIMS Delhi",
    score: "715 / 720",
    rank: "AIR 12",
    batch: "Alpha + Delta (Sigma)",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp7nak78aJmWOcGNjWGW-rdRVPqVrNPh-UxHcSzXn7zA3pROvMVTEMzc0iMG1Qt1lu1R6PI9YWzoh-SlofbnIwNzyFcLZj_Yb4GmEfnYaG6VZ4KuDghTGpUB8517o1uLGj_vrxpI8Mo9mYQCwbyKLzgIY8xslsa8aP1pCLRnSL8H8GdIlqtKzEDSB3hmDJwx2zE-xFCc8pC8oXlBilF6Eb2zXujw2RX4G2g5_71V9raT84UcPA61rk14JV9LF16-y3x9Cw3gudhG5b",
    quote: "Secured my dream college with intensive mentorship. The clarity of instruction and personalized attention made the definitive difference in my NEET preparation journey. The mock tests were incredibly relevant."
  },
  {
    id: "2",
    name: "Kartik Agarwal",
    college: "MAMC Delhi",
    score: "705 / 720",
    rank: "AIR 45",
    batch: "Alpha",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGysv9YJDmKAADHlkbVzlrI7416mbeX0yeTw6B-hlWjNgSo1kQIWs7IIjpMmyfio9I-1wOgkxQGO7h1lhhZJ8HQV0JFAqF4aZjoDXDR7N6nKfXhBKABmfXi0Y67UxZX86bzxfwpLj8ngnr-I1bRRH-olTAAVkdTtAp_Sn5yqOBPFqRiAmftfvzWXI_yInx2UttO5_AJmZG6rcvC9v0hCjysLuPiDiOH9B_dsW3nOFnvTTSpjl-dx7j4bLHxul8_czZqRCxQgDxvjL9",
    quote: "The small batch size meant total transparency. Every doubt was resolved immediately, building immense confidence to tackle the hardest NEET patterns. Manohar Sir's notes are pure gold."
  },
  {
    id: "3",
    name: "Shivam Kumar",
    college: "AFMC Pune",
    score: "695 / 720",
    rank: "AIR 120",
    batch: "Alpha",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHpOKANu6D1oezfE4zl4StNBzY_MGPy5mslQa51l8rUH3XN3XBKxm25cMI8u3GM8HdHZa5OBtrnyJCVAAWCPE1G8JtbE2coWp9s02kYvTY5Scx1HYgzE8OcN8VJMsh9C3-R4hmzQh7fF35I2vITCmpKvZ-K48CeRFwz199yP60CUvAtcyHEqEewFrVlKhUSLmXrD3TCvMMLxdIDOH7T4EzEHd9-y1V88SUSKavyYkO6TyDBw_szUofCCkOain4PG_mvjMGbLY30pOG",
    quote: "Manohar Sir changed how I approach Biology. A decade of dominance is not just a tagline, it's a measurable reality. From scoring 320 in Bio to a perfect 360, the journey was incredible."
  },
  {
    id: "4",
    name: "Ankita",
    college: "KGMU Lucknow",
    score: "690 / 720",
    rank: "AIR 180",
    batch: "Delta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3lyHZaA8S06Zzwd6XdZYYIc01921h0w4pac2sqomDaLZJLVpm6_7zycFy5aadgC0xpMMn7ikIC2YPD8BCBtrX2YLO_M8gIU71nG2gAK63KVM2PSiLstshWK5HHPSIOvuEun1pGAdZp3vm3j0q2sCggPKRT4OZ0Th_6EMYeRSOYcsj29otuPOzaM1f9MnwfEn-svV0YQS4TS3lUtLuA0pvdWuZlKJw-RsAA9T5In0Oh_hq581zckGuoKLiVx_ToDqnK2Tqg6U6SETo",
    quote: "The rigorous mock test environment perfectly simulated the real NEET pressure. By the time I sat for the exam, it felt like just another practice test."
  },
  {
    id: "5",
    name: "Naman Omar",
    college: "JIPMER",
    score: "700 / 720",
    rank: "AIR 85",
    batch: "Delta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvV12RzXWWjktZknh-ix1DBq4ofa74rL6WJp8Mg8R7rZW-sbZXtDAtFUCntHClpHcZPeaCLtRKT_9_mlCB4HUi8LlyASY_FScFacZpteT0eXt7NdY8QSrhbwJcNw0lZo3LZgPGS9v1nV9NifczNZkzwDt1v1Q9m3nziLYBr2WUeHZPIRbjTppttq7Tpx_O6x2FB9tbfthwXE0nM3RGGqnQlyX0D7Th8ejFZDEm0m9JibCVctBz9ztbBZzV83i23LMuJbmhAeOxnF2D",
    quote: "What stood out for me was the individualized strategy. They didn't just teach us; they showed us how to attempt the paper strategically to maximize scores."
  },
  {
    id: "6",
    name: "Sakshi Goyal",
    college: "VMMC Delhi",
    score: "685 / 720",
    rank: "AIR 250",
    batch: "Alpha",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp7nak78aJmWOcGNjWGW-rdRVPqVrNPh-UxHcSzXn7zA3pROvMVTEMzc0iMG1Qt1lu1R6PI9YWzoh-SlofbnIwNzyFcLZj_Yb4GmEfnYaG6VZ4KuDghTGpUB8517o1uLGj_vrxpI8Mo9mYQCwbyKLzgIY8xslsa8aP1pCLRnSL8H8GdIlqtKzEDSB3hmDJwx2zE-xFCc8pC8oXlBilF6Eb2zXujw2RX4G2g5_71V9raT84UcPA61rk14JV9LF16-y3x9Cw3gudhG5b",
    quote: "Biology was my weakest subject, but the continuous revision cycles and targeted doubt sessions completely transformed my performance."
  },
  {
    id: "7",
    name: "Aditya Verma",
    college: "AIIMS Jodhpur",
    score: "692 / 720",
    rank: "AIR 155",
    batch: "Sigma",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGysv9YJDmKAADHlkbVzlrI7416mbeX0yeTw6B-hlWjNgSo1kQIWs7IIjpMmyfio9I-1wOgkxQGO7h1lhhZJ8HQV0JFAqF4aZjoDXDR7N6nKfXhBKABmfXi0Y67UxZX86bzxfwpLj8ngnr-I1bRRH-olTAAVkdTtAp_Sn5yqOBPFqRiAmftfvzWXI_yInx2UttO5_AJmZG6rcvC9v0hCjysLuPiDiOH9B_dsW3nOFnvTTSpjl-dx7j4bLHxul8_czZqRCxQgDxvjL9",
    quote: "The test series is unmatched. The questions are exactly at the NEET level, helping me gauge my true standing before the final exam."
  },
  {
    id: "8",
    name: "Neha Singh",
    college: "SMS Jaipur",
    score: "680 / 720",
    rank: "AIR 310",
    batch: "Alpha",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHpOKANu6D1oezfE4zl4StNBzY_MGPy5mslQa51l8rUH3XN3XBKxm25cMI8u3GM8HdHZa5OBtrnyJCVAAWCPE1G8JtbE2coWp9s02kYvTY5Scx1HYgzE8OcN8VJMsh9C3-R4hmzQh7fF35I2vITCmpKvZ-K48CeRFwz199yP60CUvAtcyHEqEewFrVlKhUSLmXrD3TCvMMLxdIDOH7T4EzEHd9-y1V88SUSKavyYkO6TyDBw_szUofCCkOain4PG_mvjMGbLY30pOG",
    quote: "Consistent support and motivation from the faculty kept me going during the tough phases of preparation."
  },
  // Add a few more just to show pagination works
  {
    id: "9",
    name: "Rohan Patel",
    college: "BJMC Pune",
    score: "675 / 720",
    rank: "AIR 420",
    batch: "Delta",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvV12RzXWWjktZknh-ix1DBq4ofa74rL6WJp8Mg8R7rZW-sbZXtDAtFUCntHClpHcZPeaCLtRKT_9_mlCB4HUi8LlyASY_FScFacZpteT0eXt7NdY8QSrhbwJcNw0lZo3LZgPGS9v1nV9NifczNZkzwDt1v1Q9m3nziLYBr2WUeHZPIRbjTppttq7Tpx_O6x2FB9tbfthwXE0nM3RGGqnQlyX0D7Th8ejFZDEm0m9JibCVctBz9ztbBZzV83i23LMuJbmhAeOxnF2D",
    quote: "The environment here breeds excellence. When you study with the best, you naturally push your boundaries."
  },
  {
    id: "10",
    name: "Megha Jain",
    college: "GSVM Kanpur",
    score: "670 / 720",
    rank: "AIR 510",
    batch: "Alpha",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3lyHZaA8S06Zzwd6XdZYYIc01921h0w4pac2sqomDaLZJLVpm6_7zycFy5aadgC0xpMMn7ikIC2YPD8BCBtrX2YLO_M8gIU71nG2gAK63KVM2PSiLstshWK5HHPSIOvuEun1pGAdZp3vm3j0q2sCggPKRT4OZ0Th_6EMYeRSOYcsj29otuPOzaM1f9MnwfEn-svV0YQS4TS3lUtLuA0pvdWuZlKJw-RsAA9T5In0Oh_hq581zckGuoKLiVx_ToDqnK2Tqg6U6SETo",
    quote: "Highly recommended for serious aspirants. The focus on NCERT is exactly what is needed for current NEET patterns."
  }
];

export function TestimonialsGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(mockTestimonials.length / itemsPerPage);
  
  const currentTestimonials = mockTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const selectedTestimonial = mockTestimonials.find(t => t.id === selectedId);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 auto-rows-fr">
        {currentTestimonials.map((testimonial) => (
          <motion.div
            layoutId={`card-${testimonial.id}`}
            key={testimonial.id}
            onClick={() => setSelectedId(testimonial.id)}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow cursor-pointer overflow-hidden flex flex-col border border-slate-100"
            whileHover={{ y: -4 }}
          >
            <motion.div layoutId={`image-container-${testimonial.id}`} className="h-56 overflow-hidden relative p-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            
            <motion.div layoutId={`content-${testimonial.id}`} className="p-6 pt-2 flex flex-col items-center text-center">
              <motion.h3 layoutId={`name-${testimonial.id}`} className="font-bold text-lg text-slate-900 mb-1">
                {testimonial.name}
              </motion.h3>
              
              <div className="flex flex-col items-center space-y-2 mt-2">
                <div className="flex items-center space-x-2 text-primary">
                  <Stethoscope size={20} strokeWidth={2.5} />
                  <span className="font-semibold text-slate-700">{testimonial.college}</span>
                </div>
                
                <div className="text-sm text-slate-500 font-medium">
                  {testimonial.score} • {testimonial.rank}
                </div>
                
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                    {testimonial.batch}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <AnimatePresence>
        {selectedId && selectedTestimonial && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
              onClick={() => setSelectedId(null)}
            />
            
            <div className="fixed inset-0 flex items-center justify-center z-[110] p-4 pointer-events-none mt-16 md:mt-0">
              <motion.div
                layoutId={`card-${selectedTestimonial.id}`}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl pointer-events-auto flex flex-col md:flex-row relative max-h-[85vh]"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>

                <motion.div layoutId={`image-container-${selectedTestimonial.id}`} className="w-full md:w-2/5 h-48 md:h-auto p-4 md:p-6 md:pr-0 shrink-0">
                  <img
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>

                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center overflow-hidden">
                  <Quote className="text-blue-200 w-10 h-10 mb-3 -ml-2 rotate-180 shrink-0" />
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="overflow-y-auto custom-scrollbar pr-2 mb-6"
                  >
                    <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed italic">
                      "{selectedTestimonial.quote}"
                    </p>
                  </motion.div>
                  
                  <motion.div layoutId={`content-${selectedTestimonial.id}`} className="shrink-0 mt-auto border-t border-slate-100 pt-4">
                    <motion.h3 layoutId={`name-${selectedTestimonial.id}`} className="font-bold text-xl text-slate-900 mb-1">
                      {selectedTestimonial.name}
                    </motion.h3>
                    <div className="flex flex-col space-y-1">
                      <span className="text-primary font-semibold flex items-center gap-1.5">
                        <Stethoscope size={16} />
                        {selectedTestimonial.college}
                      </span>
                      <span className="text-sm text-slate-500">
                        {selectedTestimonial.rank} • {selectedTestimonial.score}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
