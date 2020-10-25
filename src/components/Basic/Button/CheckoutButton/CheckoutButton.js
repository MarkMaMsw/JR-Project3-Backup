import React from 'react'
import Style from './style.module.scss'
import ReactDOM from 'react-dom'

// const CheckoutButton = ({onClick}) => {
//     return <>
//         <button className={Style["checkoutButton"]} type="submit" onClick={onClick}>Check out</button>
//     </>
// }


class CheckoutButton extends React.Component{
    constructor() {
        super()
        this.buttonStyle = React.createRef()
    }

    componentDidMount() {
        // CSS style API
        const { buttonStyle } = this.props
        const button = ReactDOM.findDOMNode(this.buttonStyle.current)

        if (buttonStyle) button.style.cssText = buttonStyle
    }

    render() {
        const { onClick } = this.props
        return <>
        <button ref={this.buttonStyle} className={Style["checkoutButton"]} type="submit" onClick={onClick}>Check out</button>
    </>
    }
}

export default CheckoutButton