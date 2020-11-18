import React from "react"
import Style from "./style.module.scss"

class DeliveryNotice extends React.Component {
    render() {
        return <div className={Style["payment__delivery--notice"]}>
            <h3>NOTICE:</h3>
            <div className={`${Style["payment__delivery--para"]}
            ${Style["payment__delivery--first-para"]}`}>
                <p>Seller’s average delivery speed: 8 minutes, 52 seconds</p>
            </div>
            <div className={`${Style["payment__delivery--para"]}
            ${Style["payment__delivery--second-para"]}`}>
                <p>Seller will contact you via onsite message system on PlayerAuctions to arrange the delivery.</p>
            </div>
        </div>
    }
}

export default DeliveryNotice

