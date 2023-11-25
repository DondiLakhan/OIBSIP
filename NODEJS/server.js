const express = require('express');
const app = express();
app.get("/",function(req,res){
    res.send("hi wwlcome to my webpage");
});
app.get("/service",function(req,res){
    res.send("wEB DEVEOPMENT,  UI DESIGN , UI DESIGN")
});
app.listen(3000,function(){
    console.log("server started");
});