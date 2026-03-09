'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    text: 'Absolutely incredible experience. The brisket was melt-in-your-mouth tender, and the atmosphere is perfectly moody and elegant. A true Texas gem.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    text: 'Best steak I have had in years. The service was impeccable, and the truffle burger is a must-try if you want something more casual but elevated.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    text: 'We celebrated our anniversary here and it was magical. The golden lighting, the dark aesthetic, and the decadent desserts made it unforgettable.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-amber-900/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-4 block">Reviews</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">What Our Guests Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-neutral-900 p-8 border border-neutral-800 relative rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-amber-500 text-6xl font-serif absolute top-4 left-4 opacity-20">&quot;</div>
              <div className="flex space-x-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-neutral-300 font-light leading-relaxed mb-6 relative z-10 italic">
                &quot;{review.text}&quot;
              </p>
              <div className="border-t border-neutral-800 pt-4">
                <p className="text-white font-medium uppercase tracking-wider text-sm">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
