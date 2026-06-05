'use client';

import { motion } from 'framer-motion';

const PHONE = '+15551234567';
const WHATSAPP_NUMBER = '15551234567';
const WHATSAPP_MSG = encodeURIComponent('Hi! I\'d like to get a moving quote.');



export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-visible">
      {/* ── Full-bleed photo hero ── */}
      <div className="relative w-full min-h-[92vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000&auto=format&fit=crop')",
          }}
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
              ✦ Track Pro Services
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
              Welcome to{' '}
              <span className="text-[#F97316]">Track Pro</span>
              <br />
              Movers
            </h1>

            {/* Subtext */}
            <p className="text-lg text-blue-100/80 max-w-lg mb-8 leading-relaxed font-light">
              Professional, damage-free moving — transparent pricing, every time. Take your move to the next level.
            </p>

            {/* CTAs — mobile-first: 3 stacked full-width buttons on mobile, row on sm+ */}
            <div className="flex flex-col gap-3 w-full sm:flex-row sm:w-auto">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-[#F97316] text-white font-bold rounded-xl shadow-[0_0_24px_rgba(249,115,22,0.45)] hover:shadow-[0_0_36px_rgba(249,115,22,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 text-base flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                Get a Free Quote
              </button>
              <div className="grid grid-cols-2 gap-3 sm:contents">
                <a
                  href={`tel:${PHONE}`}
                  className="py-4 sm:py-3.5 sm:px-7 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 active:scale-95 transition-all duration-300 border border-white/25 flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 sm:py-3.5 sm:px-7 bg-[#25D366] hover:bg-[#20b858] text-white font-bold rounded-xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
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
