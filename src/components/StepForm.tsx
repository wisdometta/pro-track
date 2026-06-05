'use client';

import { useState, useCallback } from 'react';
import { Formik, FormikProps } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import StepIndicator from './StepIndicator';
import PricingSummary from './PricingSummary';
import Step1BuildMove from './FormSteps/Step1BuildMove';
import Step2Logistics from './FormSteps/Step2Logistics';
import Step3Access from './FormSteps/Step3Access';
import Step4Quote from './FormSteps/Step4Quote';
import Step5Contact from './FormSteps/Step5Contact';
import { stepSchemas, initialValues, FormValues } from '@/lib/validationSchemas';
import { calculateEstimate, getMoveSizeLabel } from '@/lib/pricingEngine';

const TOTAL_STEPS = 5;

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export default function StepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  const handleSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setSubmitError('');

    const estimate = calculateEstimate({
      movers: values.movers,
      hours: values.hours,
      stairs: values.stairs,
      needTruck: values.needTruck,
      heavyItems: values.heavyItems,
    });

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS is not configured properly.');
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `New Moving Quote Request from ${values.fullName}`,
          request_summary: `Move Details:
- Date: ${values.movingDate} (${values.preferredTime})
- From ZIP: ${values.pickupZip}
- To ZIP: ${values.dropoffZip}
- Size: ${getMoveSizeLabel(values.moveSize)}
- Movers: ${values.movers}
- Est. Hours: ${values.hours}
- Need Truck: ${values.needTruck ? 'Yes' : 'No'}
- Stairs: ${values.stairs}
- Elevator: ${values.elevator ? 'Yes' : 'No'}
- Heavy Items: ${values.heavyItems.length > 0 ? values.heavyItems.join(', ') : 'None'}

Contact Info:
- Phone: ${values.phone}
- Email: ${values.email}

Estimated Cost Quoted: $${estimate}
`,
          email: values.email,
          name: values.fullName,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send request. Please try calling us instead.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStep = (formik: FormikProps<FormValues>) => {
    switch (currentStep) {
      case 0:
        return <Step1BuildMove formik={formik} />;
      case 1:
        return <Step2Logistics formik={formik} />;
      case 2:
        return <Step3Access formik={formik} />;
      case 3:
        return <Step4Quote formik={formik} />;
      case 4:
        return <Step5Contact formik={formik} />;
      default:
        return null;
    }
  };

  const validateAndNext = async (formik: FormikProps<FormValues>) => {
    const schema = stepSchemas[currentStep];
    try {
      await schema.validate(formik.values, { abortEarly: false });
      goNext();
    } catch (err) {
      const fieldNames = Object.keys(schema.describe().fields);
      const touchedFields: Record<string, boolean> = {};
      fieldNames.forEach((field) => {
        touchedFields[field] = true;
      });
      formik.setTouched({ ...formik.touched, ...touchedFields });
      formik.validateForm();
    }
  };

  const handleReset = useCallback(() => {
    setSubmitted(false);
    setCurrentStep(0);
    setDirection(1);
    setSubmitError('');
  }, []);

  if (submitted) {
    return (
      <section id="quote-form" className="py-20 px-4 sm:px-6 bg-gray-50">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Request Submitted!</h2>
          <p className="text-gray-600 max-w-sm mx-auto mb-8">
            We&apos;ve received your request. Our team will review your information and contact you shortly to confirm availability and provide your final quote.
          </p>
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-[#1E3A5F] text-white font-semibold rounded-xl hover:bg-[#162d4a] transition-colors shadow-sm"
          >
            Start a New Request
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-12 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
            Get Your <span className="text-[#F97316]">Moving Quote</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Build your move to see an instant estimate. No commitment required.
          </p>
        </motion.div>

        <Formik
          initialValues={initialValues}
          validationSchema={stepSchemas[currentStep]}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {(formik) => (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Form area */}
              <div className="flex-1 max-w-2xl mx-auto lg:mx-0 w-full">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-8">
                  <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

                  <div className="mt-4">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentStep}
                        custom={direction}
                        initial={{ opacity: 0, x: direction * 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction * -30 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        {renderStep(formik)}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="mt-8 flex items-center justify-between gap-3">
                    {currentStep > 0 ? (
                      <button
                        type="button"
                        onClick={goBack}
                        className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                      >
                        ← Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {currentStep < TOTAL_STEPS - 1 ? (
                      <button
                        type="button"
                        onClick={() => validateAndNext(formik)}
                        className="flex-1 sm:flex-none px-8 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#ea6c0a] transition-colors shadow-sm"
                      >
                        {currentStep === 2 ? 'Calculate My Quote' : currentStep === 3 ? 'Continue to Book' : 'Continue →'}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={() => formik.handleSubmit()}
                        disabled={submitting}
                        className="flex-1 sm:flex-none px-8 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#ea6c0a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Request My Move'
                        )}
                      </button>
                    )}
                  </div>

                  {submitError && (
                    <p className="mt-3 text-center text-sm text-red-500">{submitError}</p>
                  )}
                </div>
              </div>

              {/* Pricing summary sidebar — desktop only. Hidden on Quote and Contact steps. */}
              {currentStep < 3 && (
                <div className="hidden lg:block lg:w-72">
                  <PricingSummary values={formik.values} />
                </div>
              )}

              {/* Mobile estimate strip — sits at bottom, hidden on Quote step and Contact step */}
              {currentStep < 3 && (
                <div className="lg:hidden">
                  <PricingSummary values={formik.values} />
                </div>
              )}
            </div>
          )}
        </Formik>
      </div>
    </section>
  );
}
