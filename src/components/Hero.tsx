'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[90vh] flex items-center pt-20 pb-8 lg:pt-32 lg:pb-24">
      {/* Deep Navy Slanted Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#1E3A5F] z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full h-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left text-white pt-8 lg:pt-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-400 font-semibold text-sm mb-6 border border-white/20 tracking-wider uppercase">
              ✦ Safe Giant Moving Inc.
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Safe Giant Movers: <br className="hidden lg:block"/> Your Trusted <span className="text-[#F97316]">Hourly Moving Experts</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
              Affordable, Reliable, and Professional—$50 per hour per mover (2-hour minimum).
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#F97316] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Get a Quote
              </button>
              <button
                onClick={scrollToForm}
                className="px-8 py-4 bg-white text-[#F97316] font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-gray-50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Book Now
              </button>
            </div>

            {/* Trusted Logos Strip (Logisco style) */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale">
              <span className="font-bold text-xl">LOGISTICS</span>
              <span className="font-bold text-xl">FREIGHT</span>
              <span className="font-bold text-xl">TRANSIT</span>
            </div>
          </motion.div>

          {/* Right Image Content - The Truck */}
          <motion.div 
            className="flex-1 w-full relative mt-8 lg:mt-0 flex items-end justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* 
              In a real scenario, this would be a transparent PNG.
              Using a generic high-quality moving truck placeholder styling to match the vibe. 
            */}
            <div className="relative w-full max-w-[600px] h-[260px] sm:h-[360px] lg:h-auto lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform lg:translate-y-12">
               <Image 
                  src="/truck.png" 
                  alt="Safe Giant Moving Truck" 
                  fill 
                  className="object-cover"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Orange Badge (Logisco Style) */}
            <div className="absolute -bottom-4 lg:bottom-4 left-4 lg:-left-8 bg-[#F97316] text-white p-4 lg:p-6 rounded-2xl shadow-xl transform lg:translate-y-12 animate-bounce-slow">
              <p className="text-2xl lg:text-4xl font-bold">20+</p>
              <p className="text-sm font-semibold opacity-90">Years of<br/>Experience</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
