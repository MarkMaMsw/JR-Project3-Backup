import React from 'react'
import CardInfoField from './CardInfoField'
import FormField from './FormField'
import Style from './style.module.scss'

class CardDetailsForm extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { 
            fullname,
            email,
            phone,
            nameOnCard, 
            handleChange, 
            formRightStyle, 
            formCardLabelStyle, 
            labelStyle, 
            inputStyle, 
            onSuccessfulCheckout } = this.props
        return <div ref={formRightStyle} className={Style["payment__checkout-panel"]}>
            <h2 className={Style["payment__title"]}>Card Details</h2>
            <div className={Style["payment__details--basic"]}>
                <FormField
                    name="fullname"
                    label="Full name"
                    type="text"
                    value={fullname}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    labelStyle={labelStyle}
                    inputStyle={inputStyle}
                    required
                />
                <FormField
                    name="phone"
                    label="Phone number"
                    type="text"
                    value={phone}
                    onChange={handleChange}
                    placeholder="0402182222"
                    labelStyle={labelStyle}
                    inputStyle={inputStyle}
                    required
                />
                <FormField
                    name="email"
                    label="Email address"
                    type="text"
                    value={email}
                    onChange={handleChange}
                    placeholder="Thomas@gmail.com"
                    labelStyle={labelStyle}
                    inputStyle={inputStyle}
                    required
                />
            </div>
            <div className={Style["payment__details--card"]}>
                <FormField
                    name="nameOnCard"
                    label="Name on card"
                    value={nameOnCard}
                    onChange={handleChange}
                    type="text"
                    placeholder="Jane Doe"
                    labelStyle={labelStyle}
                    inputStyle={inputStyle}
                    required
                />
                <label ref={formCardLabelStyle} className={Style["payment__card-label"]}>Card Info</label>
                <CardInfoField price="1000" onSuccessfulCheckout={onSuccessfulCheckout}/>
            </div>
        </div>
    }
}

export default CardDetailsForm