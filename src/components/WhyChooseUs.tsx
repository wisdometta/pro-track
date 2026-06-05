'use client';

const BENEFITS = [
  {
    title: 'Licensed & Fully Insured',
    description:
      'Your belongings are protected from pickup to drop-off. We carry full liability coverage on every move.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
    alt: 'Professional handshake representing trust and licensing',
  },
  {
    title: 'No Hidden Fees — Ever',
    description:
      'The price we quote is the price you pay. No surprise charges on moving day.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    alt: 'Transparent pricing document',
  },
  {
    title: 'On-Time, Every Time',
    description:
      'We respect your schedule. Our crew arrives ready and finishes within the agreed window.',
    image:
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=800&auto=format&fit=crop',
    alt: 'Clock representing punctuality',
  },
  {
    title: 'Trained & Professional Crew',
    description:
      'Every mover is background-checked, trained in proper lifting, and experienced with fragile items.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    alt: 'Professional movers at work',
  },
  {
    title: 'Flexible — We Work Around You',
    description:
      'Weekends, evenings, last-minute bookings. We schedule moves that fit your life, not ours.',
    image:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop',
    alt: 'Calendar representing flexible scheduling',
  },
  {
    title: 'Labor-Only Option Available',
    description:
      'Already have a truck or container? Hire our strong crew by the hour to load and unload.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    alt: 'Team of movers ready to help',
  },
];

export default function WhyChooseUs() {
  const scrollToForm = () =>
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[#F97316] bg-[#F97316]/10 rounded-full border border-[#F97316]/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
            Why Customers Choose Safe Giant Movers
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            We don&apos;t just move boxes — we move your life with care, speed, and complete transparency.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Check badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F97316] flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1E3A5F] text-base leading-snug">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 bg-[#1E3A5F] rounded-2xl px-8 py-5 shadow-lg">
            <div className="text-left">
              <div className="text-white font-bold text-sm">Trusted by 500+ Families</div>
              <div className="text-blue-200 text-xs mt-0.5">Rated 5★ across Google &amp; Facebook</div>
            </div>
            <button
              onClick={scrollToForm}
              className="flex-shrink-0 px-6 py-3 bg-[#F97316] hover:bg-[#ea6c0a] text-white font-bold rounded-xl transition-colors text-sm"
            >
              Get Free Quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
