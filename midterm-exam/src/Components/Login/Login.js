import React, { useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik'
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./validation";
import { toast } from 'react-toastify';

function Login() {

    let navigate = useNavigate();

    const [messages] = useState({
        Email: '',
        Password: '',
    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: messages,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            fetch('http://localhost:3000/login',{
                method:"POST",
                headers:{
                    "Content-Type": 'application/json'
                },
                body:JSON.stringify(values)
            }).then((res)=>{
                res.json().then((data)=>{
                    if(data.message==="Logged in successfully"){
                        localStorage.setItem("JWT", data.token);
                        navigate("/")
                        window.location.reload()
                    }else{
                        toast("User not present")
                    }
                })
            })
        }
    })

    return (
        <>
            <div className='createmain'>
                <div>
                    <h1 className='h1main'>Login</h1>
                    <Formik>
                        <Form onSubmit={handleSubmit} className='createform'>
                            <label>
                                Email
                            </label>
                            <Field onChange={handleChange} onBlur={handleBlur} values={values.Email} name='Email' className='field' type='textarea'></Field>
                            {errors.Email && touched.Email ? <div>{errors.Email}</div> : null}
                            <label>
                                Password
                            </label>
                            <Field onChange={handleChange} onBlur={handleBlur} values={values.Password} name="Password" className="field"></Field>
                            {errors.Password && touched.Password ? <div>{errors.Password}</div> : null}
                            <div className='divform'>
                                <button type='submit' className='button1'>Log In</button>
                                <button className='button2' >Cancel</button>
                            </div>
                        </Form>
                    </Formik>
                </div>

            </div>
        </>
    )
}

export default Login;