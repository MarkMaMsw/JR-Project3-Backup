import React from 'react'
import Style from './style.module.scss'
import { withRouter } from 'react-router-dom';

class _SuccessForm extends React.Component {

    successGoTo = () => {
        this.props.history.push('/Home')
    }

    joinGoTo = () => {
        this.props.history.push('/Product')
    }

    render() {
        return <div className={Style['payment__success']}>
            <div className={Style['payment__success--header']}>
                <h1>Order Completed</h1>
                <h2>Check your email now to see the product</h2>
            </div>
            {/* <div className={Style['payment__success--footer']}>
                <ul className={Style['payment__success--link']}>
                    <li onClick={() => this.successGoTo()}><a href="#">Shop more</a></li>
                    <li>or</li>
                    <li onClick={() => this.joinGoTo()}><a href="#">Join Us</a></li>
                </ul>
                <div className={Style['payment__success--text']}>
                    <p>for easy shopping next time!</p>
                </div>
            </div> */}
        </div>
    }
}

const SuccessForm = withRouter(_SuccessForm)

export default SuccessForm 