import axios from "axios"



function getUrlVars() {
    console.log("insideurlVars")
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    console.log("insidegetUrlParam" +parameter)
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}


//working code
// export function PostData(userData) {
  
//     var targetUrl = '/xmsreport/report/reportdata'
//     return new Promise((resolve, reject) => {
//         fetch(targetUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': "application/json; charset=utf-8",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify({

//                 "requestData": {
//                     "userName": userData.username,
//                     "password": userData.password,
//                     "clientId": "ptm",
//                     "reportId": "4",
//                     "txnType": "GRD"


//                 }

//             })

//         })
//             .then(response => response.json())
//             .then((responseJson) => {
//                 resolve(responseJson)
//             })
//             .catch((error) => {
//                 reject(error)
//             })
//     })


// }


//testing
export function PostData() {
    
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }
    
    function getUrlParam(parameter, defaultvalue){
        var urlparameter = defaultvalue;
        if(window.location.href.indexOf(parameter) > -1){
            urlparameter = getUrlVars()[parameter];
            }
        return urlparameter;
    }
    var targetUrl = '/xmsreport/report/reportdata'
    return new Promise((resolve, reject) => {
        fetch(targetUrl, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json; charset=utf-8",
                "Accept": "application/json"
            },
            body: JSON.stringify({

                "requestData": {
                    "userName":(localStorage.hasOwnProperty("user")?localStorage.getItem('user'):getUrlParam("un","")),
                    "password":(localStorage.hasOwnProperty("pass")?localStorage.getItem('pass'):getUrlParam("ps","")),
                    "clientId": "ptm",
                    "reportId": "4",
                    "txnType": "GRD"


                }

            })

        })
            .then(response => response.json())
            .then((responseJson) => {
                resolve(responseJson)
            })
            .catch((error) => {
                reject(error)
            })
    })


}

export function DownloadFile() {
    var targetUrl = '/xmsreport/report/reportdatadownload'
    return new Promise((resolve, reject) => {
        fetch(targetUrl, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json; charset=utf-8",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "requestData": {
                    "userName": (localStorage!=""?localStorage.getItem('user'):this.getUrlParam("un","")),
                    "password":(localStorage!=""?localStorage.getItem('pass'):this.getUrlParam("ps","")),
                    "reportId": "4",
                    "clientId": "ptm",
                    "txnType": "GRDD",
                    "resType": "xlsx"
                }

            }),
            responseType: 'blob',
        })
            .then(response => response.blob())
            .then(blob => {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download =  `report_${(new Date().toLocaleDateString("en", {year:"numeric", day:"2-digit", month:"2-digit"}))}.xlsx`;
                document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                a.click();    
                a.remove();  //afterwards we remove the element again  
                resolve('file downloaded');       
            })
        .catch(e => reject(e));
    });
}
