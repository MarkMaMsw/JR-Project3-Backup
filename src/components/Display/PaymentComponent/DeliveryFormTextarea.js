import React from "react"
import Style from "./style.module.scss"

class DeliveryFormTextArea extends React.Component {
    render() {
        const { name, type, value, onChange, placeholder, required } = this.props
        return <div className={`${Style["payment__delivery--detail"]}
         ${Style[`payment__delivery--detail--${name}`]}`}>
        <textarea 
        name={name} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
        required={required}/>
    </div>
    }
}

export default DeliveryFormTextArea