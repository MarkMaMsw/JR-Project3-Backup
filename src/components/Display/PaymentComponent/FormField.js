import React from 'react'

const FormField = ({label, type, name, placeholder, required}) => {
    const className = `payment__detail payment__detail--${name}` 
    return <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input name={name} type={type} placeholder={placeholder} required/>
    </div>
}

export default FormField