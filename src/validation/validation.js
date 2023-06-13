import * as Yup from "yup";

export const signup = Yup.object({
  fullname: Yup.string().min(3).max(15).required("please enter your fullname"),
  email: Yup.string()
    .email()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "please use a valid email"
    )
    .required("please enter your email"),
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "please use special characters"
    )
    .required("please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must match")
    .required("confirm password is required"),
});

export const signIn = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(8).required("please enter your password"),
});
