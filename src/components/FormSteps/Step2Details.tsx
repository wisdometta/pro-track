'use client';

import { useState, useEffect } from 'react';
import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface StepProps { formik: FormikProps<FormValues>; }

const timeOptions = [
  { value: 'morning', label: 'Morning (8AM–12PM)' },
  { value: 'afternoon', label: 'Afternoon (12PM–5PM)' },
  { value: 'flexible', label: 'Flexible' },
];

const btnClass = (active: boolean) =>
  `w-full px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${active
    ? 'border-[#F97316] bg-[#F97316]/10 text-[#F97316]'
    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}`;

export default function Step2Details({ formik }: StepProps) {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue } = formik;
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  return (
    <div className="space-y-3">
      <div className="mb-1">
        <h3 className="text-base font-bold text-[#1E3A5F]">Move Details</h3>
        <p className="text-xs text-gray-500">When and where are you moving?</p>
      </div>
      <div>
        <label htmlFor="movingDate" className="block text-xs font-semibold text-gray-600 mb-1">Moving Date <span className="text-red-500">*</span></label>
        <input id="movingDate" name="movingDate" type="date"
          min={minDate}
          value={values.movingDate} onChange={handleChange} onBlur={handleBlur}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm ${touched.movingDate && errors.movingDate ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'} text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all`} />
        {touched.movingDate && errors.movingDate && <p className="mt-0.5 text-xs text-red-500">{errors.movingDate}</p>}
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Preferred Time <span className="text-red-500">*</span></label>
        <div className="flex flex-col gap-2">
          {timeOptions.map((opt) => (
            <button key={opt.value} type="button" onClick={() => setFieldValue('preferredTime', opt.value)}
              className={btnClass(values.preferredTime === opt.value)}>
              {opt.label}
            </button>
          ))}
        </div>
        {touched.preferredTime && errors.preferredTime && <p className="mt-0.5 text-xs text-red-500">{errors.preferredTime}</p>}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="pickupZip" className="block text-xs font-semibold text-gray-600 mb-1">Pickup ZIP <span className="text-red-500">*</span></label>
          <input id="pickupZip" name="pickupZip" type="text" placeholder="10001" maxLength={5}
            value={values.pickupZip} onChange={handleChange} onBlur={handleBlur}
            className={`w-full px-3 py-2.5 rounded-xl border text-sm ${touched.pickupZip && errors.pickupZip ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'} text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all`} />
          {touched.pickupZip && errors.pickupZip && <p className="mt-0.5 text-xs text-red-500">{errors.pickupZip}</p>}
        </div>
        <div>
          <label htmlFor="dropoffZip" className="block text-xs font-semibold text-gray-600 mb-1">Dropoff ZIP <span className="text-red-500">*</span></label>
          <input id="dropoffZip" name="dropoffZip" type="text" placeholder="10002" maxLength={5}
            value={values.dropoffZip} onChange={handleChange} onBlur={handleBlur}
            className={`w-full px-3 py-2.5 rounded-xl border text-sm ${touched.dropoffZip && errors.dropoffZip ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'} text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all`} />
          {touched.dropoffZip && errors.dropoffZip && <p className="mt-0.5 text-xs text-red-500">{errors.dropoffZip}</p>}
        </div>
      </div>
    </div>
  );
}
