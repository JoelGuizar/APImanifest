const express = require("express");
const app = express();
const CP = require('cookieparser');
const BP = require('bodyparser');

app.listen("4000");

app.get("/", function(req,res){
  res.send("hey");
})
