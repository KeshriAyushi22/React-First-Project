// const proxy= require("http-proxy-middleware");


// //app is the class compnent that is rendered by index.js so using that whole main page and passing its value here.
// module.exports =function(app){
//     app.use(
//         proxy("/downloadableReport",{
//             target:"http://192.168.1.220:28080/xmsreport/report" ,
//             changeOrigin:true
//         })
//     )
// };