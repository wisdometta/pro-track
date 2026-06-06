'use client';

import { motion } from 'framer-motion';

const PHONE = '+15551234567';


export default function FloatingWidget() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Mobile sticky bottom bar (hidden on md+) ── */}
      <motion.div
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#0d1f3c] border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.4)] safe-area-pb"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.8 }}
      >
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {/* Get a Quote */}
          <button
            onClick={scrollToForm}
            className="flex flex-col items-center justify-center gap-1 py-3.5 bg-[#F97316] hover:bg-[#ea6c0a] active:scale-95 transition-all duration-200"
            aria-label="Get a Quote"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            <span className="text-white text-[11px] font-bold tracking-wide leading-none">Get a Quote</span>
          </button>

          {/* Call Now */}
          <a
            href={`tel:${PHONE}`}
            className="flex flex-col items-center justify-center gap-1 py-3.5 bg-[#0d1f3c] hover:bg-[#132544] active:scale-95 transition-all duration-200"
            aria-label="Call Now"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="text-white text-[11px] font-bold tracking-wide leading-none">Call Now</span>
          </a>

          {/* Message Us */}
          <a
            href={`sms:${PHONE}`}
            className="flex flex-col items-center justify-center gap-1 py-3.5 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200"
            aria-label="Message Us"
          >
            <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <span className="text-[#0d1f3c] text-[11px] font-bold tracking-wide leading-none">Message Us</span>
          </a>
        </div>
      </motion.div>

      {/* ── Desktop floating Email bubble (md+) ── */}
      <motion.a
        href="mailto:info@trackpromovers.com"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1E3A5F] border border-[#162d4a] rounded-full items-center justify-center shadow-xl hover:bg-[#162d4a] hover:scale-110 active:scale-95 transition-all duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        aria-label="Email Us"
      >
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75m19.5 0v.243m0 0l-7.5 4.615m-4.5 0L2.25 6.993" />
        </svg>
      </motion.a>
    </>
  );
}
