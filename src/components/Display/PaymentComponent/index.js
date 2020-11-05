import React from 'react'
import ReactDOM from 'react-dom'
import CardDetailsForm from './CardDetailsForm'
import AddressDetailsForm from './AddressDetailsForm'
import PaymentCartForm from './PaymentCartForm'
import SuccessForm from './SuccessForm'
import Style from './style.module.scss'

class PaymentComponent extends React.Component {
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
            amount: '',
            isSubmitted: false
        }
    }

    componentDidMount() {
        if (!this.state.isSubmitted) {
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

            if (inputStyle) {
                formCountry.style.cssText = inputStyle
                formState.style.cssText = inputStyle
            }

            if (labelStyle) {
                formCountryLabel.style.cssText = labelStyle
                formStateLabel.style.cssText = labelStyle
                formCardLabel.style.cssText = labelStyle
            }
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
            nameOnCard,
            isSubmitted } = this.state
        const { inputStyle, labelStyle } = this.props
        return <div  className={Style["payment"]}>
            <PaymentCartForm/>
            <div className={Style["payment__panels"]}>
                {!isSubmitted && 
                    <AddressDetailsForm        
                    formLeftStyle={this.formLeftStyle}
                    formCountryLabelStyle={this.formCountryLabelStyle}
                    formStateLabelStyle={this.formStateLabelStyle}
                    formCountryStyle={this.formCountryStyle}
                    formStateStyle={this.formStateStyle}
                    handleChange={this.handleChange}
                    selectRegion={this.selectRegion}
                    selectCountry={this.selectCountry}
                    labelStyle={labelStyle}
                    inputStyle={inputStyle}
                    fullname={fullname}                 
                    phone={phone}
                    email={email}    
                    country={country}
                    region={region}                     
                    address={address}
                 />}
                {!isSubmitted && 
                    <CardDetailsForm
                    formRightStyle={this.formRightStyle}
                    formCardLabelStyle={this.formCardLabelStyle}
                    handleChange={this.handleChange}
                    nameOnCard={nameOnCard}
                    labelStyle={labelStyle}
                    inputStyle={inputStyle}
                    onSuccessfulCheckout={this.onSuccessfulCheckout}
                />}
                {isSubmitted && <SuccessForm/>}
            </div>
        </div>
    }

    selectCountry = (val) => {
        this.setState({ country: val });
    }
     
    selectRegion = (val) => {
        this.setState({ region: val });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSuccessfulCheckout = async (e) => {
        e.preventDefault();
        this.setState({ isSubmitted: true })
    }
}

export default PaymentComponent