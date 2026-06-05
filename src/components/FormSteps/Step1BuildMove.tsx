'use client';

import { FormikProps } from 'formik';
import { motion } from 'framer-motion';
import type { FormValues } from '@/lib/validationSchemas';
import { getSuggestedHours } from '@/lib/pricingEngine';

interface Props {
  formik: FormikProps<FormValues>;
}

const MOVE_SIZES = [
  { id: 'studio', label: 'Studio', icon: '🏠' },
  { id: '1bedroom', label: '1 Bedroom', icon: '🏡' },
  { id: '2bedroom', label: '2 Bedrooms', icon: '🏘️' },
  { id: '3bedroom', label: '3 Bedrooms', icon: '🏗️' },
  { id: '4bedroom', label: '4 Bedrooms', icon: '🏰' },
  { id: '5bedroom', label: '5+ Bedrooms', icon: '🏢' },
];

export default function Step1BuildMove({ formik }: Props) {
  const { values, setFieldValue, errors, touched } = formik;

  const handleSizeChange = (sizeId: string) => {
    setFieldValue('moveSize', sizeId);
    // Auto-update hours based on size
    const suggestedHours = getSuggestedHours(sizeId);
    setFieldValue('hours', suggestedHours);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">What are you moving?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {MOVE_SIZES.map((size) => (
            <button
              key={size.id}
              type="button"
              onClick={() => handleSizeChange(size.id)}
              className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 ${
                values.moveSize === size.id
                  ? 'border-[#F97316] bg-[#F97316]/5 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-[#F97316]/40'
              }`}
            >
              <span className="text-3xl mb-2">{size.icon}</span>
              <span className={`text-sm font-semibold text-center ${
                values.moveSize === size.id ? 'text-[#F97316]' : 'text-gray-700'
              }`}>
                {size.label}
              </span>
              {values.moveSize === size.id && (
                <motion.div
                  layoutId="size-check"
                  className="absolute -top-2 -right-2 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </motion.div>
              )}
            </button>
          ))}
        </div>
        {touched.moveSize && errors.moveSize && (
          <p className="mt-2 text-sm text-red-500">{errors.moveSize}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Number of Movers</h3>
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={`movers-${num}`}
                type="button"
                onClick={() => setFieldValue('movers', num)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  values.movers === num
                    ? 'bg-white text-[#1E3A5F] shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Standard is 2 movers.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#1E3A5F] mb-3">Estimated Hours</h3>
          <div className="flex bg-gray-100 p-1 rounded-xl flex-wrap">
            {[2, 3, 4, 5, 6, 8, 10].map((num) => (
              <button
                key={`hours-${num}`}
                type="button"
                onClick={() => setFieldValue('hours', num)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all min-w-[40px] ${
                  values.hours === num
                    ? 'bg-white text-[#1E3A5F] shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {num}{num === 10 ? '+' : ''}
              </button>
            ))}
          </div>
          <p className="text-xs text-[#F97316] font-medium mt-2">
            Suggested: {getSuggestedHours(values.moveSize)} hours for a {MOVE_SIZES.find(s => s.id === values.moveSize)?.label}
          </p>
        </div>
      </div>
    </div>
  );
}
