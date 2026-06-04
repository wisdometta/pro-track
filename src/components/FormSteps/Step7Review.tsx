'use client';

import { FormikProps } from 'formik';
import type { FormValues } from '@/lib/validationSchemas';
import { calculateEstimate, getMoveSizeLabel } from '@/lib/pricingEngine';

interface StepProps { formik: FormikProps<FormValues>; }

const timeLabels: Record<string, string> = {
  morning: 'Morning (8AM–12PM)',
  afternoon: 'Afternoon (12PM–5PM)',
  flexible: 'Flexible',
};

const truckLabels: Record<string, string> = {
  yes: 'Yes, need a truck',
  no: 'No, have my own',
  notSure: 'Not sure',
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-xs py-1 border-b border-gray-100 last:border-0">
    <span className="text-gray-500">{label}</span>
    <span className="font-semibold text-gray-800 text-right max-w-[55%] truncate">{value || '—'}</span>
  </div>
);

export default function Step7Review({ formik }: StepProps) {
  const { values } = formik;
  const estimate = calculateEstimate({ movers: values.movers, hours: values.hours, stairs: values.stairs, hasHeavyItems: values.hasHeavyItems });

  return (
    <div className="space-y-3">
      <div className="mb-1">
        <h3 className="text-base font-bold text-[#1E3A5F]">Review Your Request</h3>
        <p className="text-xs text-gray-500">Confirm everything looks correct before submitting.</p>
      </div>

      <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-0">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Contact</p>
        <Row label="Name" value={values.fullName} />
        <Row label="Phone" value={values.phone} />
        {values.email && <Row label="Email" value={values.email} />}
      </div>

      <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-0">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Move Details</p>
        <Row label="Date" value={values.movingDate} />
        <Row label="Time" value={timeLabels[values.preferredTime] || values.preferredTime} />
        <Row label="Pickup ZIP" value={values.pickupZip} />
        <Row label="Dropoff ZIP" value={values.dropoffZip} />
      </div>

      <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 space-y-0">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Move Info</p>
        <Row label="Size" value={getMoveSizeLabel(values.moveSize)} />
        <Row label="Movers" value={String(values.movers)} />
        <Row label="Hours" value={String(values.hours)} />
        <Row label="Stairs" value={values.stairs === 'none' ? 'None' : values.stairs} />
        <Row label="Truck" value={truckLabels[values.truckNeeded] || values.truckNeeded} />
      </div>

      <div className="flex items-center justify-between px-4 py-3 bg-[#1E3A5F] rounded-xl">
        <div>
          <p className="text-xs text-blue-300">Estimated Cost</p>
          <p className="text-xs text-blue-200">*Final price confirmed after review</p>
        </div>
        <p className="text-2xl font-bold text-[#F97316]">${estimate}</p>
      </div>
    </div>
  );
}
