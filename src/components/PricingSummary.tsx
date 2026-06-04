'use client';

import { calculateEstimate } from '@/lib/pricingEngine';
import type { FormValues } from '@/lib/validationSchemas';

interface PricingSummaryProps {
  values: FormValues;
}

export default function PricingSummary({ values }: PricingSummaryProps) {
  const estimate = calculateEstimate({
    movers: values.movers,
    hours: values.hours,
    stairs: values.stairs,
    hasHeavyItems: values.hasHeavyItems,
  });

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block sticky top-24">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Estimate Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Movers</span>
              <span className="font-medium text-gray-900">{values.movers}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Hours</span>
              <span className="font-medium text-gray-900">{values.hours}</span>
            </div>
            {values.stairs !== 'none' && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Stairs</span>
                <span className="font-medium text-gray-900 capitalize">{values.stairs}</span>
              </div>
            )}
            {values.hasHeavyItems && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Heavy Items</span>
                <span className="font-medium text-gray-900">Yes</span>
              </div>
            )}
            <div className="border-t border-gray-100 pt-3 mt-3">
              <div className="flex justify-between items-end">
                <span className="text-gray-700 font-medium">Estimated Cost</span>
                <span className="text-2xl font-bold text-[#F97316]">${estimate}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">*Final price may vary</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: compact estimate strip — sits ABOVE the nav buttons, not fixed */}
      <div className="lg:hidden mt-4 bg-[#1E3A5F] rounded-xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div>
            <span className="text-gray-400 text-xs">Movers</span>
            <p className="font-bold text-white">{values.movers}</p>
          </div>
          <div className="w-px h-7 bg-white/20" />
          <div>
            <span className="text-gray-400 text-xs">Hours</span>
            <p className="font-bold text-white">{values.hours}</p>
          </div>
          <div className="w-px h-7 bg-white/20" />
          <div>
            <span className="text-gray-400 text-xs">Est. Cost</span>
            <p className="font-bold text-[#F97316]">${estimate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
