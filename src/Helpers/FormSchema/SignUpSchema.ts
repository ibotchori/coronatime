import * as yup from "yup";

export interface SignUpInputTypes {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpSchema = yup
  .object({
    userName: yup
      .string()
      .required("usernameRequired")
      .min(3, "usernameAtLeast")
      .max(20, "usernameMax"),
    email: yup.string().email("emailMustValid").required("emailRequired"),
    password: yup
      .string()
      .required("passwordRequired")
      .min(3, "passwordAtLeast")
      .max(20, "passwordMax"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "passwordMatch"),
  })
  .required();
