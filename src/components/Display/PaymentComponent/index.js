import React from 'react'
import './style.scss'
import FormField from './FormField'


class PaymentComponent extends React.Component{
    constructor() {
        super()
    }

    render() {
        return <div className="payment">
            <div className="payment__show-list"></div>
            <div className="payment__checkout-panel">
                <h2 className="payment__title">Address Details</h2>
                <div className="payment__details--basic">
                    <FormField
                        name="fullname"
                        label="Full name"
                        type="text"
                        placeholder="Jane Doe"
                        required
                    />
                    <FormField
                        name="phone"
                        label="Phone number"
                        type="text"
                        placeholder="0402182222"
                        required
                    />
                    <FormField
                        name="email"
                        label="Email address"
                        type="text"
                        placeholder="Thomas@gmail.com"
                        required
                    />
                </div>
                <div className="payment__details--address">
                    <div className="payment__container">
                        <FormField
                            name="state"
                            label="State"
                            type="text"
                            placeholder="Queensland"
                            required
                        />
                        <FormField
                            name="city"
                            label="City"
                            type="text"
                            placeholder="Brisbane"
                            required
                        />
                    </div>
                    <FormField
                        name="address"
                        label="Address"
                        type="text"
                        placeholder="61 Warren st, St Lucia"
                        required
                    />
                </div>
            </div>
            <div className="payment__checkout-panel">
                <h2 className="payment__title">Card Details</h2>
                <div className="payment__details--card">
                    <FormField
                        name="name-on-card"
                        label="Name on card"
                        type="text"
                        placeholder="Jane Doe"
                        required
                    />
                    <FormField
                        name="card-number"
                        label="Card number"
                        type="text"
                        placeholder=""
                        required
                    />
                    <FormField
                        name="date"
                        label="Date"
                        type="text"
                        placeholder=""
                        required
                    />
                    <FormField
                        name="ccv"
                        label="CCV"
                        type="text"
                        placeholder=""
                        required
                    />
                </div>
            </div>
        </div>
    }
}

export default PaymentComponent