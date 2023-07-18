import * as Yup from 'yup'


export const signUpSchema = Yup.object({
    First_Name: Yup.string().min(2).max(25).required("Please enter your name"),
    Last_Name: Yup.string().min(2).max(25).required("Please enter your name"),
    Email:Yup.string().email().required("Please enter your email"),
    Password: Yup.string().min(6).required("Please enetr your password"),
    C_Password: Yup.string().required("Required").oneOf([Yup.ref('Password'),null],"Password must match")
})