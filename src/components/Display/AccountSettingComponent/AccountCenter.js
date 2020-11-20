import React from 'react'
import SettingItem from './SettingItem'
import BackToHomeBtn from '../../Basic/Button/AccountSettingButton'
import Style from './style.module.scss'
import { withRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faLock ,faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faUser, faLock, faPhone)

class _AccountCenter extends React.Component {

    BackGoTo = () => {
        this.props.history.push('/Home')
    }

    render() {
        const { onClick } = this.props
        return <div className={Style["setting__center"]}>
            <h1 className={Style["setting__center--title"]}>Account Center</h1>
            <div className={`${Style["setting__center--items"]}
            ${Style["setting__items"]}`}>
                <SettingItem 
                name="Personal Information"
                state="isPersonInfo"
                icon="user"
                onClick={onClick}/>
                <SettingItem 
                name="Change Password"
                state="isChangePwd"
                icon="lock"
                onClick={onClick}/>
                <SettingItem 
                name="Phone & mail"
                state="isContact"
                icon="phone"
                onClick={onClick}/>
            </div>
            <BackToHomeBtn 
            name="BACK TO HOME"
            onClick={() => this.BackGoTo() }/>
        </div>
    }
}

const AccountCenter = withRouter(_AccountCenter)

export default AccountCenter