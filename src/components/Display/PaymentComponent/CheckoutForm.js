import React from 'react'
import axios from 'axios'
import Style from './style.module.scss'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CheckoutButton from '../../Basic/Button/CheckoutButton/CheckoutButton'

const cardElementOption = {
    style: {
        base: {
            fontSize: '1em',
            color: '#e9eaec',
            lineHeight: '2.3em',
            '::placeholder': {
                fontSize: '1.05em'
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        }
    },
    hidePostalCode: true
}

const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
    const stripe = useStripe()
    const elements = useElements()

    const handleFormSubmit = async ev => {
        ev.preventDefault()
        const { data: { client_secret } } = await axios.post("http://localhost:3001/api/payment_intents", {
            amount: price
        })
        const cardElement = elements.getElement(CardElement)
        const paymentMethodReq = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        })
        const confirmCardPayment = await stripe.confirmCardPayment(client_secret, {
            payment_method: paymentMethodReq.paymentMethod.id
        })

        console.log(confirmCardPayment)
    }

    return <form onSubmit={handleFormSubmit}>
        <div className={`${Style["payment__detail"]} ${Style["payment__detail-card"]}`}>
            
            <CardElement options={cardElementOption} />
        </div>
        <div className={Style["payment__checkout-button"]}>
            <CheckoutButton buttonStyle="background-color: #4F73E6"/>
        </div>
    </form>
}

export default CheckoutForm