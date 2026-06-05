'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';

interface Props {
  formik: FormikProps<FormValues>;
}

export default function Step2Logistics({ formik }: Props) {
  const { values, handleChange, handleBlur, setFieldValue, errors, touched } = formik;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[#1E3A5F] mb-6">Move Logistics</h3>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Date */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Target Moving Date
          </label>
          <input
            type="date"
            name="movingDate"
            value={values.movingDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F97316] outline-none transition-all ${
              touched.movingDate && errors.movingDate ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {touched.movingDate && errors.movingDate && (
            <p className="mt-1 text-xs text-red-500">{errors.movingDate}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Start Time
          </label>
          <select
            name="preferredTime"
            value={values.preferredTime}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F97316] outline-none transition-all ${
              touched.preferredTime && errors.preferredTime ? 'border-red-500' : 'border-gray-200'
            }`}
          >
            <option value="" disabled>Select a time</option>
            <option value="morning">Morning (8am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 4pm)</option>
            <option value="flexible">I&apos;m flexible</option>
          </select>
          {touched.preferredTime && errors.preferredTime && (
            <p className="mt-1 text-xs text-red-500">{errors.preferredTime}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Pickup ZIP */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Pickup ZIP Code
          </label>
          <input
            type="text"
            name="pickupZip"
            placeholder="e.g. 90210"
            value={values.pickupZip}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={5}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F97316] outline-none transition-all ${
              touched.pickupZip && errors.pickupZip ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {touched.pickupZip && errors.pickupZip && (
            <p className="mt-1 text-xs text-red-500">{errors.pickupZip}</p>
          )}
        </div>

        {/* Dropoff ZIP */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Destination ZIP Code
          </label>
          <input
            type="text"
            name="dropoffZip"
            placeholder="e.g. 90028"
            value={values.dropoffZip}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={5}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#F97316] outline-none transition-all ${
              touched.dropoffZip && errors.dropoffZip ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {touched.dropoffZip && errors.dropoffZip && (
            <p className="mt-1 text-xs text-red-500">{errors.dropoffZip}</p>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Do you need us to provide a moving truck?
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFieldValue('needTruck', true)}
            className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium flex items-center justify-center gap-2 transition-all ${
              values.needTruck
                ? 'border-[#F97316] bg-[#F97316]/5 text-[#F97316]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            Yes, provide a truck
          </button>
          <button
            type="button"
            onClick={() => setFieldValue('needTruck', false)}
            className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium flex items-center justify-center gap-2 transition-all ${
              !values.needTruck
                ? 'border-[#1E3A5F] bg-[#1E3A5F]/5 text-[#1E3A5F]'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            No, labor only
          </button>
        </div>
      </div>
    </div>
  );
}
