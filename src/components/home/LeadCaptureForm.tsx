"use client";

import { useState } from "react";

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application received. Our curator will contact you shortly.");
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="clean-card p-10 md:p-12 rounded-xl bg-white shadow-lg border border-outline-variant">
          <div className="text-center mb-10">
            <h2 className="font-headline text-3xl font-bold text-on-background mb-4">Secure Your Seat</h2>
            <p className="text-on-surface-variant text-sm">Strictly limited to 4 students per batch for maximum clarity and engagement.</p>
          </div>
          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary">Full Name</label>
              <input required className="w-full bg-surface-variant border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-DEFAULT py-3 px-4 text-sm" placeholder="John Doe" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary">Phone Number</label>
              <input required className="w-full bg-surface-variant border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-DEFAULT py-3 px-4 text-sm" placeholder="+91 00000 00000" type="tel" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary">Email Address</label>
              <input required className="w-full bg-surface-variant border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-DEFAULT py-3 px-4 text-sm" placeholder="john@example.com" type="email" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary">Your Class</label>
              <select className="w-full bg-surface-variant border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-DEFAULT py-3 px-4 text-sm appearance-none">
                <option>Select Class</option>
                <option>11th Grade</option>
                <option>12th Grade</option>
                <option>Dropper</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-secondary">Your Query</label>
              <textarea className="w-full bg-surface-variant border-outline focus:border-primary focus:ring-1 focus:ring-primary rounded-DEFAULT py-3 px-4 text-sm" placeholder="How can we assist your journey?" rows={4}></textarea>
            </div>
            <div className="md:col-span-2 pt-4">
              <button disabled={isSubmitting} type="submit" className="w-full bg-primary text-white py-4 rounded-DEFAULT font-bold text-base shadow hover:bg-blue-700 transition-colors disabled:opacity-50">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
