'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface StepProps { formik: FormikProps<FormValues>; }

const truckOptions = [
  { value: 'yes', label: 'Yes, I need a truck' },
  { value: 'no', label: 'No, I have my own' },
  { value: 'notSure', label: "I'm not sure yet" },
];

export default function Step6Truck({ formik }: StepProps) {
  const { values, errors, touched, setFieldValue } = formik;
  return (
    <div className="space-y-3">
      <div className="mb-1">
        <h3 className="text-base font-bold text-[#1E3A5F]">Truck Requirement</h3>
        <p className="text-xs text-gray-500">Do you need us to provide a moving truck?</p>
      </div>
      <div className="flex flex-col gap-2">
        {truckOptions.map((opt) => {
          const active = values.truckNeeded === opt.value;
          return (
            <button key={opt.value} type="button" onClick={() => setFieldValue('truckNeeded', opt.value)}
              className={`w-full px-4 py-3 rounded-xl border text-left text-sm font-medium transition-all ${active ? 'border-[#F97316] bg-[#F97316]/10 text-[#F97316]' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}>
              {opt.label}
            </button>
          );
        })}
      </div>
      {touched.truckNeeded && errors.truckNeeded && <p className="text-xs text-red-500">{errors.truckNeeded}</p>}
    </div>
  );
}
