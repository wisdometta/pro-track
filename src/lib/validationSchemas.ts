import * as Yup from 'yup';

const phoneRegex = /^\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;

export const estimateSchema = Yup.object({
  startLocation: Yup.string().required('Starting location is required'),
  endLocation: Yup.string().required('Ending location is required'),
  movers: Yup.number().min(2).max(4).required('Number of movers is required'),
});

export const contactSchema = Yup.object({
  fullName: Yup.string().required('Full name is required'),
  phone: Yup.string()
    .matches(phoneRegex, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  movingDate: Yup.string().required('Moving date is required'),
});

export interface FormValues {
  startLocation: string;
  endLocation: string;
  movers: number;
  fullName: string;
  phone: string;
  email: string;
  movingDate: string;
}

export const initialValues: FormValues = {
  startLocation: '',
  endLocation: '',
  movers: 2,
  fullName: '',
  phone: '',
  email: '',
  movingDate: '',
};
