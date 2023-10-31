import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import './log.css';
import swal from 'sweetalert';

const LoginForm = () => {
  let navigate = useNavigate();
  function xyz(){
    window.location.href="http://localhost:3001/register"
  }
  const initialValues = {
    email: '',
    password: '',
  };
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = (values) => {
    // axios.get('http://localhost:3000/users')
    // {
      fetch('http://localhost:8080/auth/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify(values),
    })
  
    .then((response) => {
      if (response.ok) {
        setLoggedIn(true);
        swal("You have Logged in Successfully" ,{icon:"success"})
        // Redirect to a login page
      navigate("/homepage");
        return response.text();
      } else {
        setLoggedIn(false);
        swal("Invalid Credentials" ,{icon:"warning"})
      }
  })
  .then((token) => {
    localStorage.setItem('token', token);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  
  });
  };
  return (
    <div className='abc'>
      <h2 className='pqr'>Login Form</h2>
      {loggedIn ? (
        <p>You are logged in Successfully. Welcome to PayPal</p>
      ) : (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className='tuv'>
              <Field  type="email" id="email" placeholder="Enter your email" name="email"  required autocomplete="off"/>
            </div>
            <div className='tuv1'> 
              <Field  type="password" id="password" name="password" placeholder="Enter your Password" required autocomplete="off"/>
            </div>
            <div className='def'>
              <button type="submit" className="btn btn-success" > Login</button>
            </div>
            <button className='bt'  onClick={xyz} >Click me for Registration</button>
          </Form>
        </Formik>
      )}
     
    </div>
  );
};
export default LoginForm;