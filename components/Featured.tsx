'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const dishes = [
  {
    name: 'Texas Barbecue Ribs',
    description: 'Slow-smoked for 14 hours over hickory wood, glazed with our signature bourbon BBQ sauce.',
    price: '$34',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Prime Ribeye Steak',
    description: '16oz dry-aged prime ribeye, perfectly seared and served with garlic herb butter.',
    price: '$58',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Southern Fried Chicken',
    description: 'Crispy buttermilk fried chicken served with hot honey and house-made pickles.',
    price: '$26',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Truffle Burger',
    description: 'Wagyu beef patty, black truffle aioli, aged cheddar, caramelized onions on a brioche bun.',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Featured() {
  return (
    <section className="py-24 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-4 block">Signatures</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Featured Dishes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer bg-neutral-950 rounded-2xl p-4 border border-neutral-800/50 shadow-[0_0_15px_rgba(245,158,11,0.07)] hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-96 w-full mb-6 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 right-4 bg-amber-600 text-white px-3 py-1 font-semibold tracking-wider">
                  {dish.price}
                </div>
              </div>
              <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-amber-500 transition-colors">
                {dish.name}
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed text-sm">
                {dish.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
