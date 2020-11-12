import React from 'react'
import Style from './style.module.scss'
import CartListComponent from '../CartListComponent/index'

class PaymentCartForm extends React.Component {

    render() {
        return <div className={Style["payment__cart"]}>
            <div className={Style["payment__cart--container"]}>
                <div className={Style["payment__cart--title"]}>
                    <h2>Shopping Cart</h2>
                </div>
                <div className={Style["payment__cart--body"]}>
                    <CartListComponent/>
                </div>
            </div>
            <div className={Style["payment__subtotal--container"]}>
                <div className={Style["payment__subtotal--content"]}>
                    <h2>Subtotal</h2>
                    <p>$ Price</p>
                </div>
            </div>
        </div>
    }
}

export default PaymentCartForm