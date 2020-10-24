import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';

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
        <Grid item xs={12} sm={6} md = {4}>
            <div className = {Style.container}>
           
                <div className = {Style.productContainer}>
                    <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className={Style.product}  />
                    <div className = {Style.bagIcon}>
                        <LocalMallIcon  style={{ color: "white" , margin:"10px"}} />
                    </div>
                </div>
                <div className = {Style.productInfo}>
                    <div >
                        <h4 className = {Style.productPrice}>$ {price}</h4>
                        <h4 className = {Style.productName}>{name}</h4>
                        
                        
                    </div>
                    <div className = {Style.productExtraInfo}>
                        <h4 className={Style.productColor}>{numofColor} COLORS</h4>
                        <Rating name="disabled" value={rate} disabled />
                    </div>
                </div>
                
            </div>
        </Grid>
        </>
    }
}


export default CategorySquareCard1;