import React from "react"
import Style from "./style.module.scss"

class DeliverFormField extends React.Component {
    render() {
        const { name, type, value, onChange, placeholder, required } = this.props
        return <div className={`${Style["payment__delivery--detail"]}
         ${Style[`payment__delivery--detail--${name}`]}`}>
        <input 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required}/>
    </div>
    }
}

export default DeliverFormField