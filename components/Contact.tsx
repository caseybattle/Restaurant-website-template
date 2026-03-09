'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-4 block">Location</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-neutral-400 font-light">123 Congress Ave<br />Austin, TX 78701</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider mb-1">Hours</h4>
                  <p className="text-neutral-400 font-light">Mon-Thu: 5:00 PM - 10:00 PM<br />Fri-Sat: 5:00 PM - 11:00 PM<br />Sun: 4:00 PM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-neutral-400 font-light">(512) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-neutral-400 font-light">info@texastaste.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-auto relative bg-neutral-900 border border-neutral-800"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
                <p className="text-neutral-500 uppercase tracking-widest text-sm">Interactive Map Integration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
