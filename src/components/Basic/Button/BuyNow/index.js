import React from "react";
import Css from "./style.module.css";
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";


class _ButtonBuyNow extends React.Component {
    constructor() {
        super();
        this.buyRef = React.createRef();
        this.state = {
            text: "Buy Now"
        }
    }
    goto() {
        let { link } = this.props;
        if (!link) link = "/";
        this.props.history.push(link);
    }
    componentDidMount() {
        const { newStyle, children } = this.props;
        const button = ReactDOM.findDOMNode(this.buyRef.current);
        button.style.cssText = newStyle;

        if (children) this.setState({ text: children });
    }
    render() {
        const { text } = this.state;
        return <span ref={this.buyRef} className={Css.buy_now} onClick={() => this.goto()}>{text}</span>
    }
}

const ButtonBuyNow = withRouter(_ButtonBuyNow);

export { ButtonBuyNow };