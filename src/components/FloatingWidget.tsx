'use client';

import { motion } from 'framer-motion';

export default function FloatingWidget() {
  return (
    <motion.a
      href="tel:+1234567890"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#F97316] rounded-full flex items-center justify-center shadow-xl hover:bg-[#ea6c0a] hover:scale-110 active:scale-95 transition-all duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Contact us"
    >
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </motion.a>
  );
}
