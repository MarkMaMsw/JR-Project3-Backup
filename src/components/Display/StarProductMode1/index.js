import React from "react";
// import Css from "./style.module.scss";
import { withRouter } from 'react-router-dom';

class StarProductMode extends React.Component {
    constructor() {
        super();
        this.state = {
            background: "#fff",
            color: "#000",
            isback: false
        }
    }

    componentDidMount() {
        if (this.props.newStyle && this.props.newStyle === "black") {
            this.setState({
                background: "#000",
                color: "#fff",
                isback: true
            })

        }

        if (this.props.backgroundColor) {
            this.setState({
                background: this.props.backgroundColor,
            })
        }

        if (this.props.Color) {
            this.setState({
                color: this.props.Color,
            })
        }

    }

    buy = () => {
        this.props.history.push(this.props.whereToGo);
    }

    img = () => {
        if (!this.props.imgToGo) {
            this.buy();
        } else {
            this.props.history.push(this.props.imgToGo);
        }
    }

    render() {

        const new_style = {
            background: this.state.background,
            color: this.state.color
        }

        return <>
            <div className="star_product" style={new_style}>
                <div className="introduce" style={new_style}>
                    <span className="brief_introduction" style={new_style}>{this.props.brief}</span>
                    <span className="price" style={new_style}>{this.props.price}</span>
                    <div style={new_style}>
                        <span className="buy_now" onClick={() => this.buy()}> BUY NOW</span>
                    </div>
                    <div style={new_style}>
                        {!this.state.isback && this.props.other && <span className="other_introduction">{this.props.other}</span>}
                        {this.state.isback && this.props.other && <span className="other_introduction" style={new_style}>{this.props.other}</span>}
                    </div>
                </div>
                <img className="production_img" alt="haha" src={this.props.imgPath} onClick={() => this.img()}></img>
            </div>
        </>
    }

}

const StarProductMode1 = withRouter(StarProductMode);

export { StarProductMode1 };