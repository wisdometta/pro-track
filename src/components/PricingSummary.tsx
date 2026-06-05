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
    needTruck: values.needTruck,
    heavyItems: values.heavyItems,
  });

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block sticky top-24">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Live Quote Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Movers</span>
              <span className="font-medium text-gray-900">{values.movers}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Est. Hours</span>
              <span className="font-medium text-gray-900">{values.hours}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Truck Included</span>
              <span className="font-medium text-gray-900">{values.needTruck ? 'Yes' : 'No'}</span>
            </div>
            {values.heavyItems.length > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Heavy Items</span>
                <span className="font-medium text-gray-900">{values.heavyItems.length}</span>
              </div>
            )}
            <div className="border-t border-gray-100 pt-3 mt-3">
              <div className="flex justify-between items-end">
                <span className="text-gray-700 font-medium">Estimated Total</span>
                <span className="text-2xl font-bold text-[#F97316]">${estimate}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">*Final price confirmed by team</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: sticky bottom quote bar */}
      <div className="lg:hidden fixed bottom-[64px] left-0 right-0 bg-[#1E3A5F] shadow-[0_-4px_24px_rgba(0,0,0,0.15)] z-40">
        <div className="px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <span className="text-blue-200/80 text-xs block leading-none mb-1">Movers</span>
              <p className="font-bold text-white leading-none">{values.movers}</p>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div>
              <span className="text-blue-200/80 text-xs block leading-none mb-1">Hours</span>
              <p className="font-bold text-white leading-none">{values.hours}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-blue-200/80 text-xs block leading-none mb-1">Est. Total</span>
            <p className="font-bold text-[#F97316] text-lg leading-none">${estimate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
