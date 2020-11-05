import React from 'react'
import Style from './style.module.scss'

function OrderListHeader() {
    return(
		<div className={Style.orderListHeader}>
			<div className="col-5"> {"ITEMS & DESCRIPTION"}</div>

			<div className="col-4"> 
				<div className="row">
					<div className="col-4">INVOICED</div>
					<div className="col-4">PACKED</div>
					<div className="col-4">SHIPPED</div>
				</div>
			</div>
			<div className="col-3"> 
				<div className="row">
					<div className="col-6">RATE</div>
					<div className="col-6">AMOUNT</div>
				</div>
			</div>
		</div>
    )
}

// import React from 'react'

// class OrderListHeader extends React.Component {
//     constructor() {
//         super()
//     }

//     componentDidMount() {

//     }

//     render() {
//         <div className="orderListHeader">
//             <div className="col-sm-5"> ITEMS & DESCRIPTION</div>

//             <div className="col-sm-4">
//                 <div className="row">
//                     <div className="col-sm-4">INVOICED</div>
//                     <div className="col-sm-4">PACKED</div>
//                     <div className="col-sm-4">SHIPPED</div>
//                 </div>
//             </div>
//             <div className="col-sm-3">
//                 <div className="row">
//                     <div className="col-sm-6">RATE</div>
//                     <div className="col-sm-6">AMOUNT</div>
//                 </div>
//             </div>
//         </div>
//     }
// }

export default OrderListHeader