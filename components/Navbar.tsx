'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-neutral-950/40 backdrop-blur-lg border-b border-neutral-800/50' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0">
            <span className="font-serif text-2xl font-bold text-white tracking-wider">
              TEXAS <span className="text-amber-500">TASTE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-amber-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#reservation"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 transition-colors rounded-none uppercase tracking-wider"
            >
              Reserve Table
            </Link>
            <button className="flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold text-amber-500 border border-amber-500 hover:bg-amber-500 hover:text-white transition-colors uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4" />
              <span>Order</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-neutral-300 hover:text-amber-500 hover:bg-neutral-800 uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-3">
                <Link
                  href="#reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center px-5 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 transition-colors uppercase tracking-wider"
                >
                  Reserve Table
                </Link>
                <button className="flex items-center justify-center space-x-2 px-5 py-3 text-sm font-semibold text-amber-500 border border-amber-500 hover:bg-amber-500 hover:text-white transition-colors uppercase tracking-wider">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Online</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
