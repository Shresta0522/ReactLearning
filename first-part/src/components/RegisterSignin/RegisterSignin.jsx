import './RegisterSignin.css';
import FormInput from './FormInput';
import { useState } from 'react';
import { Link } from "react-router-dom";


function RegisterSignin() {
    const [values, setValues] = useState({
      username:"",
      eamil:"",
      birthday:"",
      password:"",
      confirmPassword:"",
    });
    
    const inputs =[
      {
        id:1,
        name:"username",
        type:"text",
        placeholder:"Username",
        errorMessage:"Username should not have any special characters",
        label:"Username",
      },
      {
        id:2,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage: "Invalid Email address",
        label:"Email",
      },
      {
        id:3,
        name:"birthday",
        type:"date",
        placeholder:"Birthday",
        label:"Birthday",
      },
      {
        id:4,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:	 "Passwords must be at least 6 characters long",
        label:"Password",
      },
      {
        id:5,
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage: "Passwords do not match" ,
        pattern:values.password,
        label:"Confirm Password",
      },

    ]

    console.log();


  const handleSubmit =(e) => {
    e.preventDefault();
}

  const onChange =(e) => {
    setValues({...values,[e.target.name]:e.target.value});
  }

  console.log(values)
  return (
    <div className='container'>
      <h1>Register</h1>
        <div className='header'>
        
            <form className="registerForm" 
            onSubmit={handleSubmit}>
              {inputs.map(input => (
                <FormInput key={input.id} {...input} value={values[input.name]}
                onChange={onChange}
                />
              ))}
                
                <button className='submitButton' type="submit">Submit</button>
                
            </form>  
            <div className='loginLink'>
            <h5 >Don't have an account? </h5>
            <Link to="/login">Login here</Link>
            </div> 
        </div>
      
    </div>
  )
}

export default RegisterSignin
