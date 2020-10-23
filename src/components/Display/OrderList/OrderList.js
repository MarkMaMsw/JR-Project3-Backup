import OrderListHeader from './OrderListHeader'
import OrderListFooter from './OrderListFooter'
import 'bootstrap/dist/css/bootstrap.css';
import './OrderList.scss'
import React from 'react'

const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

function OrderList() {
    return<>
    <OrderListHeader />
    <OrderListFooter amount={currencyFormat(300)}/>
    </>
}

export default OrderList