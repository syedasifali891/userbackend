var express = require("express");
 var bodyParser=require("body-parser");
 var app=express();
 app.set('view engine','ejs');
 app.use(express.static("public"));
 app.use(bodyParser.urlencoded({extended:true}));
 var i="";
 app.get("/",function(req,res)
 {
   //res.send("Hi Asif");
   res.render("list",{newListItem:i});
 })
 app.post("/",function(req,res)
 {
  i=req.body.n;
  //console.log(i);
  //res.render("list",{newListItem:i});
  res.redirect("/");
 })
 app.listen(3000, function () {
   console.log(" Listening to the port 3000" );

   
 })