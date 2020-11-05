import React from 'react'
import Style from './style.module.scss'
import CartListCard from './CartListCard'

class CartListComponent extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className={Style["cart__panel"]}>
            <CartListCard 
            imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
            title="ultraboost-20-shoes" 
            size="US 7"
            price="150"/>
            <CartListCard
            imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
            title="ultraboost-20-shoes" 
            size="US 7"
            price="150"/>
            <CartListCard
            imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
            title="ultraboost-20-shoes" 
            size="US 7"
            price="150"/>
        </div>
    }
}

export default CartListComponent

