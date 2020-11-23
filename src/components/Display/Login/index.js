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
                    <form>
                        <span>New Here?</span>
                        <div className={Style.signUpLink}>
                            
                            <Link to="/signup"><button>
                                I want to BUY
                            </button></Link>
                            <Link to="/signup"><button>
                                I want to SELL
                            </button></Link>
                        </div>
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
                            <button type="submit">LOG IN</button>
                            <div className={Style.textRight}>
                                <a href="/signup">Forgot password?</a>
                            </div>
                            
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    }
}

export default Login;

const FootBar = withRouter(Login);

export { FootBar };