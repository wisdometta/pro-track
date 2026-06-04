'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface StepProps { formik: FormikProps<FormValues>; }

const field = (touched: boolean | undefined, error: string | undefined) =>
  `w-full px-4 py-2.5 rounded-xl border ${touched && error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'} text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 focus:border-[#F97316] transition-all`;

export default function Step1Contact({ formik }: StepProps) {
  const { values, errors, touched, handleChange, handleBlur } = formik;
  return (
    <div className="space-y-3">
      <div className="mb-1">
        <h3 className="text-base font-bold text-[#1E3A5F]">Contact Information</h3>
        <p className="text-xs text-gray-500">How can we reach you about your move?</p>
      </div>
      <div>
        <label htmlFor="fullName" className="block text-xs font-semibold text-gray-600 mb-1">Full Name <span className="text-red-500">*</span></label>
        <input id="fullName" name="fullName" type="text" placeholder="John Smith"
          value={values.fullName} onChange={handleChange} onBlur={handleBlur}
          className={field(touched.fullName, errors.fullName)} />
        {touched.fullName && errors.fullName && <p className="mt-0.5 text-xs text-red-500">{errors.fullName}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1">Phone <span className="text-red-500">*</span></label>
        <input id="phone" name="phone" type="tel" placeholder="(555) 123-4567"
          value={values.phone} onChange={handleChange} onBlur={handleBlur}
          className={field(touched.phone, errors.phone)} />
        {touched.phone && errors.phone && <p className="mt-0.5 text-xs text-red-500">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1">Email <span className="text-gray-400 font-normal">(optional)</span></label>
        <input id="email" name="email" type="email" placeholder="john@example.com"
          value={values.email} onChange={handleChange} onBlur={handleBlur}
          className={field(touched.email, errors.email)} />
        {touched.email && errors.email && <p className="mt-0.5 text-xs text-red-500">{errors.email}</p>}
      </div>
    </div>
  );
}
