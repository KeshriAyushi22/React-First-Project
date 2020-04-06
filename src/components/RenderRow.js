import React from 'react'

const RenderRow = (props) =>{
     
    if(!props.hasOwnProperty("columns")){
        return props.keys.map((key, index)=>{
            return(props.data[key]!==null)? <td key={props.data[key]}>{props.data[key]}</td> :<td>{"--"}</td>
            })
    }else{
       return (props.data!==null)?<td key={props.keys}>{props.data}</td>:<td>{"--"}</td>
    }
  }

   export default RenderRow;