import React from 'react'
import FormField from './FormField'
import Style from './style.module.scss'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

class AddressDetailsForm extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {
            formLeftStyle,
            formCountryLabelStyle,
            formCountryStyle,
            formStateLabelStyle,
            formStateStyle,           
            handleChange,
            selectCountry,
            selectRegion,
            labelStyle,
            inputStyle,
            fullname,
            phone,
            email,
            country,
            region,
            address
        } = this.props

        return <div ref={formLeftStyle} className={Style["payment__checkout-panel"]}>
        <h2 className={Style["payment__title"]}>Address Details</h2>
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
        <div className={Style["payment__details--address"]}>
            
            <div className={`${Style["payment__region"]} 
            ${Style["payment__detail"]}`}>
                <label ref={formCountryLabelStyle}>Country</label>    
                <CountryDropdown
                ref={formCountryStyle}
                value={country}
                onChange={(val) => selectCountry(val)}/>
            </div>
            <div className={`${Style["payment__region"]} 
            ${Style["payment__detail"]}`}>
                <label ref={formStateLabelStyle}>State</label>
                <RegionDropdown 
                ref={formStateStyle}
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)}/>
            </div>
            <FormField
                name="address"
                label="Address"
                type="text"
                value={address}
                onChange={handleChange}
                placeholder="61 Warren st, St Lucia"
                labelStyle={labelStyle}
                inputStyle={inputStyle}
                required
            />
        </div>
    </div>
    }
}

export default AddressDetailsForm