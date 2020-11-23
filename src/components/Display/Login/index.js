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
            <div className={Style.signIn}>
                <div className={Style.signInContainer}>
                    <span>New Here?<br/><br/>
                    Click  &nbsp;
                    <a href="/signup" className={Style.signUpLink}>
                        here
                    </a>
                    &nbsp;to sign up.
                    </span>
                    <form>
                        <h1> Log In</h1>
                        <div className={Style.signInForm}>
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
                            <button className={Style.buttonLogin} type="submit">LOG IN</button>          
                        </div>
                        <p><a href="/signup">Forgot password?</a></p>
                    </form>
                </div>
            </div>
        </>
    }
}

export default Login;

const FootBar = withRouter(Login);

export { FootBar };