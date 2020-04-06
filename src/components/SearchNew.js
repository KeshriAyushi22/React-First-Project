
import React, { Component } from 'react'
import "../css/Search.css"
import ReportList from './reportList'



export default class Search extends Component {
   constructor(props){
       super(props)
       this.state={
           rowsArray: this.props.rows,
           filterItem:"",
           filterCount:"initial",
           colArray:this.props.columns,
           updatedList:[]
       }
   }


 handleChange=(e)=>{
   
           this.setState({
            filterItem:e.target.value,
            filterCount:"called"
                 })
                 console.log(this.state.filterItem)
  
}



    render() {
        const { filterItem, rowsArray} = this.state;
        const fil=[]
        let mapNew = new Map();
        const filteredData =  rowsArray.map((item,index,arr)=>{
          
            item.filter((data,index,a)=>{
                if(data!=null && typeof data !="number"){
                    let count=0;
                    if(data.includes(filterItem)) 
                       {
                           count=count+1
                           mapNew.set(index,count)
                       }
                }
              
            })
         
            
            // console.log("map => ")
            // console.log(mapNew)
            return fil
        })

     const   manipulateData=()=>{
            var b=[];
            let a=[]
            
            rowsArray.forEach((element,index) => {
                var object={};
                element.map((data,j,arr) =>{
                    this.state.colArray.map((ele,i,a)=>{
                        object[a[i]]=arr[j];
                      })
                   
                })
                 b.push(object)                

                  console.log(object)
                 
                
                 
                 
            });

            console.log(b) 
            console.log(a) 
        }
     
      
      
//filter->array of rows.
      
       
        const checkValidation= ()=>{
          if(this.state.filterCount==="initial"){
           return  <ReportList columns={this.props.columns} rows={this.props.rows} /> } 
          else if(this.state.filterCount==="called"){
              return filteredData!="" ? <ReportList columns={this.props.columns} rows={filteredData} />: "NO DATA FOUND"
            
  
          }
        }


      
 




        return (
            <div>
            <input type="text" placeholder="Search.." onChange={this.handleChange} className="search" />
          <div>{checkValidation()}</div>
          <div>{manipulateData()}</div>
             
           
    
            </div>
        )
    }
}