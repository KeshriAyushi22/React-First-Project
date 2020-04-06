import React, { Component } from 'react'
import "../css/Search.css"



export default class LogOut extends Component {
    logOff=()=>{
        console.log(this.props.loggedInStatus)
        this.props.history.push("/")
        this.props.handleData("");
    }
    
   
    render() {
        return (
            <div>
                <button className="logout" onClick={this.logOff}>LogOut</button> 
            </div>
        )
    }
}


