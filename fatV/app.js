var express = require("express");
var app = express();

app.get("/",function(req,res) {
  res.send ("Hi there Fat Varg here!");
});
app.get("/speak/:animalVoice",function(req,res) {
  var sounds = {
    pig:"oink",
    cow:"moo",
    dog:"woof",
    cat:"fuck you!",
  }
  var animal = req.params.animalVoice.toLowerCase();
  var sound = sounds[animal];
  res.send ("the "+animal+" goes '"+sound+"'");
});
app.get("/repeat/:message/:times",function(req,res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";
  for (var i = 0; i < times; i++) {
    result += message;
  }
  res.send(result);
});



app.get ("*",function(req,res){
  res.send("you are lost");
});

app.listen(3000,function(){
  console.log("server has started");
});
