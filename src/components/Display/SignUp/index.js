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
            <div className={Style.signUp}>
                <div className={Style.signUpContainer}>
                    <h1>Sign Up</h1>
                    <div className={Style.loginLink}>
                        <p>Already have an account?</p>
                        <a href="/login" className={Style.loginP}>Log in</a>
                    </div>
                    <form>
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
                        <hr/>
                        <div className={Style.inputGroup}>
                            <input
                                type="text"
                                placeholder="FirstName"
                                name="FirstName"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                            <input
                                type="text"
                                placeholder="LastName"
                                name="LastName"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </div>
                        <div className={Style.inputGroup}>
                            <input
                                type="text"
                                placeholder="City"
                                name="City"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                            <input
                                type="text"
                                placeholder="ZipCode"
                                name="Zip Code"
                                value={this.state.value}
                                onChange={this.handleChange}/>
                        </div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="Address"
                            value={this.state.value}
                            onChange={this.handleChange}/>
                        <button type="submit">Sign Up</button>
                    </form>
                    
                </div>
            </div>
        </>
    }
}

export default SignUp;
const FootBar = withRouter(SignUp);

export { FootBar };