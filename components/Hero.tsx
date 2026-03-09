'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Non-linear loading simulation for realism
      currentProgress += Math.floor(Math.random() * 12) + 1;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = '';
        }, 600); // Hold at 100% for a cinematic beat
      }
      setProgress(currentProgress);
    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      {/* CINEMATIC PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950 text-white"
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden mb-8">
              <motion.span 
                className="block text-xs tracking-[0.4em] text-neutral-500 uppercase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Curating Experience
              </motion.span>
            </div>
            <div className="font-serif text-8xl md:text-9xl font-light tracking-tighter flex items-start">
              <span className="w-[3ch] text-right">{progress}</span>
              <span className="text-3xl md:text-5xl text-amber-500 mt-2 ml-1">%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-none"
            initial={{ scale: 1.15 }}
            animate={{ scale: isLoading ? 1.15 : 1 }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
          >
            <iframe 
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/aXGRwd6u3m0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=aXGRwd6u3m0&playsinline=1" 
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-transparent to-neutral-950/90"></div>
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 100 : 0 }}
            transition={{ duration: 1.4, delay: isLoading ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-amber-500 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
              Welcome to Texas Taste
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[0.9] drop-shadow-xl">
              Authentic American Flavors <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 italic font-light drop-shadow-md">
                in the Heart of Texas
              </span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light drop-shadow-lg mt-6">
              Experience the bold, rich traditions of New American cuisine. From slow-smoked barbecue ribs to prime steaks and artisanal desserts.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  href="#reservation"
                  className="block w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-600/20 hover:shadow-amber-500/40"
                >
                  Reserve a Table
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="#menu"
                  className="block w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-neutral-950 font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
                >
                  View Menu
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ delay: isLoading ? 0 : 1.8, duration: 1 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center">
            <span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
