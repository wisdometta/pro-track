'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface StepProps { formik: FormikProps<FormValues>; }

const sizes = [
  { value: 'studio', label: 'Studio', desc: 'Small apartment' },
  { value: '1bedroom', label: '1 Bedroom', desc: 'Apartment or small home' },
  { value: '2bedroom', label: '2 Bedroom', desc: 'Mid-size home' },
  { value: '3bedroom', label: '3 Bedroom', desc: 'Large home' },
  { value: '4bedroom', label: '4+ Bedroom', desc: 'Extra large home' },
];

export default function Step3Size({ formik }: StepProps) {
  const { values, errors, touched, setFieldValue } = formik;
  return (
    <div className="space-y-3">
      <div className="mb-1">
        <h3 className="text-base font-bold text-[#1E3A5F]">Move Size</h3>
        <p className="text-xs text-gray-500">Select the size that best describes your home.</p>
      </div>
      <div className="flex flex-col gap-2">
        {sizes.map((s) => {
          const active = values.moveSize === s.value;
          return (
            <button key={s.value} type="button" onClick={() => setFieldValue('moveSize', s.value)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-left text-sm transition-all ${active ? 'border-[#F97316] bg-[#F97316]/10' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
              <span className={`font-semibold ${active ? 'text-[#F97316]' : 'text-gray-800'}`}>{s.label}</span>
              <span className="text-xs text-gray-400">{s.desc}</span>
            </button>
          );
        })}
      </div>
      {touched.moveSize && errors.moveSize && <p className="text-xs text-red-500">{errors.moveSize}</p>}
    </div>
  );
}
