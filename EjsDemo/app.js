var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.get ("/",function(req,res) {
  res.render("home");

});

app.get ("/fallinlove/:thing",function(req,res) {
  var thing = req.params.thing;
  res.render("love",{thinkVar: thing});

});
app.get ("/posts",function(req,res) {
  var posts = [
    {title:"Post 1",author:"thatguy"},
    {title:"Post 2",author:"thatguy"},
    {title:"Post 3",author:"thatguy"},
    {title:"Post 4",author:"thatguy"}
  ];
res.render("posts",{posts:posts});
});






app.listen(3000,function(){
  console.log("server has started");
});
