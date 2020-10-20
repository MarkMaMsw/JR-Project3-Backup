import React from 'react'

const FormField = ({label, name, type, value, onChange, placeholder, required}) => {
    const className = `payment__detail payment__detail--${name}` 
    return <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required/>
    </div>
}

export default FormField