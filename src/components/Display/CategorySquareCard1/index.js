import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

class CategorySquareCard1 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.state = {
            name: "Product Name",
            price: 0,
            rate: 0,
            numofColor: 0,  
        }
    }

    render(){
        const {name, price, rate, numofColor} = this.props;
        return <>
        <div className = {Style.container}>
            <div className = "row">
                <div className = "col-md-3 col-xs-6 col-sm-4">
                    <div className = {Style.productContainer}>
                        <div>
                            <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className={Style.product}  />
                        </div>
                        <div className = {Style.bagIcon}>
                            <LocalMallIcon  style={{ color: "white" , margin:"10px"}} />
                        </div>
                    </div>
                    <div>
                        <div className = {Style.productInfo}>
                            <h4>{name}</h4>
                            <h4 className = {Style.productPrice}>$ {price}</h4>
                            
                        </div>
                        <div className = {Style.productExtraInfo}>
                            <Rating name="disabled" value={rate} disabled />
                            <h4 className={Style.productColor}>{numofColor} COLORS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}


export default CategorySquareCard1;