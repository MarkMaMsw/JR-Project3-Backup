import React from 'react'
import ReactDOM from 'react-dom'
import DeliveryForm from './DeliverForm'
import CardDetailsForm from './CardDetailsForm'
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
            deliverymessage: '',
            nameOnCard: '',
            amount: '',
            isSubmitted: false
        }
    }

    componentDidMount() {
        if (!this.state.isSubmitted) {
            const { formStyle, inputStyle, labelStyle } = this.props
            const formRight = ReactDOM.findDOMNode(this.formRightStyle.current)
            const formCardLabel = ReactDOM.findDOMNode(this.formCardLabelStyle.current)

            if (formStyle) {
                formRight.style.cssText = formStyle
            }

            if (labelStyle) {
                formCardLabel.style.cssText = labelStyle
            }
        }
    }

    render() {
        const { 
            fullname,
            phone, 
            email,
            deliverymessage, 
            nameOnCard,
            isSubmitted } = this.state
        const { inputStyle, labelStyle } = this.props
        return <div  className={Style["payment"]}>
            <div className={Style["payment__container"]}> 
                <DeliveryForm
                handleChange={this.handleChange}
                deliverymessage={deliverymessage}
                />
                <div className={Style["payment__panels"]}>
                    {!isSubmitted && 
                        <CardDetailsForm
                        formRightStyle={this.formRightStyle}
                        formCardLabelStyle={this.formCardLabelStyle}
                        handleChange={this.handleChange}
                        nameOnCard={nameOnCard}
                        labelStyle={labelStyle}
                        inputStyle={inputStyle}
                        fullname={fullname}                 
                        phone={phone}
                        email={email}
                        onSuccessfulCheckout={this.onSuccessfulCheckout}
                    />}
                    {isSubmitted && <SuccessForm/>}
                </div>
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