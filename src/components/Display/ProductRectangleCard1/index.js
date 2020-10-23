import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";


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
                    <div className = {Style.productContainer} >
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" />
                        <div>
                            <h4>{name}</h4>
                        </div>
                        <div>
                            <h4>$ {price}</h4>
                            <div>
                                <h4>{rate}</h4>
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