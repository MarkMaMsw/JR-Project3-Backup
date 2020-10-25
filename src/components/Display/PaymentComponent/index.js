import React from 'react'
import ReactDOM from 'react-dom'
import FormField from './FormField'
import CheckoutForm from './CheckoutForm'
import CategorySquareCard1 from '../CategorySquareCard1/index'
import Style from './style.module.scss'
// import region-selector api for region input field
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

class PaymentComponent extends React.Component{
    constructor() {
        super()
        this.formLeftStyle = React.createRef()
        this.formRightStyle = React.createRef()
        this.formStateStyle = React.createRef()
        this.formStateLabelStyle = React.createRef()
        this.formCountryStyle = React.createRef()
        this.formCountryLabelStyle = React.createRef()
        this.formCardLabelStyle = React.createRef()
        this.state = {
            fullname: '',
            phone: '',
            email: '',
            country: '',
            region: '',
            address: '',
            nameOnCard: '',
            amount: ''
        }
    }

    componentDidMount() {
        const { formStyle, inputStyle, labelStyle } = this.props
        const formLeft = ReactDOM.findDOMNode(this.formLeftStyle.current)
        const formRight = ReactDOM.findDOMNode(this.formRightStyle.current)
        const formCountry = ReactDOM.findDOMNode(this.formCountryStyle.current)
        const formCountryLabel = ReactDOM.findDOMNode(this.formCountryLabelStyle.current)
        const formState = ReactDOM.findDOMNode(this.formStateStyle.current)
        const formStateLabel = ReactDOM.findDOMNode(this.formStateLabelStyle.current)
        const formCardLabel = ReactDOM.findDOMNode(this.formCardLabelStyle.current)

        if (formStyle) {
            formLeft.style.cssText = formStyle 
            formRight.style.cssText = formStyle
        }

        if(inputStyle) {
            formCountry.style.cssText = inputStyle
            formState.style.cssText = inputStyle
        }

        if(labelStyle) {
            formCountryLabel.style.cssText = labelStyle
            formStateLabel.style.cssText = labelStyle
            formCardLabel.style.cssText = labelStyle
        }
    }

    render() {
        const { 
            fullname,
            phone, 
            email,
            country, 
            region, 
            address, 
            nameOnCard } = this.state
        const { inputStyle, labelStyle } = this.props
        return <div  className={Style["payment"]}>
            <div className={Style["payment__cart"]}>
                <div className={Style["payment__cart--container"]}>
                    <div className={Style["payment__cart--title"]}>
                        <h2>Shopping Cart</h2>
                    </div>
                    <div className={Style["payment__cart--body"]}>
                        <CategorySquareCard1 
                            name = "Ultraboost 20 Shoes"
                            imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                            price = "340"
                            rate = "3.4"
                            numofColor = "8"
                        />
                        <CategorySquareCard1 
                            name = "Ultraboost 20 Shoes"
                            imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                            price = "450"
                            rate = "4.6"
                            numofColor = "3"
                            newContainerStyle = "background: rgba(255, 148, 56, 0.2)"
                        />
                        <CategorySquareCard1 
                            name = "Ultraboost 20 Shoes"
                            imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                            price = "330"
                            rate = "3.8"
                            numofColor = "2"
                        />
                    </div>
                </div>
                <div className={Style["payment__subtotal--container"]}>
                    <div className={Style["payment__subtotal--content"]}>
                        <h2>Subtotal</h2>
                        <p>$ Price</p>
                    </div>
                </div>
            </div>
            <div className={Style["payment__panels"]}>
                <div ref={this.formLeftStyle} className={Style["payment__checkout-panel"]}>
                    <h2 className={Style["payment__title"]}>Address Details</h2>
                    <div className={Style["payment__details--basic"]}>
                        <FormField
                            name="fullname"
                            label="Full name"
                            type="text"
                            value={fullname}
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
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
                            onChange={this.handleChange}
                            placeholder="Thomas@gmail.com"
                            labelStyle={labelStyle}
                            inputStyle={inputStyle}
                            required
                        />
                    </div>
                    <div className={Style["payment__details--address"]}>
                        <div className={Style["payment__container"]}>
                            <div className={`${Style["payment__region"]} 
                            ${Style["payment__region--country"]}`}>
                                <label ref={this.formCountryLabelStyle}>Country</label>    
                                <CountryDropdown
                                ref={this.formCountryStyle}
                                value={country}
                                onChange={(val) => this.selectCountry(val)} />
                            </div>
                            <div className={`${Style["payment__region"]} 
                            ${Style["payment__region--state"]}`}>
                                <label ref={this.formStateLabelStyle}>State</label>
                                <RegionDropdown 
                                ref={this.formStateStyle}
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
                            labelStyle={labelStyle}
                            inputStyle={inputStyle}
                            required
                        />
                    </div>
                </div>
                <div ref={this.formRightStyle} className={Style["payment__checkout-panel"]}>
                    <h2 className={Style["payment__title"]}>Card Details</h2>
                    <div className={Style["payment__details--card"]}>
                        <FormField
                            name="nameOnCard"
                            label="Name on card"
                            value={nameOnCard}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Jane Doe"
                            labelStyle={labelStyle}
                            inputStyle={inputStyle}
                            required
                        />
                        <label ref={this.formCardLabelStyle} className={Style["payment__card-label"]}>Card Info</label>
                        <CheckoutForm price="1000" />
                    </div>
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

    handleCheckout = async (e) => {
        e.preventDefault();
    }
}

export default PaymentComponent