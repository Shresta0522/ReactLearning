import React from 'react'
import './Login.css';
import FormInput from './FormInput';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username:"",
    password:"",
  });

  const inputs =[
    {
    id:1,
    name: "username",
    placeholder:"Username",
    label: "Username",
    type:	 "text",
    },
    {
      id:2,
      name: "password",
      placeholder:"Password",
      label: "Password",
      type:	 "password",
      },
  ]

  const handleSubmit =(e) => {
    e.preventDefault();
  }


  const onChange =(e)  =>{
    setValues({...values,[e.target.name]:e.target.value});
    console.log('The login field has been changed: ', e.target.value);
  }


  return (
    <div className='container'>
      <h1>Login</h1>
      <div className='header'>
        
        <form className="loginForm" 
        onSubmit={handleSubmit}>
          {inputs.map(input => (
            <FormInput key={input.id} {...input} value={values[input.name]}
            onChange={onChange}
            />
          ))}
            
            <button className='submitButton' type="submit">Submit</button>
            
        </form>  
        <div className='registerLink'>
        <h5 >Already have an account? </h5>
        <Link to="/">Register here</Link>
        </div> 
    </div>
      
    </div>
  )
}

export default Login
