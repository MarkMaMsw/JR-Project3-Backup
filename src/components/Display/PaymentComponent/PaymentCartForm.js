import React from 'react'
import CategorySquareCard1 from '../CategorySquareCard1/index'
import Style from './style.module.scss'

class PaymentCartForm extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className={Style["payment__cart"]}>
            <div className={Style["payment__cart--container"]}>
                <div className={Style["payment__cart--title"]}>
                    <h2>Shopping Cart</h2>
                </div>
                <div className={Style["payment__cart--body"]}>
                    <CategorySquareCard1 
                        name = "Ultraboost 20 Shoes"
                        imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                        price = "340"
                        rate = "3.4"
                        numofColor = "8"
                    />
                    <CategorySquareCard1 
                        name = "Ultraboost 20 Shoes"
                        imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                        price = "450"
                        rate = "4.6"
                        numofColor = "3"
                        newContainerStyle = "background: rgba(255, 148, 56, 0.2)"
                    />
                    <CategorySquareCard1 
                        name = "Ultraboost 20 Shoes"
                        imgPath={require("../../../images/shoes/ultraboost-20-shoes.png")}
                        price = "330"
                        rate = "3.8"
                        numofColor = "2"
                    />
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