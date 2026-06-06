'use client';

import { useState, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { initialValues, estimateSchema, contactSchema, FormValues } from '@/lib/validationSchemas';
import { calculateEstimate } from '@/lib/pricingEngine';

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
    setCurrentStep(1);
  }, []);

  const goBack = useCallback(() => {
    setDirection(-1);
    setCurrentStep(0);
  }, []);

  const handleSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setSubmitError('');

    const estimate = calculateEstimate(values.startLocation, values.endLocation, values.movers);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS is not configured properly.');
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: `New Booking Request from ${values.fullName}`,
          request_summary: `Move Details:
- Date: ${values.movingDate}
- From: ${values.startLocation}
- To: ${values.endLocation}
- Movers: ${values.movers}
- Est. Distance: ~${estimate?.distance} miles
- Est. Duration: ${estimate?.hours} hours

Contact Info:
- Phone: ${values.phone}
- Email: ${values.email}

Total Estimated Cost: $${estimate?.total}
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

  const validateAndNext = async (formik: FormikProps<FormValues>) => {
    try {
      await estimateSchema.validate(formik.values, { abortEarly: false });
      goNext();
    } catch (err: any) {
      const touchedFields: Record<string, boolean> = { startLocation: true, endLocation: true, movers: true };
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
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">Booking Requested!</h2>
          <p className="text-gray-600 max-w-sm mx-auto mb-8">
            We&apos;ve received your request. Our team will review your information and contact you shortly to confirm your moving date and exact details.
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
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
            Book Your <span className="text-[#F97316]">Move</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Get your instant transparent quote and lock in your moving date.
          </p>
        </motion.div>

        <Formik
          initialValues={initialValues}
          validationSchema={currentStep === 0 ? estimateSchema : contactSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {(formik) => {
            const estimate = calculateEstimate(formik.values.startLocation, formik.values.endLocation, formik.values.movers);

            return (
              <Form className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-6 sm:p-10">
                {/* Simple 2-Step Indicator */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className={`flex items-center gap-2 ${currentStep >= 0 ? 'text-[#F97316]' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 0 ? 'bg-[#F97316] text-white' : 'bg-gray-100 text-gray-400'}`}>1</div>
                    <span className="font-semibold text-sm hidden sm:block">Estimate</span>
                  </div>
                  <div className={`w-12 h-0.5 ${currentStep >= 1 ? 'bg-[#F97316]' : 'bg-gray-200'}`} />
                  <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-[#F97316]' : 'text-gray-400'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${currentStep >= 1 ? 'bg-[#F97316] text-white' : 'bg-gray-100 text-gray-400'}`}>2</div>
                    <span className="font-semibold text-sm hidden sm:block">Book</span>
                  </div>
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -30 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    {/* STEP 1: Locations & Estimate */}
                    {currentStep === 0 && (
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Starting Location</label>
                            <Field
                              name="startLocation"
                              placeholder="e.g. 123 Main St, City, Zip"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                            />
                            <ErrorMessage name="startLocation" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Ending Location</label>
                            <Field
                              name="endLocation"
                              placeholder="e.g. 456 Oak Ave, City, Zip"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 outline-none transition-all"
                            />
                            <ErrorMessage name="endLocation" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Number of Movers</label>
                          <div className="grid grid-cols-3 gap-3">
                            {[2, 3, 4].map((num) => (
                              <button
                                type="button"
                                key={num}
                                onClick={() => formik.setFieldValue('movers', num)}
                                className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200 ${
                                  formik.values.movers === num
                                    ? 'border-[#F97316] bg-[#F97316]/5'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                              >
                                <span className={`font-bold ${formik.values.movers === num ? 'text-[#F97316]' : 'text-[#1E3A5F]'}`}>{num} Movers</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {estimate && (
                          <div className="bg-[#1E3A5F] rounded-2xl p-6 text-white mt-6 shadow-md">
                            <h4 className="text-blue-200 text-sm font-semibold mb-2 uppercase tracking-wide">Instant Estimate</h4>
                            <div className="flex items-baseline gap-2 mb-4">
                              <span className="text-5xl font-bold">${estimate.total}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-blue-100">
                              <div>
                                <span className="block text-blue-300 text-xs">Estimated Hours</span>
                                <span className="font-semibold">{estimate.hours} hours</span>
                              </div>
                              <div>
                                <span className="block text-blue-300 text-xs">Hourly Rate</span>
                                <span className="font-semibold">${estimate.movers * 50}/hr</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* STEP 2: Contact Info */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        {estimate && (
                          <div className="bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl p-4 mb-6 flex justify-between items-center">
                            <div>
                              <p className="text-sm text-[#F97316] font-bold">Your Estimate</p>
                              <p className="text-xs text-gray-600">From {formik.values.startLocation} to {formik.values.endLocation}</p>
                            </div>
                            <span className="text-2xl font-bold text-[#1E3A5F]">${estimate.total}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Full Name</label>
                            <Field
                              name="fullName"
                              placeholder="John Doe"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] outline-none transition-all"
                            />
                            <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Moving Date</label>
                            <Field
                              name="movingDate"
                              type="date"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] outline-none transition-all text-[#1E3A5F]"
                            />
                            <ErrorMessage name="movingDate" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email Address</label>
                            <Field
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] outline-none transition-all"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Phone Number</label>
                            <Field
                              name="phone"
                              placeholder="(555) 123-4567"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F97316] outline-none transition-all"
                            />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-10 flex items-center justify-between gap-3 pt-6 border-t border-gray-100">
                  {currentStep === 1 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep === 0 ? (
                    <button
                      type="button"
                      onClick={() => validateAndNext(formik)}
                      className="flex-1 sm:flex-none px-8 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#ea6c0a] transition-colors shadow-sm"
                    >
                      Continue to Book →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex-1 sm:flex-none px-8 py-3 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#ea6c0a] transition-colors disabled:opacity-50 flex justify-center"
                    >
                      {submitting ? 'Submitting...' : 'Request My Move'}
                    </button>
                  )}
                </div>

                {submitError && (
                  <p className="mt-4 text-center text-sm text-red-500 bg-red-50 p-3 rounded-lg">{submitError}</p>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}
