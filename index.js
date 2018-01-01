var express= require("express");
var Webtask=require("webtask-tools");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(require('./middlewares/db').connectDisconnect);
require('./route/stories')(app);
module.exports=Webtask.fromExpress(app);