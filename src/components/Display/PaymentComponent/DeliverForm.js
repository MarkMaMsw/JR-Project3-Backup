import React from "react"
import Style from "./style.module.scss"
import DeliverFormField from "./DeliveryFormField"
import DeliveryFormTextarea from "./DeliveryFormTextarea"
import DeliveryNotice from "./DeliveryNotice"
import DeliveryPrice from "./DeliveryPrice"

class DeliverForm extends React.Component {
    render() {
        const { handleChange, charactername, deliverymessage } = this.props
        return <div className={Style["payment__delivery"]}>
        <div className={Style["payment__delivery--container"]}>       
            <h2 className={Style["payment__delivery--header"]}>RuneScape - Old School-Main OSRS Server</h2>
            <div className={Style["payment__delivery--message"]}>
                <h3 className={Style["payment__delivery--label"]}>Deliver Instructions</h3>
                {/* <DeliverFormField
                name="charactername"
                value={charactername}
                onChange={handleChange}
                type="text"
                placeholder="Your game character name..."
                required
                /> */}
                <DeliveryFormTextarea
                name="deliverymessage"
                value={deliverymessage}
                onChange={handleChange}
                placeholder="Delivery message for seller..."
                required
                />
            </div>
            <DeliveryNotice/>
        </div> 
        <DeliveryPrice
        price="1000"
        />
        </div>
    }
}

export default DeliverForm