'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PHONE = '+15551234567';



export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-visible">
      {/* ── Full-bleed photo hero ── */}
      <div className="relative w-full min-h-[92vh] flex items-center">
        {/* Background image */}
        <Image
          src="/hero-movers-track-pro.png"
          alt="Track Pro Movers™ professional moving company with truck and movers actively packing"
          fill
          priority
          quality={75}
          className="object-cover object-center"
        />

        {/* Dark navy overlay — left heavy for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/70 to-[#0d1f3c]/30" />

        {/* Subtle bottom fade for card transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d1f3c] to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 pb-20 sm:pb-28">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold text-sm mb-6 border border-white/20 tracking-wider uppercase">
              ✦ Track Pro Movers™
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
              Welcome to{' '}
              <span className="text-[#F97316]">Track Pro Movers™</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-blue-100/80 max-w-lg mb-6 leading-relaxed font-light">
              Professional, damage-free moving — transparent pricing, every time. Take your move to the next level.
            </p>

            {/* NO HIDDEN FEES Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-[#10b981]/15 border border-[#10b981]/30 backdrop-blur-md rounded-xl px-5 py-3 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <div className="flex items-center justify-center bg-[#10b981] rounded-full w-10 h-10 flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[#34d399] font-black tracking-widest uppercase text-lg sm:text-xl leading-none mb-1 drop-shadow-md">
                  NO HIDDEN FEES
                </span>
                <span className="text-[#34d399]/90 text-xs sm:text-sm font-semibold tracking-wider uppercase leading-none">
                  100% Transparent Pricing
                </span>
              </div>
            </div>

            {/* Pricing Model Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg px-4 py-2.5 shadow-sm">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-semibold">From $50/mover/hr</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg px-4 py-2.5 shadow-sm">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-semibold">Minimum 2 hours</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg px-4 py-2.5 shadow-sm">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-white text-[13px] font-semibold">No property type fees</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 w-full lg:flex-row lg:w-auto">
              <button
                onClick={scrollToForm}
                className="w-full lg:w-auto px-8 py-4 bg-[#F97316] text-white font-bold rounded-xl shadow-[0_0_24px_rgba(249,115,22,0.45)] hover:shadow-[0_0_36px_rgba(249,115,22,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 text-base flex items-center justify-center gap-2 flex-shrink-0"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Get a Free Quote
              </button>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:flex">
                <a
                  href={`sms:${PHONE}`}
                  className="py-3 sm:py-3.5 px-2 sm:px-5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 active:scale-95 transition-all duration-300 border border-white/25 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-center"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  <span className="leading-tight">Message Us</span>
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="py-3 sm:py-3.5 px-2 sm:px-5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 active:scale-95 transition-all duration-300 border border-white/25 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-center"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="leading-tight">Call Now</span>
                </a>
                <a
                  href="mailto:info@trackpromovers.com"
                  className="py-3 sm:py-3.5 px-2 sm:px-5 bg-white hover:bg-gray-50 border border-gray-200 text-[#0d1f3c] font-bold rounded-xl active:scale-95 transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-center"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75m19.5 0v.243m0 0l-7.5 4.615m-4.5 0L2.25 6.993" />
                  </svg>
                  <span className="leading-tight">Email Us</span>
                </a>
              </div>
            </div>

            {/* Trust strip */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-8 opacity-50">
              <span className="font-bold text-sm tracking-widest text-white">LOGISTICS</span>
              <span className="font-bold text-sm tracking-widest text-white">FREIGHT</span>
              <span className="font-bold text-sm tracking-widest text-white">TRANSIT</span>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
