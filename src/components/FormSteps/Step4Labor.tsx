'use client';

import { useEffect } from 'react';
import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';
import { calculateEstimate, getSuggestedHours } from '@/lib/pricingEngine';

interface StepProps { formik: FormikProps<FormValues>; }

const btnActive = 'border-[#F97316] bg-[#F97316]/10 text-[#F97316]';
const btnInactive = 'border-gray-200 bg-white text-gray-600 hover:border-gray-300';

export default function Step4Labor({ formik }: StepProps) {
  const { values, errors, touched, setFieldValue } = formik;

  const estimate = calculateEstimate({
    movers: values.movers, hours: values.hours,
    stairs: values.stairs, hasHeavyItems: values.hasHeavyItems,
  });

  useEffect(() => {
    if (values.moveSize) setFieldValue('hours', getSuggestedHours(values.moveSize));
  }, [values.moveSize]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-3">
      <div className="mb-1">
        <h3 className="text-base font-bold text-[#1E3A5F]">Labor Estimate</h3>
        <p className="text-xs text-gray-500">Choose movers and hours.</p>
      </div>

      {/* Movers */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Number of Movers <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((n) => (
            <button key={n} type="button" onClick={() => setFieldValue('movers', n)}
              className={`py-2.5 rounded-xl border text-center font-bold text-sm transition-all ${values.movers === n ? btnActive : btnInactive}`}>
              {n}
            </button>
          ))}
        </div>
        {touched.movers && errors.movers && <p className="mt-0.5 text-xs text-red-500">{errors.movers}</p>}
      </div>

      {/* Hours */}
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Estimated Hours <span className="text-red-500">*</span></label>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => values.hours > 1 && setFieldValue('hours', values.hours - 1)}
            className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 flex items-center justify-center text-lg font-bold hover:border-gray-300 transition-colors">−</button>
          <input id="hours" name="hours" type="number" min={1} max={12} value={values.hours}
            onChange={(e) => setFieldValue('hours', Math.min(12, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-16 text-center px-2 py-2 rounded-xl border border-gray-200 bg-white text-gray-900 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all" />
          <button type="button" onClick={() => values.hours < 12 && setFieldValue('hours', values.hours + 1)}
            className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 flex items-center justify-center text-lg font-bold hover:border-gray-300 transition-colors">+</button>
          <span className="text-sm text-gray-500">hrs</span>
        </div>
        {touched.hours && errors.hours && <p className="mt-0.5 text-xs text-red-500">{errors.hours}</p>}
      </div>

      {/* Estimate */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1E3A5F]/5 rounded-xl border border-[#1E3A5F]/10">
        <div>
          <p className="text-xs text-gray-500">Estimated Cost</p>
          <p className="text-xs text-gray-400">{values.movers} mover{values.movers > 1 ? 's' : ''} × {values.hours} hr × $50/hr</p>
        </div>
        <p className="text-2xl font-bold text-[#F97316]">${estimate}</p>
      </div>
    </div>
  );
}
