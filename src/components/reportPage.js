import React, { Component } from 'react'
import Search from "./Search"
import LogOut from './LogOut'
import ReportList from "../components/reportList"


export default class reportPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            res:this.props.user,
            responseData: {
                sc: "0000|Success",
                clientId: "ptm",
                reportStatus: [
                    {
                        reportName: "sale_report",
                        id: "275",
                        status: "AVAILABLE"
                    },
                    {
                        reportName: "sale_report",
                        id: "276",
                        status: "PENDING"
                    },
                    {
                        reportName: "sale_report",
                        id: "277",
                        status: "AVAILABLE"
                    },
                    {
                        reportName: "sale_report",
                        id: "278",
                        status: "AVAILABLE"
                    },
                    {
                        reportName: "sale_report",
                        id: "279",
                        status: "AVAILABLE"
                    },
                    {
                        reportName: "sale_report",
                        id: "280",
                        status: "PENDING"
                    }
                ],
                userName: "xip"
            },

          

        }

    }



    render() {
        return (
            
            <>
           {/* <h4> Status: {this.props.showLogStatus}</h4> */}
            <div>
                <button onClick={this.download}>download</button>
                <LogOut {...this.props} loggedInStatus={this.props.loggedInStatus}/>
                <Search list={this.state.responseData.reportStatus}{...this.props}/>
            </div>
           
            </>
        )
    }
}


