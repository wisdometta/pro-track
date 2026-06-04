'use client';

const BENEFITS = [
  {
    title: 'Licensed & Fully Insured',
    description: 'Your belongings are protected from pickup to drop-off. We carry full liability coverage on every move.',
  },
  {
    title: 'No Hidden Fees — Ever',
    description: 'The price we quote is the price you pay. No surprise charges on moving day.',
  },
  {
    title: 'On-Time, Every Time',
    description: 'We respect your schedule. Our crew arrives ready and finishes within the agreed window.',
  },
  {
    title: 'Trained & Professional Crew',
    description: 'Every mover is background-checked, trained in proper lifting, and experienced with fragile items.',
  },
  {
    title: 'Flexible — We Work Around You',
    description: 'Weekends, evenings, last-minute bookings. We schedule moves that fit your life, not ours.',
  },
  {
    title: 'Labor-Only Option Available',
    description: 'Already have a truck or container? Hire our strong crew by the hour to load and unload.',
  },
];

export default function WhyChooseUs() {
  const scrollToForm = () =>
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[#F97316] bg-[#F97316]/10 rounded-full border border-[#F97316]/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
            The Safe Giant Movers Difference
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            We don&apos;t just move boxes — we move your life with care, speed, and complete transparency.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] lg:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
              alt="Professional movers carrying furniture"
              className="w-full h-full object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-[#1E3A5F] text-sm">Trusted by 500+ Families</div>
                <div className="text-xs text-gray-500 mt-0.5">Rated 5★ across Google & Facebook</div>
              </div>
            </div>
          </div>

          {/* Right: Benefits list */}
          <div className="flex flex-col gap-5">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="flex gap-4 items-start">
                {/* Check icon */}
                <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-[#F97316] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3A5F] text-base">{benefit.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <button
              onClick={scrollToForm}
              className="mt-4 self-start px-7 py-3.5 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold rounded-xl transition-colors"
            >
              Request Your Free Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
