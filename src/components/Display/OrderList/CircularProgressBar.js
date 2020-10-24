import React from 'react'

function CircularProgressBar(props) {
    // better method?  
    return <>
        {!props.isInvoiced && <div className="circle">
            <div className="inner"></div>
            <div className="quantity">{props.quantity}</div>
        </div>}
        {(props.isInvoiced && !props.isPacked && !props.isShipped) && <div className="circle circle-30">
            <div className="inner"></div>
            <div className="quantity">{props.quantity}</div>
        </div>}
        {(props.isInvoiced && props.isPacked && !props.isShipped) && <div className="circle circle-60">
            <div className="inner"></div>
            <div className="quantity">{props.quantity}</div>
        </div>}
        {(props.isInvoiced && props.isPacked && props.isShipped) && <div className="circle circle-100">
            <div className="inner"></div>
            <div className="quantity">{props.quantity}</div>
        </div>}
    </>

}

export default CircularProgressBar