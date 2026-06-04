'use client';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ['Contact', 'Details', 'Size', 'Labor', 'Conditions', 'Truck', 'Review'];

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full">
      {/* Step counter + label */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">
          Step <span className="text-[#1E3A5F] font-bold">{currentStep + 1}</span> of {totalSteps}
        </span>
        <span className="text-sm font-semibold text-[#F97316]">
          {stepLabels[currentStep]}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-[#F97316] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Desktop: dot indicators */}
      <div className="hidden sm:flex items-center justify-between mt-3 px-1">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i < currentStep
                  ? 'bg-[#F97316] text-white'
                  : i === currentStep
                  ? 'bg-[#1E3A5F] text-white ring-4 ring-[#1E3A5F]/15'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {i < currentStep ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className={`text-[10px] font-medium ${i <= currentStep ? 'text-[#1E3A5F]' : 'text-gray-400'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
