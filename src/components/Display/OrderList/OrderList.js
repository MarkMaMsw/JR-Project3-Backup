import OrderListHeader from './OrderListHeader'
import OrderListCard from './OrderListCard';
import OrderListFooter from './OrderListFooter'
import 'bootstrap/dist/css/bootstrap.css';
import './OrderList.scss'
import React from 'react'

//the way of using path might need to be changed later
import productImg1 from './ProductImg/product1.jpg'
import productImg2 from './ProductImg/product2.jpg'

const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

function OrderList() {
    return<>
    <OrderListHeader />
    <OrderListCard productImgUrl={productImg1} productName={"AMBUSH D-ring detail short-sleeve shirt"} productId={"SKU: 12112021"} quantity={3} isInvoiced={true} isPacked={false} isShipped={false} rate={currencyFormat(20)} amount={currencyFormat(60)}/>
    <OrderListCard productImgUrl={productImg2} productName={"Comme Des Garçons Girl drawstring cropped trousers"} productId={"SKU: NEP005"} quantity={1} isInvoiced={true} isPacked={true} isShipped={false} rate={currencyFormat(280)} amount={currencyFormat(280)}/>
    <OrderListCard productImgUrl={productImg1} productName={"AMBUSH D-ring detail short-sleeve shirt"} productId={"SKU: 12112021"} quantity={20} isInvoiced={false} isPacked={false} isShipped={false} rate={currencyFormat(3)} amount={currencyFormat(60)}/>
    <OrderListCard productImgUrl={productImg2} productName={"Comme Des Garçons Girl drawstring cropped trousers"} productId={"SKU: NEP005"} quantity={1} isInvoiced={true} isPacked={true} isShipped={true} rate={currencyFormat(280)} amount={currencyFormat(280)}/>
    <OrderListFooter amount={currencyFormat(300)}/>
    </>
}

export default OrderList