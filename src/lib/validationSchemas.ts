import * as Yup from 'yup';

const phoneRegex = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
const zipRegex = /^\d{5}$/;

// Step 1: Build Your Move
export const step1Schema = Yup.object({
  moveSize: Yup.string()
    .oneOf(['studio', '1bedroom', '2bedroom', '3bedroom', '4bedroom', '5bedroom'], 'Select a move size')
    .required('Move size is required'),
  movers: Yup.number()
    .min(1, 'Select number of movers')
    .max(4, 'Select number of movers')
    .required('Number of movers is required'),
  hours: Yup.number()
    .min(2, 'Select estimated hours')
    .max(10, 'Select estimated hours')
    .required('Estimated hours is required'),
});

// Step 2: Move Logistics
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
    .required('Destination ZIP code is required'),
  needTruck: Yup.boolean(),
});

// Step 3: Property Access & Special Items
export const step3Schema = Yup.object({
  stairs: Yup.string()
    .oneOf(['none', 'pickup', 'dropoff', 'both'], 'Select stair situation')
    .required('Stair situation is required'),
  elevator: Yup.boolean(),
  heavyItems: Yup.array().of(Yup.string()),
});

// Step 4: View Estimated Quote (No validation needed, just display)
export const step4Schema = Yup.object({});

// Step 5: Contact Information
export const step5Schema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  phone: Yup.string()
    .matches(phoneRegex, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
});

export const stepSchemas = [
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  step5Schema,
];

export interface FormValues {
  moveSize: string;
  movers: number;
  hours: number;
  movingDate: string;
  preferredTime: string;
  pickupZip: string;
  dropoffZip: string;
  needTruck: boolean;
  stairs: string;
  elevator: boolean;
  heavyItems: string[];
  fullName: string;
  phone: string;
  email: string;
}

export const initialValues: FormValues = {
  moveSize: '1bedroom',
  movers: 2,
  hours: 3,
  movingDate: '',
  preferredTime: '',
  pickupZip: '',
  dropoffZip: '',
  needTruck: true,
  stairs: 'none',
  elevator: false,
  heavyItems: [],
  fullName: '',
  phone: '',
  email: '',
};
