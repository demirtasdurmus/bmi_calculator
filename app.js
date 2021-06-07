const express=require("express");

const app=express();
app.use(express.urlencoded({extended: true}));



//////
app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weigh=parseFloat(req.body.Weight);
  var heigh=parseFloat(req.body.Height);
  var result= weigh/(heigh*heigh);
  res.send("Your BMI is " + result);
});

app.listen(3000, function() {
  console.log("The server has started on port 3000");
});

//////
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.Num1);
  var num2 = Number(req.body.Num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});
