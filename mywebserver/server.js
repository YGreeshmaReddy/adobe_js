let appModule= require("./app");
//appModule.appInit();
let handlers=require("./requestHandlers");
const express = require('express')
const app = express();
app.use(express.static(__dirname));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.listen(8000, () => {
//   console.log('Example app listening on port 8000!')
// });

// app.get("/",function(req,res){

// });
// app.get("/userAdminDashboard.html",function(req,res){

// });
// app.use("/",function(req,res,next){
//     console.log("Middleware3");
//     next();
// });
// app.use("/",function(req,res,next){
//     console.log("Middleware1");
//     next();
// });
// app.use("/",function(req,res,next){
//     console.log("Middleware2");
//     res.send("Response from Middleware2")
// });
//app.use(express.static(__dirname));
//app.get("/",handlers.root_get);
app.listen(8000,appModule.appInit);
