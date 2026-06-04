'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface StepProps { formik: FormikProps<FormValues>; }

const stairsOptions = [
  { value: 'none', label: 'No Stairs' },
  { value: 'pickup', label: 'Pickup Only' },
  { value: 'dropoff', label: 'Dropoff Only' },
  { value: 'both', label: 'Both' },
];

const heavyItemOptions = ['Safe', 'Piano', 'Appliance', 'Other'];

const optBtn = (active: boolean) =>
  `px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${active ? 'border-[#F97316] bg-[#F97316]/10 text-[#F97316]' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}`;

export default function Step5Conditions({ formik }: StepProps) {
  const { values, errors, touched, setFieldValue } = formik;

  const toggleHeavyItem = (item: string) => {
    const curr = values.heavyItemTypes;
    setFieldValue('heavyItemTypes', curr.includes(item) ? curr.filter((i) => i !== item) : [...curr, item]);
  };

  return (
    <div className="space-y-3">
      <div className="mb-1">
        <h3 className="text-base font-bold text-[#1E3A5F]">Special Conditions</h3>
        <p className="text-xs text-gray-500">Let us know about any additional requirements.</p>
      </div>

      {/* Stairs */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Stairs Involved? <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-2 gap-2">
          {stairsOptions.map((opt) => (
            <button key={opt.value} type="button" onClick={() => setFieldValue('stairs', opt.value)}
              className={optBtn(values.stairs === opt.value)}>{opt.label}</button>
          ))}
        </div>
        {touched.stairs && errors.stairs && <p className="mt-0.5 text-xs text-red-500">{errors.stairs}</p>}
      </div>

      {/* Heavy items */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Heavy Items?</label>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={() => { setFieldValue('hasHeavyItems', false); setFieldValue('heavyItemTypes', []); }}
            className={optBtn(!values.hasHeavyItems)}>No</button>
          <button type="button" onClick={() => setFieldValue('hasHeavyItems', true)}
            className={optBtn(values.hasHeavyItems)}>Yes</button>
        </div>
      </div>

      {values.hasHeavyItems && (
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Which items?</label>
          <div className="grid grid-cols-2 gap-2">
            {heavyItemOptions.map((item) => (
              <button key={item} type="button" onClick={() => toggleHeavyItem(item)}
                className={optBtn(values.heavyItemTypes.includes(item))}>{item}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
