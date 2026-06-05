'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface Props {
  formik: FormikProps<FormValues>;
}

const HEAVY_ITEMS_LIST = [
  'Safe',
  'Piano',
  'Pool Table',
  'Large Appliance',
  'Commercial Equipment',
  'Other',
];

export default function Step3Access({ formik }: Props) {
  const { values, setFieldValue, errors, touched } = formik;

  const handleHeavyItemToggle = (item: string) => {
    const current = values.heavyItems;
    if (current.includes(item)) {
      setFieldValue('heavyItems', current.filter((i) => i !== item));
    } else {
      setFieldValue('heavyItems', [...current, item]);
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Property Access & Items</h3>

      {/* Stairs */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Will there be stairs involved?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { id: 'none', label: 'No Stairs' },
            { id: 'pickup', label: 'Only at Pickup' },
            { id: 'dropoff', label: 'Only at Dropoff' },
            { id: 'both', label: 'Both Locations' },
          ].map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setFieldValue('stairs', option.id)}
              className={`py-3 px-4 rounded-xl border-2 font-medium flex items-center gap-3 transition-all ${
                values.stairs === option.id
                  ? 'border-[#F97316] bg-[#F97316]/5 text-[#F97316]'
                  : 'border-gray-200 text-gray-700 hover:border-[#F97316]/40'
              }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                values.stairs === option.id ? 'border-[#F97316]' : 'border-gray-300'
              }`}>
                {values.stairs === option.id && <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />}
              </div>
              {option.label}
            </button>
          ))}
        </div>
        {touched.stairs && errors.stairs && (
          <p className="mt-2 text-sm text-red-500">{errors.stairs}</p>
        )}
      </div>

      {/* Elevator */}
      <div className="pt-4 border-t border-gray-100">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={values.elevator}
              onChange={(e) => setFieldValue('elevator', e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-6 h-6 rounded border-2 border-gray-300 bg-white peer-checked:bg-[#F97316] peer-checked:border-[#F97316] transition-all" />
            <svg
              className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
              fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
            Elevator available at either location?
          </span>
        </label>
      </div>

      {/* Heavy Items */}
      <div className="pt-4 border-t border-gray-100">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Any excessively heavy or oversized items?
          <span className="text-xs text-gray-400 font-normal ml-2">(Select all that apply)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {HEAVY_ITEMS_LIST.map((item) => {
            const isSelected = values.heavyItems.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleHeavyItemToggle(item)}
                className={`py-2 px-4 rounded-full border text-sm font-medium transition-all ${
                  isSelected
                    ? 'border-[#F97316] bg-[#F97316] text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-[#F97316]/50'
                }`}
              >
                {isSelected && (
                  <span className="mr-1.5 inline-block text-white text-xs">✓</span>
                )}
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
