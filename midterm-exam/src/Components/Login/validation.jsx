import * as Yup from 'yup'


export const loginSchema = Yup.object({
    Email:Yup.string().email().required("Please enter your email"),
    Password: Yup.string().min(6).required("Please enetr your password")
})