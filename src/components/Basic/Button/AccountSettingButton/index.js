import React from 'react'
import AccountSettingComponent from '../../../Display/AccountSettingComponent'
import AccountCenter from '../../../Display/AccountSettingComponent/AccountCenter'
import Style from './style.module.scss'

class AccountSettingButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { 
            name, 
            onClick,
            id } = this.props
        return <>
            <button className={Style["accountButton"]} id={id} onClick={onClick}>{name}</button>
        </>
    }
}

export default AccountSettingButton
