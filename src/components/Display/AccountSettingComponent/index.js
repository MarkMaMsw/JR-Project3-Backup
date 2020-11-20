import React from 'react'
import AccountCenter from './AccountCenter'
import PersonalInfo from './PersonalInfo'
import ChangePwd from './ChangePwd'
import Contact from './Contact'
import Style from './style.module.scss'

class AccountSettingComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            isAccountCenter: true,
            isPersonInfo: false,
            isChangePwd: false,
            isContact: false
        }
    }

    resetState = () => {
        this.setState({
            isAccountCenter: false,
            isPersonInfo: false,
            isChangePwd: false,
            isContact: false
        })
    }

    unfoldPanel = (e) => {
        this.resetState()
        this.setState({
            [e.currentTarget.id]: true
        })
    }

    foldPanel = (e) => {
        this.setState({
            [e.currentTarget.id]: false,
            isAccountCenter: true
        })
    }

    render() {
        const {
            isAccountCenter,
            isPersonInfo,
            isChangePwd,
            isContact
        } = this.state
        return <div className={Style["setting"]}>
            <div className={Style["setting__container"]}>
                { isAccountCenter && 
                <AccountCenter
                onClick={this.unfoldPanel}/> }
                { isPersonInfo && <PersonalInfo
                state="isPersonInfo"
                onClick={this.foldPanel}/> }
                { isChangePwd && 
                <ChangePwd
                state="isChangePwd"
                onClick={this.foldPanel}/> }
                { isContact && 
                <Contact
                state="isContact"
                onClick={this.foldPanel}/> }
            </div>
        </div>
    }
}

export default AccountSettingComponent