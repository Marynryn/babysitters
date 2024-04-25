import * as yup from 'yup';

export const Schema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be no more than 32 characters')
    .matches(
      /^[a-zA-Z0-9\s]*$/,
      'Name can only contain letters, numbers, and spaces'
    )
    .required('Name is required'),
  email: yup
    .string()
    .trim()
    .email('Invalid email format')
    .required('Email is required'),
  bookingDate: yup
    .date()
    .nullable()
    .required('Booking date is required')
    .min(new Date(), 'Booking date must be in the future'),
});
