import React from 'react'
import './style.scss'

const CheckoutButton = ({onClick}) => {
    return <>
        <button className="checkoutButton" type="button" onClick={onClick}>Check out</button>
    </>
}

export default CheckoutButton