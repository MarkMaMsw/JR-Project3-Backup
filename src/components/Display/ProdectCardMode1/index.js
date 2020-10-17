import React from 'react';
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import VanillaTilt from "vanilla-tilt"

class _ProdectCardMode1 extends React.Component {
    constructor() {
        super();
        this.container = React.createRef();
        this.box = React.createRef();
        this.name = React.createRef();
        this.buy = React.createRef();
        this.circle = React.createRef();
        this.imgPath = React.createRef();
        this.state = {
            name: "Product Name",
            buyNow: "Buy Now"
        }
    }

    componentDidMount() {

        const { newStyle, newCircleStyle, newBackgroundStyle, name, buyNow } = this.props;

        const container = ReactDOM.findDOMNode(this.container.current);
        const box = ReactDOM.findDOMNode(this.box.current);
        const circle = ReactDOM.findDOMNode(this.circle.current);

        // const buy = ReactDOM.findDOMNode(this.buy.current);
        // const name = ReactDOM.findDOMNode(this.name.current);
        // const imgPath = ReactDOM.findDOMNode(this.imgPath.current);

        if (newStyle) container.style.cssText = newStyle;
        if (newCircleStyle) circle.style.cssText = newCircleStyle;
        if (newBackgroundStyle) box.style.cssText = newBackgroundStyle;
        if (name) this.setState({ name })
        if (buyNow) this.setState({ buyNow })
        VanillaTilt.init(box, {
            max: 25,
            speed: 400
        });
    }

    buyGoto = () => {
        const { buyGoto } = this.props;
        if (buyGoto) this.props.history.push(buyGoto);
    }

    imgGoto = () => {
        const { imgGoto } = this.props;
        if (imgGoto) this.props.history.push(imgGoto);
    }

    render() {
        return <>
            <div ref={this.container} className={Style.container}>
                <div ref={this.box} className={Style.box}>
                    <h2 ref={this.name} className={Style.name}>{this.state.name}</h2>
                    <span ref={this.buy} className={Style.buy} onClick={() => this.buyGoto()}>{this.state.buyNow}</span>
                    <div ref={this.circle} className={Style.circle}></div>
                    <img ref={this.imgPath} src={this.props.imgPath} alt="shoes" className={Style.product} onClick={() => this.imgGoto()} />
                </div>
            </div>
        </>
    }

}

const ProdectCardMode1 = withRouter(_ProdectCardMode1);

export { ProdectCardMode1 };