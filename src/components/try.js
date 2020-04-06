

var columns =[
    "Description",
    "Count",
    "Date"
 ]

var rows= [
    [
       "Total Cumulative Devices",
       "11",
       "2019-08-27"
    ],
    [
       "Total Cumulative Cards",
       "7",
       "2019-08-27"
    ],
    [
       "Total Cumulative Transactions",
       "21",
       "2019-08-27"
    ],
    [
       "Total Active Devices",
       "5",
       "2019-08-27"
    ],
    [
       "Total Active Cards",
       "5",
       "2019-08-27"
    ],
    [
       "Devices activated",
       "0",
       "2019-08-27"
    ],
    [
       "Cards activated",
       "0",
       "2019-08-27"
    ] ]

    // console.log(columns)
    // console.log(rows)

   
    rows.map((item,index,arr)=>{
        var fil=[]
        item.filter((data,index,a)=>{
          if(data.includes("Total Active Cards")) 
            fil.push(a)
            
           
        })
     
        if(!fil=="")
        console.log(fil)
    })
    