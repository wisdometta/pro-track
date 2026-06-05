'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface Props {
  formik: FormikProps<FormValues>;
}

export default function Step5Contact({ formik }: Props) {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Almost Done!</h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Where should we send your detailed quote? Our team will review your details and confirm availability.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F97316] outline-none transition-all ${
              touched.fullName && errors.fullName ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {touched.fullName && errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F97316] outline-none transition-all ${
                touched.phone && errors.phone ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {touched.phone && errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F97316] outline-none transition-all ${
                touched.email && errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
        Your information is secure and will never be shared.
      </div>
    </div>
  );
}
