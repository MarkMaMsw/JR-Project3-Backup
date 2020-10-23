import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";

class MainRectangleCard1 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.state = {
            name: "Product Name",
            price: 0, 
        }
    }

    render(){
        const {name, price} = this.props;
        return <>
        <div className = "container">
            <div className = "row">
                <div className = "col-md-3 col-xs-6 col-sm-4">
                    <div className = {Style.rec_productContainer} >
                        <div className = {Style.imgContainer}>
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product}/>
                        </div>
                        <div className = {Style.rec_productInfo}>
                            <h4 className = {Style.mainrec_Name}>{name}</h4>
                            <h4 className = {Style.mainrec_Price}>$ {price}</h4>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }

}

export default MainRectangleCard1;