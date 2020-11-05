import React from 'react'
import Style from './style.module.scss'

function OrderListFooter(props) {
    return <div className={Style.orderListFooter}>Total Amount: {props.amount}</div>
}

export default OrderListFooter