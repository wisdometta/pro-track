'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RATE_PER_MOVER_PER_HOUR = 50;
const MINIMUM_HOURS = 2;
const PHONE = '+15551234567';
const EMAIL_ADDRESS = 'info@trackpromovers.com';

// A simple deterministic hash function to mock distance between two strings
const mockDistance = (str1: string, str2: string) => {
  const combined = (str1 + str2).toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!combined) return 0;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = ((hash << 5) - hash) + combined.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash) % 95 + 5; // 5 to 100 miles
};

export default function QuoteCalculator() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [movers, setMovers] = useState(2);
  const [showResult, setShowResult] = useState(false);

  const estimate = useMemo(() => {
    if (!startLocation || !endLocation) return null;
    
    const distance = mockDistance(startLocation, endLocation);
    // Rough estimate: 2 hours base loading/unloading + driving time (approx 30mph)
    const rawHours = 2 + (distance / 30);
    // Round to nearest half hour
    let hours = Math.round(rawHours * 2) / 2;
    // Enforce minimum 2 hours
    hours = Math.max(MINIMUM_HOURS, hours);
    
    const total = movers * RATE_PER_MOVER_PER_HOUR * hours;
    
    return {
      distance,
      hours,
      total,
      movers
    };
  }, [startLocation, endLocation, movers]);

  const handleCalculate = () => {
    if (!startLocation.trim() || !endLocation.trim()) {
      alert('Please enter both starting and ending locations.');
      return;
    }
    setShowResult(true);
  };

  const quoteMessage = estimate 
    ? `Hi! I used the quote calculator and got an estimate of $${estimate.total} for a move from ${startLocation} to ${endLocation} (${estimate.movers} movers, ~${estimate.hours} hours). I'd like to book!`
    : '';
  
  const emailUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent('Quote Request')}&body=${encodeURIComponent(quoteMessage)}`;
  const smsUrl = `sms:${PHONE}?body=${encodeURIComponent(quoteMessage)}`;

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="quote-calculator" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[#F97316] bg-[#F97316]/10 rounded-full border border-[#F97316]/20">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
            Instant <span className="text-[#F97316]">Quote</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-base">
            $50 per mover per hour. Minimum 2 hours. No hidden fees.
          </p>
        </div>

        {/* Calculator card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-10">
            
            {/* ─── Step 1: Locations ─── */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#1E3A5F] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                Where are you moving?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Starting Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 123 Main St, City, Zip"
                    value={startLocation}
                    onChange={(e) => { setStartLocation(e.target.value); setShowResult(false); }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Ending Location</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 456 Oak Ave, City, Zip"
                    value={endLocation}
                    onChange={(e) => { setEndLocation(e.target.value); setShowResult(false); }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* ─── Step 2: Movers ─── */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-[#1E3A5F] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                Number of Movers
                <span className="text-xs font-normal text-gray-400 normal-case">(Default: 2)</span>
              </h3>
              
              <div className="grid grid-cols-3 gap-3">
                {[2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => { setMovers(num); setShowResult(false); }}
                    className={`relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                      movers === num
                        ? 'border-[#F97316] bg-[#F97316]/5 shadow-md'
                        : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
                    }`}
                  >
                    <span className="text-2xl mb-1">💪</span>
                    <span className={`text-sm font-bold leading-tight ${movers === num ? 'text-[#F97316]' : 'text-[#1E3A5F]'}`}>
                      {num} Movers
                    </span>
                    {movers === num && (
                      <motion.div
                        layoutId="mover-check"
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#F97316] flex items-center justify-center"
                      >
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* ─── Calculate button ─── */}
            <button
              onClick={handleCalculate}
              className="w-full py-4 bg-[#1E3A5F] hover:bg-[#162d4a] text-white font-bold text-base rounded-2xl transition-all duration-200 active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
              Calculate My Estimate
            </button>
          </div>

          {/* ─── Result panel ─── */}
          <AnimatePresence>
            {showResult && estimate && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0d1f3c] px-6 sm:px-10 py-8 sm:py-10">
                  {/* Estimate header */}
                  <div className="text-center mb-8">
                    <p className="text-blue-200 text-sm font-medium mb-2 uppercase tracking-wider">
                      Your Estimated Quote
                    </p>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.15, type: 'spring', stiffness: 200 }}
                      className="flex items-baseline justify-center gap-1"
                    >
                      <span className="text-5xl sm:text-6xl font-bold text-white">${estimate.total}</span>
                    </motion.div>
                    <p className="text-blue-300/80 text-sm mt-3">
                      Based on {estimate.movers} movers at ${RATE_PER_MOVER_PER_HOUR}/hr
                    </p>
                  </div>

                  {/* Cost breakdown */}
                  <div className="bg-white/5 rounded-2xl p-5 mb-8 border border-white/10">
                    <div className="flex items-center justify-between py-2 text-sm">
                      <span className="text-blue-200">Estimated Duration</span>
                      <span className="text-white font-semibold">{estimate.hours} hours</span>
                    </div>
                    <div className="border-t border-white/10 my-1" />
                    <div className="flex items-center justify-between py-2 text-sm">
                      <span className="text-blue-200">Est. Distance</span>
                      <span className="text-white font-semibold">~{estimate.distance} miles</span>
                    </div>
                    <div className="border-t border-white/10 my-1" />
                    <div className="flex items-center justify-between py-2 text-sm">
                      <span className="text-blue-200">Hourly Rate ({estimate.movers} movers)</span>
                      <span className="text-white font-semibold">${estimate.movers * RATE_PER_MOVER_PER_HOUR}/hr</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={scrollToForm}
                      className="w-full py-4 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold rounded-xl shadow-[0_0_24px_rgba(249,115,22,0.4)] hover:shadow-[0_0_36px_rgba(249,115,22,0.6)] active:scale-[0.98] transition-all duration-200 text-base flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                      Book This Move
                    </button>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <a
                        href={smsUrl}
                        className="py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/15 active:scale-95 transition-all duration-200 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-center"
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <span className="leading-tight">Message</span>
                      </a>
                      <a
                        href={`tel:${PHONE}`}
                        className="py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/15 active:scale-95 transition-all duration-200 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-center"
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span className="leading-tight">Call Now</span>
                      </a>
                      <a
                        href={emailUrl}
                        className="py-3.5 px-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#0d1f3c] font-semibold rounded-xl transition-colors text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-center"
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75m19.5 0v.243m0 0l-7.5 4.615m-4.5 0L2.25 6.993" />
                        </svg>
                        <span className="leading-tight">Email Us</span>
                      </a>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-blue-300/40 text-xs text-center mt-6">
                    * Minimum 2 hours enforced. This is an estimate based on average driving speeds and does not account for traffic or complex building access.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
