import Top from "../Top/Top"
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import "./Sign_up.css"
import { useNavigate } from "react-router-dom";

function Sign_up() {

    let navigate= useNavigate();

    const CreateSchema = Yup.object().shape({
        First_Name:Yup.string().required("It cannot be blank").max(15,'Task name is too long'),
        Last_Name : Yup.string().required("It cannot be blank"),
        Email : Yup.string().required('It cannot be blank').min(5,'It cannot be less than 5'),
        C_Password:Yup.string().required("It cannot be blank")
    })


    const[messages, setMessage] = useState({
        First_Name:'',
        Last_Name:'',
        Email:'',
        Password:'',
        C_Password:''
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
                    <h1 className='h1main'>Sign Up</h1>
                    <Formik
                    validationSchema={CreateSchema}
                    initialValues={messages}>
                        {({ errors, touched }) => (
                            <Form className='createform'>
                                <label>
                                    First Name
                                </label>
                                <Field name='First_Name' className='field' ></Field>
                                {errors.First_Name && touched.First_Name ? <div>{errors.First_Name}</div> : null}
                                <label>
                                    Last Name
                                </label>
                                <Field name='Last_Name' className='field'></Field>
                                {errors.Last_Name && touched.Last_Name ? <div>{errors.Last_Name}</div> : null}
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
                                <label>
                                    Confirm Password
                                </label>
                                <Field name='Tags' className='field'></Field>
                                {errors.C_Password && touched.C_Password ? <div>{errors.C_Password}</div> : null}
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

export default Sign_up