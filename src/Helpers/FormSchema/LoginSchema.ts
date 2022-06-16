import * as yup from "yup";

export interface LoginInputTypes {
  userName: string;
  password: number;
}

export const LoginSchema = yup
  .object({
    userName: yup
      .string()
      .required("მომხმარებელი სავალდებულოა")
      .min(3, "სახელი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან.")
      .max(20, "სახელი არ უნდა აღემატებოდეს 20 სიმბოლოს."),
    password: yup.string().required("პაროლი სავალდებულოა"),
  })
  .required();
