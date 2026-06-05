'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Pricing data ── */
const MOVE_SIZES = [
  { id: 'studio', label: 'Studio', icon: '🏠', baseHours: 2, crewSize: 2, description: 'Up to 500 sq ft' },
  { id: '1br', label: '1 Bedroom', icon: '🏡', baseHours: 3, crewSize: 2, description: '500–800 sq ft' },
  { id: '2br', label: '2 Bedrooms', icon: '🏘️', baseHours: 4, crewSize: 3, description: '800–1,200 sq ft' },
  { id: '3br', label: '3 Bedrooms', icon: '🏗️', baseHours: 6, crewSize: 3, description: '1,200–1,800 sq ft' },
  { id: '4br', label: '4+ Bedrooms', icon: '🏰', baseHours: 8, crewSize: 4, description: '1,800+ sq ft' },
];

const EXTRAS = [
  { id: 'packing', label: 'Packing Service', price: 150, icon: '📦' },
  { id: 'disassembly', label: 'Furniture Disassembly', price: 100, icon: '🔧' },
  { id: 'storage', label: 'Temp Storage (1 week)', price: 200, icon: '🗄️' },
  { id: 'fragile', label: 'Fragile / Special Items', price: 125, icon: '🖼️' },
];

const RATE_PER_HOUR = 55; // per crew member
const DISTANCE_RATE = 1.25; // per mile surcharge

const PHONE = '+15551234567';
const WHATSAPP_NUMBER = '15551234567';
const WHATSAPP_MSG_BASE = 'Hi! I used the quote calculator and got an estimate of';

export default function QuoteCalculator() {
  const [sizeId, setSizeId] = useState('1br');
  const [distance, setDistance] = useState(15);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const selectedSize = MOVE_SIZES.find((s) => s.id === sizeId)!;

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id],
    );
  };

  const estimate = useMemo(() => {
    const laborCost = selectedSize.baseHours * selectedSize.crewSize * RATE_PER_HOUR;
    const distanceCost = distance * DISTANCE_RATE;
    const extrasCost = EXTRAS.filter((e) => selectedExtras.includes(e.id)).reduce(
      (sum, e) => sum + e.price,
      0,
    );
    const total = laborCost + distanceCost + extrasCost;
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.15);
    return { low, high, labor: laborCost, distance: distanceCost, extras: extrasCost };
  }, [selectedSize, distance, selectedExtras]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `${WHATSAPP_MSG_BASE} $${estimate.low}–$${estimate.high} for a ${selectedSize.label} move, ${distance} miles. I'd like to book!`,
  )}`;

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="quote-calculator" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[#F97316] bg-[#F97316]/10 rounded-full border border-[#F97316]/20">
            Instant Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
            Moving Quote <span className="text-[#F97316]">Calculator</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto text-base">
            Get a ballpark estimate in seconds — no commitment, no emails required.
          </p>
        </div>

        {/* Calculator card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-10">
            {/* ─── Step 1: Move size ─── */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-[#1E3A5F] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                What are you moving?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {MOVE_SIZES.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => { setSizeId(size.id); setShowResult(false); }}
                    className={`relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer group ${
                      sizeId === size.id
                        ? 'border-[#F97316] bg-[#F97316]/5 shadow-md'
                        : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
                    }`}
                  >
                    <span className="text-2xl mb-2">{size.icon}</span>
                    <span className={`text-sm font-bold leading-tight text-center ${
                      sizeId === size.id ? 'text-[#F97316]' : 'text-[#1E3A5F]'
                    }`}>
                      {size.label}
                    </span>
                    <span className="text-[11px] text-gray-400 mt-1 leading-tight text-center">
                      {size.description}
                    </span>
                    {sizeId === size.id && (
                      <motion.div
                        layoutId="size-check"
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

            {/* ─── Step 2: Distance ─── */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-[#1E3A5F] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                How far is the move?
              </h3>

              <div className="bg-gray-50 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Distance</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#1E3A5F]">{distance}</span>
                    <span className="text-sm text-gray-400 font-medium">miles</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={1}
                  max={200}
                  value={distance}
                  onChange={(e) => { setDistance(Number(e.target.value)); setShowResult(false); }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#F97316]"
                  style={{
                    background: `linear-gradient(to right, #F97316 0%, #F97316 ${
                      ((distance - 1) / 199) * 100
                    }%, #e5e7eb ${((distance - 1) / 199) * 100}%, #e5e7eb 100%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1 mi</span>
                  <span>Local (&lt;30 mi)</span>
                  <span>200 mi</span>
                </div>
              </div>
            </div>

            {/* ─── Step 3: Extras ─── */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-[#1E3A5F] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                Need any extras?
                <span className="text-xs font-normal text-gray-400 normal-case">(optional)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRAS.map((extra) => {
                  const isSelected = selectedExtras.includes(extra.id);
                  return (
                    <button
                      key={extra.id}
                      onClick={() => { toggleExtra(extra.id); setShowResult(false); }}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left cursor-pointer ${
                        isSelected
                          ? 'border-[#F97316] bg-[#F97316]/5'
                          : 'border-gray-100 bg-white hover:border-gray-200'
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{extra.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-bold ${isSelected ? 'text-[#F97316]' : 'text-[#1E3A5F]'}`}>
                          {extra.label}
                        </div>
                        <div className="text-xs text-gray-400">+${extra.price}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'border-[#F97316] bg-[#F97316]'
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ─── Calculate button ─── */}
            <button
              onClick={() => setShowResult(true)}
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
            {showResult && (
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
                      <span className="text-5xl sm:text-6xl font-bold text-white">${estimate.low}</span>
                      <span className="text-2xl sm:text-3xl text-blue-200 font-medium mx-1">–</span>
                      <span className="text-5xl sm:text-6xl font-bold text-white">${estimate.high}</span>
                    </motion.div>
                    <p className="text-blue-300/60 text-xs mt-2">
                      Based on a {selectedSize.label} move • {distance} miles • {selectedSize.crewSize} crew members
                    </p>
                  </div>

                  {/* Cost breakdown */}
                  <div className="bg-white/5 rounded-2xl p-5 mb-8 border border-white/10">
                    <div className="flex items-center justify-between py-2 text-sm">
                      <span className="text-blue-200">Labor ({selectedSize.baseHours}h × {selectedSize.crewSize} crew)</span>
                      <span className="text-white font-semibold">${estimate.labor}</span>
                    </div>
                    <div className="border-t border-white/10" />
                    <div className="flex items-center justify-between py-2 text-sm">
                      <span className="text-blue-200">Distance ({distance} mi)</span>
                      <span className="text-white font-semibold">${Math.round(estimate.distance)}</span>
                    </div>
                    {estimate.extras > 0 && (
                      <>
                        <div className="border-t border-white/10" />
                        <div className="flex items-center justify-between py-2 text-sm">
                          <span className="text-blue-200">Extra Services</span>
                          <span className="text-white font-semibold">${estimate.extras}</span>
                        </div>
                      </>
                    )}
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
                      Book This Move — Get Exact Quote
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${PHONE}`}
                        className="py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/15 active:scale-95 transition-all duration-200 text-sm flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        Call Now
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold rounded-xl active:scale-95 transition-all duration-200 text-sm flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-blue-300/40 text-xs text-center mt-6">
                    * This is a rough estimate. Final pricing depends on actual inventory, access conditions, and move-day details.
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
