import React from "react"
import Style from "./style.module.scss"

class DeliveryPrice extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { price } = this.props
        return <div className={Style["payment__total--container"]}>
        <div className={Style["payment__total--content"]}>
            <h2>TOTAL</h2>
            <p>$ { price }</p>
        </div>
    </div>
    }
}

export default DeliveryPrice