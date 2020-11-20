import React from 'react'
import Style from './style.module.scss'
import BackToCenterBtn from '../../Basic/Button/AccountSettingButton'

class PersonalInfo extends React.Component {
    render() {
        const { 
            onClick,
            state, 
            username, 
            firstname, 
            lastname } = this.props
        return<div className={Style["setting__perInfo"]}>
            <h1 className={Style["setting__center--title"]}>Personal Information</h1>
            <div className={`${Style["setting__perInfo--items"]}
            ${Style["setting__items"]}`}>

            </div>
            <BackToCenterBtn 
            name="BACK TO ACCOUNT CENTER"
            id={state}
            onClick={onClick}/>
        </div>
    }
}

export default PersonalInfo