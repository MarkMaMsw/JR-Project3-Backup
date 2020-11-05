import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Box } from '@material-ui/core';


class _MainRectangleCard1 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.rec_productContainer = React.createRef();
        this.imgContainer = React.createRef();
        this.mainrec_Name = React.createRef();
        this.mainrec_Price = React.createRef();
        this.mainrec_Button = React.createRef();
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

    componentDidMount(){
        const { newrec_ContainerStyle, newimgContainerStyle, newrec_NameStyle, newrec_PriceStyle, newrec_ButtonStyle} = this.props;
        const mainpro_container = ReactDOM.findDOMNode(this.rec_productContainer.current);
        const mainimg_container = ReactDOM.findDOMNode(this.imgContainer.current);
        const mainpro_name = ReactDOM.findDOMNode(this.mainrec_Name.current);
        const mainpro_price = ReactDOM.findDOMNode(this.mainrec_Price.current);
        const mainpro_button = ReactDOM.findDOMNode(this.mainrec_Button.current);

        if (newrec_ContainerStyle) mainpro_container.style.cssText = newrec_ContainerStyle;
        if (newimgContainerStyle) mainimg_container.style.cssText = newimgContainerStyle;
        if (newrec_NameStyle) mainpro_name.style.cssText = newrec_NameStyle;
        if (newrec_PriceStyle) mainpro_price.style.cssText = newrec_PriceStyle;
        if (newrec_ButtonStyle) mainpro_button.style.cssText = newrec_ButtonStyle;
    }

    buttonLink = () => {
        const { buttonLink } = this.props;
        if (buttonLink) this.props.history.push(buttonLink);
    }

    imgLink = () => {
        const { imgLink } = this.props;
        if (imgLink) this.props.history.push(imgLink);
    }

    render(){
        const {name, price} = this.props;
        return <>
        
       
        <Grid container >
            <Grid item xs={12} sm={12} md = {12}>
                <Box className = {Style.container}>
                    <Box ref={this.rec_productContainer}  className = {Style.rec_productContainer} >
                        
                        <Grid item md = {6} sm={6} xs={6} className = {Style.rec_productInfo}>
                            <h4 ref={this.mainrec_Name} className = {Style.mainrec_Name}>{name}</h4>
                            <h4 ref={this.mainrec_Price} className = {Style.mainrec_Price}>$ {price}</h4>
                            <Button ref={this.mainrec_Button} variant="outlined" className = {Style.mainrec_Button} onClick={() => this.buttonLink()} >GET IT NOW<ArrowRightIcon /></Button>
                        </Grid>
                        <Grid item md = {6} sm={6} xs={6} ref={this.imgContainer} className = {Style.imgContainer}>
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product} onClick={() => this.imgLink()}/>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
     
            
        </>
    }

}

const MainRectangleCard1 = withRouter(_MainRectangleCard1);

export { MainRectangleCard1 };