import React from 'react'
import Style from './style.module.scss'
import BackToCenterBtn from '../../Basic/Button/AccountSettingButton'

class Contact extends React.Component {
    render() {
        const { 
            onClick,
            state, 
            email,  
            phone } = this.props
        return <div className={Style["setting__contact"]}>
            <h1 className={Style["setting__center--title"]}>Phone & Email Management</h1>
            <div className={`${Style["setting__contact--items"]}
            ${Style["setting__items"]}`}>

            </div>
            <BackToCenterBtn 
            name="BACK TO ACCOUNT CENTER"
            id={state}
            onClick={onClick}/>
        </div>
    }
}

export default Contact