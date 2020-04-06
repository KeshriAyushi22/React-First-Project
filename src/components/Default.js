import React from "react"
import {NavLink} from "react-router-dom";
import "../css/report.css"

const defaultPage = (props)=>{
    
   return (
   <div className="table-wrapper">
      <h3>{props.showLogStatus}</h3> 
   <h3>localstoragedata:  {localStorage.getItem('user')}</h3>
       <table className="fl-table">
                        <thead>
                            <th>reportName</th>
                            <th>Link</th>
                        </thead>
                        <tbody>
                            <tr>
                               <td>Get report data-previous</td>
                               <td><NavLink  to="/report">Get Report</NavLink></td>
                            </tr>
                            <tr>
                                <td>Get report data-new</td>
                                <td><NavLink  to="/reportData">Get Report New</NavLink></td>
                            </tr>
                        </tbody>
                    </table>
    </div> )
}

export default defaultPage;