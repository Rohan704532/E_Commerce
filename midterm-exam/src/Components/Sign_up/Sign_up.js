import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import "./Sign_up.css"
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { signUpSchema } from './validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sign_up() {


    let navigate = useNavigate();
    const [messages] = useState({
        First_Name: '',
        Last_Name: '',
        Email: '',
        Password: '',
        C_Password: ''
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: messages,
        validationSchema: signUpSchema,
        onSubmit:  (values) => {
            console.log(values)
            fetch('http://localhost:3000/signUp',{
                method:"POST",
                headers:{
                    "Content-Type": 'application/json'
                },
                body:JSON.stringify(values)
            }).then((res)=>{
                res.json().then((data)=>{
                    console.log(data)
                    if(data.message==="User Created Successfully"){
                        localStorage.setItem("JWT", data.token);
                        navigate("/")
                        window.location.reload()
                    }else{
                        toast("User already exists")
                    }
                })
            })
        }
    })
    return (
        <>
            <div className='createmain'>
                <div>
                    <h1 className='h1main'>Sign Up</h1>
                    <Formik>
                        <Form onSubmit={handleSubmit} className='createform'>
                            <label>
                                First Name
                            </label>
                            <Field onChange={handleChange} onBlur={handleBlur} values={values.First_Name} name='First_Name' className='field' ></Field>
                            {errors.First_Name && touched.First_Name ? <div>{errors.First_Name}</div> : null}
                            <label>
                                Last Name
                            </label>
                            <Field onChange={handleChange} onBlur={handleBlur} values={values.Last_Name} name='Last_Name' className='field'></Field>
                            {errors.Last_Name && touched.Last_Name ? <div>{errors.Last_Name}</div> : null}
                            <label>
                                Email
                            </label>
                            <Field onChange={handleChange} onBlur={handleBlur} values={values.Email} name='Email' className='field' type='textarea'></Field>
                            {errors.Email && touched.Email ? <div>{errors.Email}</div> : null}
                            <label>
                                Password
                            </label>
                            <Field onChange={handleChange} onBlur={handleBlur}values={values.Password} name="Password" className="field"></Field>
                            {errors.Password && touched.Password ? <div>{errors.Password}</div> : null}
                            <label>
                                Confirm Password
                            </label>
                            <Field onChange={handleChange} onBlur={handleBlur}values={values.C_Password} name='C_Password' className='field'></Field>
                            {errors.C_Password && touched.C_Password ? <div>{errors.C_Password}</div> : null}
                            <div className='divform'>
                                <button type='submit' className='button1'>Sign In</button>
                                <button className='button2' >Cancel</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Sign_up