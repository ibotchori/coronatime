import * as yup from "yup";

export interface NewPasswordInputTypes {
  password: string;
  repeatPassword: string;
  hash: string;
}

export const NewPasswordSchema = yup
  .object({
    password: yup
      .string()
      .required("passwordRequired")
      .min(3, "passwordAtLeast")
      .max(20, "passwordMax"),
    repeatPassword: yup.string().oneOf([yup.ref("password")], "passwordMatch"),
  })
  .required();
