import React from "react";
import {
  BrowserRouter,
  Switch
} from "react-router-dom";
import Route from "react-router-dom/Route";

import LoginPage from "./components/LoginPage";
import DefaultPage from "./components/Default";
import ReportPage from "./components/reportPage";
import Header from "./components/Header";
import ReportPageNew from "./components/ReportPageNew"
import LoginPageNew from "./components/LoginPageNew"
import ReportNewCheck from "./components/ReportNewCheck"



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showLogStatus:"not logged in",
      loggedInStatus: false,
      user:""
    };
    this.handleData=this.handleData.bind(this)
  }
 
  handleData (data){
    if(this.state.showLogStatus==="not logged in"){
      this.setState({ showLogStatus:"logged In Successfully"})}
      else{
        this.setState({ showLogStatus:"not logged in"})
      }
    
    this.setState({
           loggedInStatus:!this.state.loggedInStatus,
           user: data
    })
   
  }
  render() {
    return (

      <BrowserRouter>
        <Header />
        <Switch>
         
        <Route
            path="/"
            exact
            render={props => (
              <LoginPageNew {...props} handleData={this.handleData} loggedInStatus={this.state.loggedInStatus}
              showLogStatus={this.state.showLogStatus} />
            )}>
          </Route>


          <Route
            path="/old"
            exact
            render={props => (
              <LoginPage {...props} handleData={this.handleData} loggedInStatus={this.state.loggedInStatus}
              showLogStatus={this.state.showLogStatus} />
            )}>
          </Route>

          <Route path="/home"
            exact
            render={props => (
              <DefaultPage {...props} handleData={this.handleData} loggedInStatus={this.state.loggedInStatus}
              showLogStatus={this.state.showLogStatus} user={this.state.user} />
            )}>
          </Route>

          <Route
            path="/report"
            exact
            render={props => (
              <ReportPage {...props} handleData={this.handleData} loggedInStatus={this.state.loggedInStatus}
              showLogStatus={this.state.showLogStatus} />
            )}>
          </Route>
          
          {/* <Route
            path="/reportData-working"
            exact
            render={props => (
              <ReportPageNew {...props} handleData={this.handleData} loggedInStatus={this.state.loggedInStatus}
              showLogStatus={this.state.showLogStatus} user={this.state.user} />
            )}>
          </Route> */}

          <Route
            path="/reportData"
            exact
            render={props => (
              <ReportNewCheck {...props} handleData={this.handleData} loggedInStatus={this.state.loggedInStatus}
              showLogStatus={this.state.showLogStatus} user={this.state.user} />
            )}>
          </Route>
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
