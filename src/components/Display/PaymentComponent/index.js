import React from 'react'
import './style.scss'
import FormField from './FormField'
import CheckoutButton from '../../Basic/Button/CheckoutButton/CheckoutButton'
// import region-selector api for region input field
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { CardElement,CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js'

const cardElementOption = {
    style: {
        base: {
            fontSize: '1.05em',
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

class PaymentComponent extends React.Component{
    constructor() {
        super()
        this.state = {
            fullname: '',
            phone: '',
            email: '',
            country: '',
            region: '',
            address: '',
            nameOnCard: ''
        }
    }

    render() {
        const { fullname, phone, email, country, region, address, nameOnCard } = this.state;
        return <div className="payment">
            <div className="payment__show-list"></div>
            <div className="payment__checkout-panel">
                <h2 className="payment__title">Address Details</h2>
                <div className="payment__details--basic">
                    <FormField
                        name="fullname"
                        label="Full name"
                        type="text"
                        value={fullname}
                        onChange={this.handleChange}
                        placeholder="Jane Doe"
                        required
                    />
                    <FormField
                        name="phone"
                        label="Phone number"
                        type="text"
                        value={phone}
                        onChange={this.handleChange}
                        placeholder="0402182222"
                        required
                    />
                    <FormField
                        name="email"
                        label="Email address"
                        type="text"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Thomas@gmail.com"
                        required
                    />
                </div>
                <div className="payment__details--address">
                    <div className="payment__container">
                        <div className="payment__region payment__region--country">
                            <label>Country</label>    
                            <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)} />
                        </div>
                        <div className="payment__region payment__region--state">
                            <label>State</label>
                            <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)} />
                        </div>
                    </div>
                    <FormField
                        name="address"
                        label="Address"
                        type="text"
                        value={address}
                        onChange={this.handleChange}
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
                        value={nameOnCard}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Jane Doe"
                        required
                    />
                    <div className="payment__detail payment__detail-card">
                        <label>Card Info</label>
                        <CardElement options={cardElementOption} />
                    </div>
                </div>
                <div className="payment__checkout-button">
                    <CheckoutButton/>
                </div>
            </div>
            
        </div>
    }

    selectCountry (val) {
        this.setState({ country: val });
    }
     
    selectRegion (val) {
    this.setState({ region: val });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckout = (e) => {
        e.preventDefault()
    }
}

export default PaymentComponent