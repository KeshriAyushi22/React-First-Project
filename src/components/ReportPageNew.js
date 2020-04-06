import React, { Component } from 'react'
import LogOut from './LogOut'
import { DownloadFile } from '../Services/postData'
import Search from "./Search"
import "../css/Search.css"




export default class ReportPageNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            columns: this.props.user.columns,
            rows: this.props.user.rows,
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

    manipulateData() {

        const baseArray = [];

        this.state.rows.forEach((element, index) => {
            var object = {};
            element.map((data, j, arr) => {
                object[this.state.columns[j]] = arr[j];
            })
            baseArray.push(object)

        });
        this.handleData(baseArray)
    }

    componentWillMount() {
        this.manipulateData();
    }



    render() {

        return (
            <>
                {/* <h4> Status: {this.props.showLogStatus}</h4> */}
                <div>
                    <button className="logout" onClick={this.download}>download</button>
                    <LogOut {...this.props} loggedInStatus={this.props.loggedInStatus} />
                    <Search list={this.state.maniData}{...this.props}></Search>
                </div>
            </>
        )

    }
}

