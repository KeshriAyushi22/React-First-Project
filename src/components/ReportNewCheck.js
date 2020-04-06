import React, { Component } from 'react'
import LogOut from './LogOut'
import { DownloadFile } from '../Services/postData'
import Search from "./Search"
import "../css/Search.css"
import { PostData } from "../Services/postData"




export default class ReportNewCheck extends Component {

    constructor(props) {
        super(props)
        this.state={
            maniData:""
        }

    }

    download = () => {
        DownloadFile()
    }

  
        handleData = (baseArray) => {
            this.setState({
                maniData: baseArray
            })
           
        }
    
        
    manipulateData(rows,columns) {

        const baseArray = [];

       rows.forEach((element, index) => {
            var object = {};
            element.map((data, j, arr) => {
                object[columns[j]] = arr[j];
            })
            baseArray.push(object)

        });
        this.handleData(baseArray)
    }



    componentDidMount() {
        PostData().then(result => {
         //   console.log("component did mount of reportCheck")
            console.log(result)
            if (result.responseData.sc === "0000|Success") {
               // console.log(result.responseData.rows)
               this.manipulateData(result.responseData.rows,result.responseData.columns)
              
              
            }else if(result.responseData.sc === "9999|Internal error") {
                            this.props.history.push("/home");
                            alert("Connection Timeout!")
            }else {
                this.props.history.push("/");
                alert("username or password incorrect!")
            }
        })
    }




    render() {

        return (
            <>
                <h4> Status: {this.props.showLogStatus}</h4>
                <div>
                    <button className="logout" onClick={this.download}>download</button>
                    <LogOut {...this.props} loggedInStatus={this.props.loggedInStatus} />
                    <Search list={this.state.maniData}></Search>
                </div>
            </>
        )

    }
}

