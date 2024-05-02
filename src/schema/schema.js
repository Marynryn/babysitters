import * as yup from "yup";

export const authSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be no more than 32 characters")
    .matches(
      /^[a-zA-Zа-яА-Я0-9\s]*$/,
      "Name can only contain letters, numbers, and spaces"
    ),
  email: yup
    .string()
    .trim()
    .email()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,
      "Invalid password format"
    )
    .min(6, "Password must be at least 8 characters")
    .max(64, "Password must be no more than 64 characters")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),
});
export const schema = yup.object().shape({
  address: yup.string().required(),
  phone: yup
    .string()
    .matches(/^[0-9]{5,15}$/, "Phone number must be between 5 and 15 digits")
    .required(),
  age: yup
    .number()
    .min(1, "Age must be at least 1")
    .max(18, "Age must be less than 100")
    .required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  comment: yup.string(),
  meetingTime: yup.object().required(),
});
