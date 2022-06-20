import * as yup from "yup";

export interface SignUpInputTypes {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  redirectOnConfirm: string;
}

export const SignUpSchema = yup
  .object({
    username: yup
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
    repeatPassword: yup.string().oneOf([yup.ref("password")], "passwordMatch"),
  })
  .required();
