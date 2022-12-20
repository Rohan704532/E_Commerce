import Top from "../Top/Top"
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import "./Login.css"
import LoginDetails from '../../Login_details.json'
import { useNavigate } from "react-router-dom";

function Login() {

    let navigate= useNavigate();

    const CreateSchema = Yup.object().shape({
        Email : Yup.string().required('It cannot be blank').min(5,'It cannot be less than 5'),
        Password:Yup.string().required("It cannot be blank")
    })


    const[messages, setMessage] = useState({
        Email:'',
        Password:'',
    });


    const handleTaskSubmit = async(e)=>{
        navigate("/")
    };


    return (
        <>
            <div>
                <div className="Top">
                    <Top />
                </div>
            </div>

            <div className='createmain'>
                <div>
                    <h1 className='h1main'>Login</h1>
                    <Formik
                    validationSchema={CreateSchema}
                    initialValues={messages}>
                        {({ errors, touched }) => (
                            <Form className='createform'>
                                <label>
                                    Email
                                </label>
                                <Field name='Email' className='field' type='textarea'></Field>
                                {errors.Email && touched.Email ? <div>{errors.Email}</div> : null}
                                <label>
                                    Password
                                </label>
                                    <Field name="Password" className="field"></Field>
                                    {errors.Password && touched.Password ? <div>{errors.Password}</div> : null}
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='divform'>
                    <button onClick={handleTaskSubmit} type='submit' className='button1'>Submit</button>
                    <button className='button2' >Cancel</button>
                </div>
            </div>
        </>
    )
}

export default Login;