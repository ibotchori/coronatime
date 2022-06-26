import * as yup from "yup";

export interface ResetPasswordInputTypes {
  email: string;
  backlink: string;
}

export const ResetPasswordSchema = yup
  .object({
    email: yup.string().email("emailMustValid").required("emailRequired"),
  })
  .required();
