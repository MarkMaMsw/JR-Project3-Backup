import React from 'react'
// import Css from "./style.module.css";
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";

class CategorySquareCard1 extends React.Component{
    constructor(){
        super();

        this.state = {
            name: "Product Name",
            price: 0,
            numofColor: 0,  
        }
    }

    render(){
        const {name, price, numofColor} = this.props;
        return <>
        <div>
            <div>
                <img />
                <div></div>
            </div>
            <div>
                <div>
                    <h3>{name}</h3>
                    <h3>$ {price}</h3>
                </div>
                <div>
                    <h4>{numofColor} COLORS</h4>
                </div>
            </div>
        </div>
        </>
    }
}


export default CategorySquareCard1;