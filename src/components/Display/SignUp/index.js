import React from "react";
import Style from "./style.module.scss";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <>
            <div className={Style.SignUp}>
                <div className={Style.signUpContainer}>
                    <form>
                        <h1>Create Account</h1>
                        <span>or use your email for regiestration</span>
                        <input
                            type="text"
                            placeholder="Name"
                            name="Name"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="Email"
                            value={this.state.value}
                            onChange={this.handleChange}/>
                        <input
                            type="password"
                            placeholder="Password"
                            name="Password"
                            value={this.state.value}
                            onChange={this.handleChange}
                            />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
                <div className={Style.signUpLayer}>
                        <h1>Hello, Friends!</h1>
                        <p className={Style.signUpP}>
                            If you have an account, please sign in.
                        </p>
                        <button
                            type="primary"
                            className={Style.ghost}
                            id="signUp">
                               <Link to="/login">Sign In</Link>
                        </button>
                </div>
            </div>
        </>
    }
}

export default SignUp;
const FootBar = withRouter(SignUp);

export { FootBar };