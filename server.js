const express = require("express");
const app = express();
const CP = require('cookieparser');
const BP = require('bodyparser');

app.CP();
app.BP();

app.listen(4000);

app.get("/", function(req,res){
  res.send("hey");
})

app.get("/spotify", function(req,res){
  res.send("spotify working");
})

app.get("/pandora", function(req,res){
  res.send("spotify working");
})
