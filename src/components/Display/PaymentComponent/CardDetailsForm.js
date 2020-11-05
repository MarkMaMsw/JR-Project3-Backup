import React from 'react'
import CardInfoField from './CardInfoField'
import FormField from './FormField'
import Style from './style.module.scss'

class CardDetailsForm extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { nameOnCard, 
            handleChange, 
            formRightStyle, 
            formCardLabelStyle, 
            labelStyle, 
            inputStyle, 
            onSuccessfulCheckout } = this.props
        return <div ref={formRightStyle} className={Style["payment__checkout-panel"]}>
            <h2 className={Style["payment__title"]}>Card Details</h2>
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