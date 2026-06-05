'use client';

import { FormikProps } from 'formik';
import { motion } from 'framer-motion';
import type { FormValues } from '@/lib/validationSchemas';
import { calculateEstimate } from '@/lib/pricingEngine';

interface Props {
  formik: FormikProps<FormValues>;
}

export default function Step4Quote({ formik }: Props) {
  const { values } = formik;

  const estimate = calculateEstimate({
    movers: values.movers,
    hours: values.hours,
    stairs: values.stairs,
    needTruck: values.needTruck,
    heavyItems: values.heavyItems,
  });

  const laborCost = values.movers * values.hours * 50;
  const truckFee = values.needTruck ? 150 : 0;
  const stairsFee = values.stairs === 'both' ? 50 : (values.stairs !== 'none' ? 25 : 0);
  const heavyFee = values.heavyItems.length * 50;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">Your Estimated Quote</h3>
        <p className="text-gray-500 text-sm">
          Based on your move details, here is a preliminary breakdown.
        </p>
      </div>

      <motion.div
        className="bg-gradient-to-br from-[#1E3A5F] to-[#0d1f3c] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Decorative background element */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#F97316] rounded-full blur-3xl opacity-20 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center mb-8">
          <span className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">Estimated Total</span>
          <div className="text-5xl sm:text-6xl font-bold text-white mb-1">
            ${estimate}
          </div>
          <span className="text-blue-200/80 text-sm">Ballpark Range: ${Math.round(estimate * 0.9)} - ${Math.round(estimate * 1.15)}</span>
        </div>

        <div className="space-y-4 bg-white/10 rounded-xl p-5 border border-white/10 relative z-10">
          <div className="flex justify-between items-center text-sm">
            <span className="text-blue-100">Labor ({values.movers} movers × {values.hours} hrs)</span>
            <span className="font-semibold">${laborCost}</span>
          </div>
          
          {truckFee > 0 && (
            <>
              <div className="border-t border-white/10" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-100">Truck Fee</span>
                <span className="font-semibold">${truckFee}</span>
              </div>
            </>
          )}

          {stairsFee > 0 && (
            <>
              <div className="border-t border-white/10" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-100">Stairs Surcharge</span>
                <span className="font-semibold">${stairsFee}</span>
              </div>
            </>
          )}

          {heavyFee > 0 && (
            <>
              <div className="border-t border-white/10" />
              <div className="flex justify-between items-center text-sm">
                <span className="text-blue-100">Heavy Items ({values.heavyItems.length})</span>
                <span className="font-semibold">${heavyFee}</span>
              </div>
            </>
          )}
        </div>
      </motion.div>

      <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-xs flex items-start gap-3 leading-relaxed">
        <svg className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p>
          <strong>Disclaimer:</strong> This estimate is provided for planning purposes based on the information provided. Final pricing will be confirmed by our team after reviewing your specific inventory and property access details.
        </p>
      </div>
    </div>
  );
}
