import React from 'react'
import Style from './style.module.scss'


function CircularProgressBar(props) {
    // better method?  
    return <>
        {!props.isInvoiced && <div className={Style.circle}>
            <div className={Style.inner}></div>
            <div className={Style.quantity}>{props.quantity}</div>
        </div>}
        {(props.isInvoiced && !props.isPacked && !props.isShipped) && <div className={`${Style.circle} ${Style.circle_30}`}>
            <div className={Style.inner}></div>
            <div className={Style.quantity}>{props.quantity}</div>
        </div>}
        {(props.isInvoiced && props.isPacked && !props.isShipped) && <div className={`${Style.circle} ${Style.circle_60}`}>
            <div className={Style.inner}></div>
            <div className={Style.quantity}>{props.quantity}</div>
        </div>}
        {(props.isInvoiced && props.isPacked && props.isShipped) && <div className={`${Style.circle} ${Style.circle_100}`}>
            <div className={Style.inner}></div>
            <div className={Style.quantity}>{props.quantity}</div>
        </div>}
    </>

}

export default CircularProgressBar