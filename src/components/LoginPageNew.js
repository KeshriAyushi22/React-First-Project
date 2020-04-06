import React from "react";
import { PostData } from "../Services/postData";
import "../css/Login.css";


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
           }

    login() {
        const { username, password } = this.state;
        if (username === "xip" && password === "xip123") {
            localStorage.setItem('user', username);
            localStorage.setItem('pass', password);
            this.handleAuthentication()
        
        } else {
            alert("username or password incorrect!")
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleAuthentication(data) {
        this.props.history.push("/home");
        this.props.handleData(data);
    }
componentDidMount(){
    localStorage.clear();
}

    render() {
        return (
            <div>
                <h4> Status: {this.props.showLogStatus}</h4>

                <div className="container">

                    <div className="row">
                        <div className="col-25">
                            <label>USERNAME</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="text"
                                name="username"
                                placeholder="Your username.."
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label> PASSWORD</label>
                        </div>
                        <div className="col-75">
                            <input
                                type="password"
                                id="lname"
                                name="password"
                                placeholder="Your password.."
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <button
                            type="button"
                            onClick={this.login}
                            name="login"
                            value="login"
                            handleAuthentication={this.handleAuthentication}>SIGN IN</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
