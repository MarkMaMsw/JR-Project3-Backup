import React from 'react'
import ReactDOM from 'react-dom'
import Style from './style.module.scss'

class FormField extends React.Component {
    constructor() {
        super()
        this.labelStyle = React.createRef()
        this.inputStyle = React.createRef()
    }

    componentDidMount() {
        const { labelStyle, inputStyle } = this.props

        const label = ReactDOM.findDOMNode(this.labelStyle.current)
        const input = ReactDOM.findDOMNode(this.inputStyle.current)

        if (labelStyle) label.style.cssText = labelStyle
        if (inputStyle) input.style.cssText = inputStyle
    }

    render() {
        const { label, name, type, value, onChange, placeholder, required } = this.props
        return <div className={`${Style["payment__detail"]}
         ${Style[`payment__detail--${name}`]}`}>
        <label ref={this.labelStyle} htmlFor={name}>{label}</label>
        <input ref={this.inputStyle} 
        name={name} 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required}/>
    </div>
    }
}

export default FormField