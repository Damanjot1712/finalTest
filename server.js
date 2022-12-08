/*********************************************************************************
* WEB 322- TEST 6
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __Damanjot Singh____ Student ID: __148285216_____ Date: ____08/12/2022_____
*
*  Online(Cyclic) URL:  https://lively-frog-buckle.cyclic.app 
********************************************************************************/

var express = require("express");
var path = require("path");
const app = express();
app.use(express.static("public"));
var Final = require('./final.js');
const port = process.env.PORT || 8080;
function onhttp(){
  console.log("Express http server listening on port",port);
}

app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, '/finalViews/home.html'));
});

app.get("/register", function(req,res){
  res.sendFile(path.join(__dirname,'/finalViews/register.html'));
});

app.post("/register",(req, res) => {
    Final.registerUser(req.body).then(() =>{
     res.send(data.email + 'You have registered successfully. <br> <a href ="/home">Go home</a>');
    }).catch(err => res.render({message: "Error"}));
  
  });
  
app.get("/signIn", function(req,res){
  res.sendFile(path.join(__dirname, '/finalViews/signIn.html'));
});

app.post("/signIn",(req, res) => {
  Final.signIn().then(() =>{
  }).catch(err => res.render({message:"Error!!!"}));

})
  app.use((req, res) => {
    res.status(404).send("Page Not Found!!!");
  });

  Final.startDB()
  .then(Final.startDB)
  .then(function () {
    app.listen(port, onhttp);
   })
   .catch(function (err) {
     console.log('Failed to start!' + err);
   });