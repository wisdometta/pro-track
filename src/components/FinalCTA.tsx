'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Ready to Schedule Your Move?
        </motion.h2>
        <motion.p
          className="mt-4 text-blue-100/80 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tell us about your move and receive a personalized estimate from our team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={scrollToForm}
            className="mt-8 px-8 py-4 bg-[#F97316] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(20,108,67,0.4)] hover:shadow-[0_0_30px_rgba(20,108,67,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-lg"
          >
            Request Your Move
          </button>
        </motion.div>
      </div>
    </section>
  );
}
