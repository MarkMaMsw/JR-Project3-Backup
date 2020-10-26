import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';

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
            <Grid item xs={12} sm={6} md = {6} lg = {4}>
                <div className = {Style.container}>
                    <div className = {Style.rec_productContainer} >
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product}/>
                        <div className = {Style.rec_productInfo}>
                            <h4 className = {Style.rec_productName}>{name}</h4>
                            <div className = {Style.rec_productExtraInfo}>
                                <h4 className = {Style.rec_productPrice}>$ {price}</h4>
                                <div className = {Style.rec_productRate}>                                       
                                    <h4 className = {Style.rec_productRateText}><StarIcon color = "secondary"/>{rate}</h4>
                                </div>
                                
                            </div>
                        </div>         
                    </div>
                </div>
            </Grid>
        </>
    }
}


export default ProductRectangleCard1;