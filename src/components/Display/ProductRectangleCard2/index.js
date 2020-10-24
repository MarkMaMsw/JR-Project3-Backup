import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

class ProductRectangleCard1 extends React.Component{
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
        const {name, price, numofColor} = this.props;
        return<>
             <Grid item xs={12} sm={6} md = {6} lg = {4}>
                <div className = {Style.container}>
                    <div className = {Style.rec_productContainer} >
                        <div className = {Style.imgContainer}>
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product}/>
                        </div>
                        <div className = {Style.rec_productInfo}>
                            <h4>{name}</h4>
                            <div>rate</div>
                            <h4>$ {price}</h4>
                            <h4 className={Style.rec_productColor}>{numofColor} COLORS</h4>
                            <div className = {Style.plusIcon}>
                                <AddIcon className = {Style.addIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
        </Grid>
        </>
    }
}


export default ProductRectangleCard1;