var express = require("express");
var app = express();

app.get("/",function (req,res) {
  console.log("request to / ");
  res.send("woof");

});
app.get("/dog",function (req,res) {
  console.log("request to dog ");
  res.send("woof");

});
app.get("/r/:subredditName",function (req,res) {
  var subreddit = req.params.subredditName;
  res.send("welcome to the "+subreddit.toUpperCase()+" SUBREDDIT");

});
app.get("/r/:subredditName/comments/:id/:title",function (req,res) {
  res.send("welcome to the comments page");

});

app.get ("*",function(req,res){
  res.send("you are lost");
});

app.listen(3000,function(){
  console.log("server has started");
});
