import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

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

    handleMove = (event) => {
        this.props.parent.getChildrenMsg(this, (+this.props.index),
        this.props.imgPath,
        this.props.name,
        this.props.price,
        )
        this.props.parent.componentWillUnmount();
    }
    
    handleOut = (event) => {
        this.props.parent.componentDidMount()
      }


    render(){
        const {name, price, rate, numofColor} = this.props;
        return<>
             <Grid item xs={12} sm={12} md = {6} lg = {4}>
                <div className = {Style.container}>
                    <div className={Style.rec_productContainer} onMouseMove={this.handleMove} onMouseOut={this.handleOut}>
                        <div className = {Style.imgContainer}>
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product}/>
                        </div>
                        <div className = {Style.rec_productInfo}>
                            <h4>{name}</h4>
                            <Rating name="disabled" value={rate} disabled />
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