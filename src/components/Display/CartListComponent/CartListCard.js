import React from 'react'
import Style from './style.module.scss'

class CartListCard extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {imgPath, title, size, price} = this.props
        return <div className={Style["cart__card"]}>
            <div className={Style["cart__card--img"]}>
                <figure>
                    <img src={imgPath}/>
                </figure>
            </div>
            <div className={Style["cart__card--desc"]}>
                <div className={Style["cart__card--container"]}>
                    <h3 className={Style["cart__card--title"]}>{title}</h3>
                    <h3 className={Style["cart__card--size"]}>{size}</h3>
                </div>
            </div>
            <div className={Style["cart__card--price"]}>
                <h3>{price}</h3>
            </div>
        </div>
    }
}

export default CartListCard