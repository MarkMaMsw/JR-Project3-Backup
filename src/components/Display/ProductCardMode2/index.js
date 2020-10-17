import React from 'react';
import Style from "./style.module.scss"
import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";

class _ProdectCardMode2 extends React.Component {
    constructor() {
        super();
        this.container = React.createRef();

        this.state = {

        }
    }

    componentDidMount() {

        const { newStyle, name, buyNow } = this.props;
        const container = ReactDOM.findDOMNode(this.container.current);


        if (newStyle) container.style.cssText = newStyle;
        if (name) this.setState({ name })
        if (buyNow) this.setState({ buyNow })

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

            </div>
        </>
    }

}

const ProdectCardMode2 = withRouter(_ProdectCardMode2);

export { ProdectCardMode2 };