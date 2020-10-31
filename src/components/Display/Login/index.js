import React from "react";
import Style from "./style.module.scss";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return <>
            <div className={Style.SignIn}>
                <div className={Style.signInContainer}>
                    <form>
                        <h1>Sign In</h1>
                        <span>or use your account</span>
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
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <div className={Style.signInLayer}>
                        <h1>Welcome back!</h1>
                        <p className={Style.signInP}>
                            Enter your personal details to sign up
                        </p>
                        <button className={Style.ghost}>
                            <Link to="/signup">Sign Up</Link></button>
                </div>
            </div>
        </>
    }
}

export default Login;

const FootBar = withRouter(Login);

export { FootBar };