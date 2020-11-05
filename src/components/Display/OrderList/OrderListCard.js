import React from 'react'
import CircularProgressBar from './CircularProgressBar'
import Style from './style.module.scss'

//the way of using path might need to be changed later
import checkIcon from './OrderStatusIcon/check-circle-solid.svg'
import clockIcon from './OrderStatusIcon/clock-solid.svg'

class OrderListCard extends React.Component {
    constructor() {
        super()
        // this.state = { productImgUrl, productTitle, productId, isInvoiced, isPacked, isShipped, quantity, rate}
    }

    componentDidMount() {

    }

    //change this.props to setState later
    //overwrite col css not working?
    render() {
        return <div className={Style.orderListCard}>
            <div className="col-5">
                <div className="row">
                    <div className={`col-3 ${Style.orderListCard__imgCircularContainer}`}>
                        <div className={Style.orderListCard__imgContainer}>
                            <div className= {Style.orderListCard__CircularContainer}>
                                <CircularProgressBar 
                                quantity={this.props.quantity} 
                                isInvoiced={this.props.isInvoiced} 
                                isPacked={this.props.isPacked} 
                                isShipped={this.props.isShipped} />
                            </div>
                            <img src={this.props.productImgUrl} alt="Picture" className={Style.orderListCard__productImg}></img>
                        </div>
                    </div>
                    <div className="col-9">
                        <h1 className={Style.orderListCard__productName}>{this.props.productName}</h1>
                        <h2 className={Style.orderListCard__productId}>{this.props.productId}</h2>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="row">
                    {this.props.isInvoiced && <div className="col-4"><img src={checkIcon} alt="Logo" className={Style.orderListCard__statusIcon}></img></div>}
                    {!this.props.isInvoiced && <div className="col-4"><img src={clockIcon} alt="Logo" className={Style.orderListCard__statusIcon}></img></div>}

                    {this.props.isPacked && <div className="col-4"><img src={checkIcon} alt="Logo" className={Style.orderListCard__statusIcon}></img></div>}
                    {!this.props.isPacked && <div className="col-4"><img src={clockIcon} alt="Logo" className={Style.orderListCard__statusIcon}></img></div>}

                    {this.props.isShipped && <div className="col-4"><img src={checkIcon} alt="Logo" className={Style.orderListCard__statusIcon}></img></div>}
                    {!this.props.isShipped && <div className="col-4"><img src={clockIcon} alt="Logo" className={Style.orderListCard__statusIcon}></img></div>}
                </div>
            </div>

            <div className="col-3">
                <div className="row">
                    <div className="col-6"><span className={Style.orderListCard__rate}>{this.props.rate}</span></div>
                    <div className="col-6"><span className={Style.orderListCard__amount}>{this.props.amount}</span></div>
                </div>
            </div>
        </div>
    }
}

export default OrderListCard