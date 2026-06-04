'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'The team was professional, punctual, and handled everything with care. Moving day was much easier than expected.',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    quote: 'Excellent communication from start to finish. Highly recommended.',
    author: 'James R.',
    rating: 5,
  },
  {
    quote: 'Great experience. Fair pricing and hardworking movers.',
    author: 'Lisa K.',
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-[#F97316]' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
            What Our Customers{' '}
            <span className="text-[#F97316]">Say</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={cardVariants}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
            >
              <StarRating rating={t.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed text-sm italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[#1E3A5F]">— {t.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
