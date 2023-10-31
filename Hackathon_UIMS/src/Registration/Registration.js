import { useFormik } from 'formik';
import * as yup from 'yup'
import React from 'react'
import './regis.css';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

export default function Registration() { 
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            email: '',
            mobileno: '',
            accountno: '',
            password: '',
            confirmpassword: ''
        },
        onSubmit: values => {
            fetch('http://localhost:8080/api/v1/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {swal("You have Registered Successfully. Redirecting to Login page" ,{icon:"success"})
                navigate("/login");
                    
            })
            .catch(error => {
                console.error('Registration failed:', error);
                swal("Email Id already exist" ,{icon:"warning"})
            })

        },
       
        validationSchema: yup.object().shape({
            name: yup.string()
                .min(3, 'Name is too short')
                .max(10, 'Name is too long')
                .matches(/^[A-Za-z ]*$/, 'Please do not input number')
                .required('Name cannot be left blank'),
            address: yup.string()
                .min(3, 'Address is too short')
                .required('Address cannot be left blank'),
            email: yup.string()
                .email('Please use valid email id format(xxx@xx.com)')
                .required('Email cannot be left blank'),
            mobileno: yup.string()
                .min(10, 'Mobile no must be of 10 digits')
                .required('Mobile no cannot be left blank'),
            accountno: yup.string()
                .min(10, 'Account no must be of 10 digits')
                .max(10, 'Account no must be of 10 digits')
                .required('Account no cannot be left blank'),
            password: yup.string()
                .min(4, 'Password is too short')
                .max(20, 'Password is too long')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    "Password must Contain 8 to 20 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                  )
                .required('Password cannot be left blank'),
            confirmpassword: yup.string()
                .required('Confirm Password cannot be left blank')
                .test('confirmpassword', 'Password & confirm password should be same', function(cpass){
                    if(this.parent.password===cpass){
                        return true;
                    }
                    return false;
                })
        }),
    });
    return (
        <section className='secr'>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="py-3 text-center rounded">
                        <h2>Sign Up</h2>
                        <h6>All fields are manadatory*</h6>
                    </div>
                    <form onSubmit={formik.handleSubmit} >
                        <div className="mt-2">
                            <input id="name" name="name" type="text" value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Enter your Name (*)" autocomplete="off" />
                            {formik.errors.name && formik.touched.name ? <span className="text-danger">{formik.errors.name}*</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="address" name="address" type="text" value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Enter your address" autocomplete="off"/>
                            {formik.errors.address && formik.touched.address ? <span className="text-danger">{formik.errors.address}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="email" name="email" type="text" value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Enter your Email" autocomplete="off"/>
                            {formik.errors.email && formik.touched.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="mobileno" name="mobileno" type="text" value={formik.values.mobileno} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Enter your Mobile number" autocomplete="off"/>
                            {formik.errors.mobileno && formik.touched.mobileno ? <span className="text-danger">{formik.errors.mobileno}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="accountno" name="accountno" type="text" value={formik.values.accountno} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Enter your Account number" autocomplete="off"/>
                            {formik.errors.accountno && formik.touched.accountno ? <span className="text-danger">{formik.errors.accountno}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Enter your Password" autocomplete="off"/>
                            {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="confirmpassword" name="confirmpassword" type="password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Confirm your Password" autocomplete="off"/>
                            {formik.errors.confirmpassword && formik.touched.confirmpassword ? <span className="text-danger">{formik.errors.confirmpassword}</span> : null}
                        </div>

                        <div className="mt-2 text-center">
                            <button type="submit" className="btn btn-success">Submit</button>

                            
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </form>
                 
                </div>
            </div>
        </div>
        </section>
    )
}