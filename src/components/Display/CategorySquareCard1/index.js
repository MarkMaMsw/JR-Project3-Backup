import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";


class CategorySquareCard1 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.state = {
            name: "Product Name",
            price: 0,
            numofColor: 0,  
        }
    }

    render(){
        const {name, price, numofColor} = this.props;
        return <>
        <div className = "container">
            <div className = "row">
                <div className = "col-md-3 col-xs-6 col-sm-4">
                    <div className = {Style.productContainer}>
                        <div>
                            <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className={Style.product}  />
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className = {Style.productInfo}>
                            <h4>{name}</h4>
                            <h4 className = {Style.productPrice}>$ {price}</h4>
                            
                        </div>
                        <div className = {Style.productExtraInfo}>
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