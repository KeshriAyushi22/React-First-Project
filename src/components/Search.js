import React, { Component } from "react";
import "../css/Search.css";
import "../css/Image.css";
import ReportList from "./reportList";
import noDataFound from "../Images/noDataFound.jpg"

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: null,
      filterItem: "",
      filterCount: "initial"
    };
  }

  componentDidUpdate(prevProps) {
   // console.log("component did update of search")
    if(prevProps.list!=this.props.list){
      this.setState({
        showData:this.props.list
      })
     
    }
 }


  handleChange = e => {
    this.setState({
      filterItem: e.target.value,
      filterCount: "called"
    });
  };

  


  render() {
    //filtering the data
    const { filterItem, showData } = this.state;
    var filteredData=""
    console.log("showData: "+showData)
     console.log(filterItem)
     if(showData){
     filteredData = showData.filter(item => {
      if (item != null && typeof item != "number") {
        return Object.keys(item).some(
          key =>
            (typeof item[key] === "string" && item[key].includes(filterItem)) ||
            (typeof item[key] === "number" && item[key] === Number(filterItem))
        );
      }
    });
  }

    const checkValidation = () => {
      if (this.state.filterCount === "initial"&& filteredData) {

        return <ReportList data={filteredData} />;
      } else if (this.state.filterCount === "called") {
        return filteredData != "" ? (
          <ReportList data={filteredData} />
        ) : (
          <img src={noDataFound} alt="NO DATA FOUND" />
        );
      }
    };

    return (
      <div>
        <input
          type="text"
          placeholder="Search.."
          onChange={this.handleChange}
          className="search"
        />
        <div>{checkValidation()} </div>
      </div>
    );
  }
}
