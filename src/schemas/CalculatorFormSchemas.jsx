import * as yup from "yup";

export const calculatorFormSchema = yup.object().shape({
  amount: yup
    .number()
    .required("This field is required")
    .positive("Mortgage amount must be a positive number"),
  term: yup
    .number()
    .required("This field is required")
    .positive("Mortgage term must be a positive number"),
  interestRate: yup
    .number()
    .required("This field is required")
    .positive("Interest rate must be a positive number"),
  mtype: yup.string().required("This field is required"),
});
