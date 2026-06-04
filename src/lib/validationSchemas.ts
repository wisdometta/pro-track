import * as Yup from 'yup';

const phoneRegex = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
const zipRegex = /^\d{5}$/;

export const step1Schema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  phone: Yup.string()
    .matches(phoneRegex, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Enter a valid email'),
});

export const step2Schema = Yup.object({
  movingDate: Yup.string().required('Moving date is required'),
  preferredTime: Yup.string()
    .oneOf(['morning', 'afternoon', 'flexible'], 'Select a preferred time')
    .required('Preferred time is required'),
  pickupZip: Yup.string()
    .matches(zipRegex, 'Enter a valid 5-digit ZIP code')
    .required('Pickup ZIP code is required'),
  dropoffZip: Yup.string()
    .matches(zipRegex, 'Enter a valid 5-digit ZIP code')
    .required('Dropoff ZIP code is required'),
});

export const step3Schema = Yup.object({
  moveSize: Yup.string()
    .oneOf(['studio', '1bedroom', '2bedroom', '3bedroom', '4bedroom'], 'Select a move size')
    .required('Move size is required'),
});

export const step4Schema = Yup.object({
  movers: Yup.number()
    .min(1, 'At least 1 mover required')
    .max(4, 'Maximum 4 movers')
    .required('Number of movers is required'),
  hours: Yup.number()
    .min(1, 'At least 1 hour required')
    .max(12, 'Maximum 12 hours')
    .required('Estimated hours is required'),
});

export const step5Schema = Yup.object({
  stairs: Yup.string()
    .oneOf(['none', 'pickup', 'dropoff', 'both'], 'Select an option')
    .required('Stairs option is required'),
  hasHeavyItems: Yup.boolean().required(),
  heavyItemTypes: Yup.array().of(Yup.string()),
});

export const step6Schema = Yup.object({
  truckNeeded: Yup.string()
    .oneOf(['yes', 'no', 'notSure'], 'Select an option')
    .required('Truck requirement is required'),
});

export const step7Schema = Yup.object({});

export const stepSchemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
  step6Schema,
  step7Schema,
];

export interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  movingDate: string;
  preferredTime: string;
  pickupZip: string;
  dropoffZip: string;
  moveSize: string;
  movers: number;
  hours: number;
  stairs: string;
  hasHeavyItems: boolean;
  heavyItemTypes: string[];
  truckNeeded: string;
}

export const initialValues: FormValues = {
  fullName: '',
  phone: '',
  email: '',
  movingDate: '',
  preferredTime: '',
  pickupZip: '',
  dropoffZip: '',
  moveSize: '',
  movers: 2,
  hours: 3,
  stairs: 'none',
  hasHeavyItems: false,
  heavyItemTypes: [],
  truckNeeded: '',
};
