import React from "react";
import { PostData } from "../Services/postData";
import "../css/Login.css"


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }

  login() {
    
    console.log(this.state) 
    PostData(this.state).then(result => {  //PostData is hitting the backend
      console.log(result)
      if(result.responseData.sc==="0000|Success" || result.responseData.sc==="1014|No data found"){
        {this.handleAuthentication(result.responseData)}
        
      }else{
        alert("username or password incorrect!")
      }
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }) 
    //we are setting the name from the targetted event and setting its value each time its changing
  }

  handleAuthentication(data){
    console.log(this.props.history)
    this.props.history.push("/home")
    this.props.handleData(data)
  }

  render() {
    return (
      <div>
        <h4> Status: {this.props.showLogStatus}</h4>
        <div className="container">

          <div className="row">
            <div className="col-25">
              <label >USERNAME</label>
            </div>
            <div className="col-75">
              <input type="text" name="username" placeholder="Your username.." onChange={this.onChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label > PASSWORD</label>
            </div>
            <div className="col-75">
              <input type="password" id="lname" name="password" placeholder="Your password.." onChange={this.onChange} />
            </div>
          </div><br/><br/>
          <div className="row">
            <button type="button" onClick={this.login} name="login" value="login" handleAuthentication={this.handleAuthentication}>Login</button>
          </div>
        </div>
      </div>
        );
      }
    }
    
export default LoginPage;
