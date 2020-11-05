import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';

class _ProductRectangleCard1 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.rec_productContainer = React.createRef();
        this.rec_productName = React.createRef();
        this.rec_productPrice = React.createRef();
        this.rec_productRateText = React.createRef();
        this.state = {
            name: "Product Name",
            price: 0,
            rate: 0,
        }
    }


    componentDidMount(){
        const { newrec_ContainerStyle, newrec_NameStyle, newrec_PriceStyle, newrec_RateTextStyle} = this.props;
        const recpro_container = ReactDOM.findDOMNode(this.rec_productContainer.current);
        const recpro_name = ReactDOM.findDOMNode(this.rec_productName.current);
        const recpro_price = ReactDOM.findDOMNode(this.rec_productPrice.current);
        const recpro_rate = ReactDOM.findDOMNode(this.rec_productRateText.current);

        if (newrec_ContainerStyle) recpro_container.style.cssText = newrec_ContainerStyle;
        if (newrec_NameStyle) recpro_name.style.cssText = newrec_NameStyle;
        if (newrec_PriceStyle) recpro_price.style.cssText = newrec_PriceStyle;
        if (newrec_RateTextStyle) recpro_rate.style.cssText = newrec_RateTextStyle;

    }

    imgLink = () => {
        const { imgLink } = this.props;
        if (imgLink) this.props.history.push(imgLink);
    }

    render(){
        const {name, price, rate} = this.props;
        return<>
            <Grid item xs={12} sm={6} md = {6} lg = {4}>
                <div className = {Style.container}>
                    <div ref={this.rec_productContainer}  className = {Style.rec_productContainer} >
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product} onClick={() => this.imgLink()}/>
                        <div className = {Style.rec_productInfo}>
                            <h4 ref={this.rec_productName} className = {Style.rec_productName}>{name}</h4>
                            <div className = {Style.rec_productExtraInfo}>
                                <h4 ref={this.rec_productPrice} className = {Style.rec_productPrice}>$ {price}</h4>
                                <div className = {Style.rec_productRate}>                                       
                                    <h4 ref={this.rec_productRateText} className = {Style.rec_productRateText}><StarIcon color = "secondary"/>{rate}</h4>
                                </div>
                                
                            </div>
                        </div>         
                    </div>
                </div>
            </Grid>
        </>
    }
}


const ProductRectangleCard1 = withRouter(_ProductRectangleCard1);

export { ProductRectangleCard1 };