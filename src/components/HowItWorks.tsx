'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Request Your Move',
    description: 'Submit your moving details through our quick online form.',
  },
  {
    step: '02',
    title: 'Receive Your Estimate',
    description: "We'll review your information and provide a customized quote.",
  },
  {
    step: '03',
    title: 'Confirm Your Booking',
    description: 'Choose a date and finalize your moving schedule.',
  },
  {
    step: '04',
    title: 'Move With Confidence',
    description: 'Our team arrives ready to complete your move safely and efficiently.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="about" className="text-3xl sm:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Our <span className="text-blue-600">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative border-l-4 border-orange-200 ml-4 sm:ml-8 lg:mx-auto lg:left-[50%] lg:translate-x-[-50%] lg:border-l-4 lg:ml-0 w-full lg:w-4">
          <motion.div
            className="w-full lg:absolute lg:top-0 lg:-left-full lg:w-[200vw]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {steps.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  variants={stepVariants}
                  className={`relative mb-12 lg:mb-16 lg:w-[calc(50vw-2rem)] lg:max-w-md ${isEven ? 'lg:pr-12 lg:ml-auto lg:-translate-x-[calc(100%+16px)] lg:text-right' : 'lg:pl-12 lg:translate-x-[16px] lg:text-left'} ml-10 lg:ml-0`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-0 w-14 h-14 rounded-full bg-blue-900 border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-lg ${isEven ? 'left-[-48px] lg:left-auto lg:right-[-44px]' : 'left-[-48px] lg:left-[-44px]'}`}>
                    {item.step}
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
