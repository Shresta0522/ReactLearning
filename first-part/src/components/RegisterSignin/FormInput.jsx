import React from 'react'
import './FormInput.css'

function FormInput(props) {
  const {label,errorMessage, onChange, id, ...inputProps} = props;
  return (
    <div className='formInput'>
      <label>{label}</label>
      <input className='input-box' {...inputProps} onChange={onChange} required/>
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput