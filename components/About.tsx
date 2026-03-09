'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Complex parallax speeds for overlapping elements
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]); // Moves opposite for massive depth
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-neutral-950 relative overflow-hidden">
      {/* Massive Background Typography */}
      <motion.div 
        style={{ x: xBg }}
        className="absolute top-20 left-0 text-[18vw] font-serif font-bold text-white/15 whitespace-nowrap select-none pointer-events-none z-[25] leading-none mix-blend-overlay"
      >
        HERITAGE
      </motion.div>

      {/* Vertical Side Text */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.5em] text-amber-500 uppercase hidden xl:block z-20 origin-center">
        Est. 2009 — Austin, TX
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Overlapping Images Section (Asymmetrical Left) */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[700px] w-full mt-10 lg:mt-0">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-0 left-0 w-[85%] h-[85%] overflow-hidden rounded-sm z-10"
            >
              <motion.div style={{ y: y1, height: "120%", top: "-10%" }} className="absolute inset-0 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
                  alt="Restaurant Interior"
                  fill
                  className="object-cover grayscale-[20%]"
                />
              </motion.div>
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-[55%] h-[45%] overflow-hidden rounded-sm z-20 shadow-2xl shadow-black/80 border border-neutral-800/50"
            >
              <motion.div style={{ y: y2, height: "130%", top: "-15%" }} className="absolute inset-0 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop"
                  alt="Chef preparing food"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Accent Box */}
            <div className="absolute top-1/3 -left-4 w-32 h-32 border border-amber-500/20 z-0 hidden md:block"></div>
          </div>

          {/* Editorial Text Section (Right) */}
          <motion.div
            style={{ y: yText }}
            className="lg:col-span-5 lg:pl-10 mt-16 lg:mt-0 relative z-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 1, 
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-amber-500"></div>
              <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs">Our Story</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              <span className="block overflow-hidden pb-2">
                <motion.span 
                  className="block"
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  A Passion for
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-2 pb-2">
                <motion.span 
                  className="italic text-neutral-400 font-light text-4xl md:text-5xl lg:text-6xl block"
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  Texas Heritage
                </motion.span>
              </span>
            </h2>
            
            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
              <p>
                Founded in the heart of Texas, Texas Taste brings a modern twist to classic American comfort food. We believe in sourcing the finest local ingredients to craft dishes that resonate with the soul of the South.
              </p>
              <p>
                Whether you&apos;re craving our signature slow-smoked barbecue ribs, a perfectly seared prime steak, or our famous crispy fried chicken, every bite is a celebration of authentic flavor and culinary craftsmanship.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <Image
                src="https://picsum.photos/seed/signature/200/80"
                alt="Chef Signature"
                width={150}
                height={60}
                className="opacity-50 invert"
              />
              <div className="border-l border-neutral-800 pl-6">
                <p className="text-white font-serif text-xl">Jameson Cole</p>
                <p className="text-xs text-amber-500 uppercase tracking-widest mt-1">Executive Chef</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
