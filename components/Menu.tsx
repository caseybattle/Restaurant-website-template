'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const menuCategories = [
  {
    title: 'Starters',
    items: [
      { name: 'Smoked Brisket Nachos', description: 'House chips, queso, jalapeños, pico de gallo', price: '$16', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Crispy Calamari', description: 'Lemon aioli, marinara, fried cherry peppers', price: '$18', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Deviled Eggs', description: 'Candied bacon, smoked paprika, chives', price: '$12', image: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?q=80&w=1920&auto=format&fit=crop' },
    ]
  },
  {
    title: 'Mains',
    items: [
      { name: 'Texas Barbecue Ribs', description: 'Half rack, coleslaw, baked beans', price: '$34', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Prime Ribeye Steak', description: '16oz, garlic herb butter, mashed potatoes', price: '$58', image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Southern Fried Chicken', description: 'Hot honey, mac & cheese, collard greens', price: '$26', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Pan-Seared Salmon', description: 'Quinoa pilaf, grilled asparagus, lemon butter', price: '$32', image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1920&auto=format&fit=crop' },
    ]
  },
  {
    title: 'Handhelds',
    items: [
      { name: 'Truffle Burger', description: 'Wagyu beef, truffle aioli, aged cheddar', price: '$24', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Brisket Sandwich', description: 'Slow-smoked brisket, BBQ sauce, pickles', price: '$20', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Spicy Chicken Sandwich', description: 'Nashville hot style, slaw, brioche bun', price: '$18', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1920&auto=format&fit=crop' },
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Pecan Pie', description: 'Warm caramel, vanilla bean ice cream', price: '$10', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Texas Chocolate Cake', description: 'Fudge icing, chocolate shavings', price: '$12', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1920&auto=format&fit=crop' },
      { name: 'Banana Pudding', description: 'Vanilla wafers, whipped cream', price: '$9', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1920&auto=format&fit=crop' },
    ]
  }
];

export default function Menu() {
  const containerRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="menu" ref={containerRef} className="py-24 bg-neutral-950 relative overflow-hidden transition-colors duration-700">
      {/* Base Stardust Background */}
      <motion.div 
        style={{ y, height: "140%", top: "-20%", backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
        className="absolute inset-0 w-full opacity-5 z-0" 
      ></motion.div>

      {/* Dynamic Hover Background */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            key={hoveredImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <Image
              src={hoveredImage}
              alt="Menu item preview"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay to ensure text remains readable without hiding the image */}
            <div className="absolute inset-0 bg-neutral-950/60"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-4 block drop-shadow-md">Discover</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white drop-shadow-lg flex flex-col items-center">
            <span className="block overflow-hidden pb-2">
              <motion.span 
                className="block"
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                Our Full Menu
              </motion.span>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {menuCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              <h3 className="font-serif text-3xl text-amber-500 mb-8 border-b border-neutral-800/50 pb-4 drop-shadow-md">
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.items.map((item) => (
                  <div 
                    key={item.name} 
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredImage(item.image)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-medium text-white group-hover:text-amber-400 transition-colors duration-300 uppercase tracking-wide drop-shadow-md">
                        {item.name}
                      </h4>
                      <div className="flex-grow border-b border-dotted border-neutral-700/50 group-hover:border-amber-500/30 transition-colors duration-300 mx-4 relative top-[-6px]"></div>
                      <span className="text-xl font-serif text-amber-500 group-hover:text-amber-400 transition-colors duration-300 drop-shadow-md">{item.price}</span>
                    </div>
                    <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 font-light text-sm drop-shadow-md">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <button className="px-8 py-4 bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold uppercase tracking-widest transition-all duration-300 backdrop-blur-sm">
            Download PDF Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
