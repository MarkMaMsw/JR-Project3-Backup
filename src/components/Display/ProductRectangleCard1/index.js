import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import StarIcon from '@material-ui/icons/Star';

class ProductRectangleCard1 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.state = {
            name: "Product Name",
            price: 0,
            rate: 0,
        }
    }

    render(){
        const {name, price, rate} = this.props;
        return<>
        <div className = "container">
            <div className = "row">
                <div className = "col-md-3 col-xs-6 col-sm-4">
                    <div className = {Style.rec_productContainer} >
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product}/>
                        <div className = {Style.rec_productInfo}>
                            <h4>{name}</h4>
                                <div className = {Style.rec_productExtraInfo}>
                                    <div className = {Style.rec_productRate}>                                       
                                        <h4 className = {Style.rec_productRateText}><StarIcon color = "secondary"/>{rate}</h4>
                                    </div>
                                    <h4 className = {Style.rec_productPrice}>$ {price}</h4>
                                </div>
                        </div>         
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}


export default ProductRectangleCard1;