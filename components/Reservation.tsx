'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export default function Reservation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-950 border border-neutral-800 p-8 md:p-16"
        >
          <div className="text-center mb-12">
            <span className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-4 block">Book a Table</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Make a Reservation</h2>
            <p className="text-neutral-400 font-light">Join us for an unforgettable dining experience.</p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Reservation Requested</h3>
              <p className="text-neutral-400">We will contact you shortly to confirm your booking.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Full Name</label>
                  <input required type="text" id="name" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Phone Number</label>
                  <input required type="tel" id="phone" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Date</label>
                  <input required type="date" id="date" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Time</label>
                  <select required id="time" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                    <option value="">Select Time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="guests" className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Number of Guests</label>
                  <select required id="guests" className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                    <option value="">Select Guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6+">6+ People</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold uppercase tracking-widest py-4 transition-colors mt-4">
                Confirm Reservation
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
