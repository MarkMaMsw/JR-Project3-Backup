import React from 'react'
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

class _ProductRectangleCard2 extends React.Component{
    constructor(){
        super();
        this.imgPath = React.createRef();
        this.imgContainer = React.createRef();
        this.rec_productInfo = React.createRef();
        this.rec_productColor = React.createRef();
        this.state = {
            name: "Product Name",
            price: 0,
            rate: 0,
            numofColor: 0,
        }
    }

    componentDidMount(){
        const { newimg_ContainerStyle, newrec_InfoStyle, newrec_ProductColorStyle} = this.props;
        const recimg_container = ReactDOM.findDOMNode(this.imgContainer.current);
        const recpro_info = ReactDOM.findDOMNode(this.rec_productInfo.current);
        const recpro_color = ReactDOM.findDOMNode(this.rec_productColor.current);

        if (newimg_ContainerStyle) recimg_container.style.cssText = newimg_ContainerStyle;
        if (newrec_InfoStyle) recpro_info.style.cssText = newrec_InfoStyle;
        if (newrec_ProductColorStyle) recpro_color.style.cssText = newrec_ProductColorStyle;
 
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
        const {name, price, rate, numofColor} = this.props;
        return<>
             <Grid item xs={12} sm={12} md = {6} lg = {4}>
                <div className = {Style.container}>
                    <div className = {Style.rec_productContainer} >
                        <div ref={this.imgContainer} className = {Style.imgContainer}>
                        <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className = {Style.rec_Product} onClick={() => this.imgLink()}/>
                        </div>
                        <div ref={this.rec_productInfo} className = {Style.rec_productInfo}>
                            <h4>{name}</h4>
                            <Rating name="disabled" value={rate} disabled />
                            <h4>$ {price}</h4>
                            <h4 ref={this.rec_productColor} className={Style.rec_productColor}>{numofColor} COLORS</h4>
                            <div className = {Style.plusIcon} onClick={() => this.buttonLink()}>
                                <AddIcon className = {Style.addIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
        </Grid>
        </>
    }
}


const ProductRectangleCard2 = withRouter(_ProductRectangleCard2);

export { ProductRectangleCard2 };