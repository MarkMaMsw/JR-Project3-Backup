import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


class MainRectangleCard1 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.state = {
            name: "Product Name",
            price: 0, 
        }
    }
    handleMove = (event) => {
        this.props.parent.componentWillUnmount();
    }
    
    handleOut = (event) => {
        this.props.parent.componentDidMount()
      }

    render(){
        const {name, price} = this.props;
        return <>
        <Grid item xs={12} sm={12} md = {10} >
            <div className = {Style.container}>
                    <div className={Style.rec_productContainer} onMouseMove={this.handleMove} onMouseOut={this.handleOut} >
                        <div className = {Style.imgContainer}>
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product}/>
                        </div>
                        <div className = {Style.rec_productInfo}>
                            <h4 className = {Style.mainrec_Name}>{name}</h4>
                            <h4 className = {Style.mainrec_Price}>$ {price}</h4>
                            <Button variant="outlined" className = {Style.mainrec_Button}>GET IT NOW<ArrowRightIcon /></Button>
                        </div>
                    </div>
            </div>
        </Grid>      
        </>
    }

}

export default MainRectangleCard1;