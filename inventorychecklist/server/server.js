const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser")
const { request, response } = require("express");
const express = require("express");   //requiring the express module so we can use it in our code
const app = express();
const PORT = process.env.PORT || 3001;
let reqPath = path.join(__dirname ,"../");  
app.use(express.static(path.join(reqPath,"build")));
app.use(express.static("build"));
app.use(bodyParser.urlencoded({
  extended: true
}));
var loggedOn = false;
const users = require("./users.json");
const { findCacheDir } = require("webpack-dev-server");
const { compileFunction } = require("vm");
const admin = "admin"; 
const posts = [
  {
    username: "Ardonniss", 
    title: "Post 1"
  }, 
  {
    username: "Destiny", 
    title: "Post 2"
  }
]
app.get("/posts", function(request, response){
  response.json(posts);
})


app.post("/user/login", async function(request, response){
  const user = users.find(user => user.Email === request.body.name); 
  const input = request.body.password;
  if(user == null){
    return response.status(400).send("Cannot find User"); 
  }
  if(user.Password == input)
  {
    if(user.Privelege == admin)
      console.log("an Admin has logged in"); 
    return response.redirect("/inventory")
  }
  else
  {
    return response.redirect("/user/login")
  }
})
 app.post("/inventory/admin", function(request, response){
  const deviceObj = {
    device_ID: request.body.device_ID, 
    device_Type: request.body.device_Type, 
    device_Brand: request.body.device_Brand, 
    device_serialNum: request.body.device_serialNum
} 
  fs.readFile("./src/devices.json","utf8", function(error,jsondeviceData){
    if(error) {
        console.log(error);
        return;
    }
    deviceData = JSON.parse(jsondeviceData);
    deviceData.push(deviceObj);
    var jsonStr = JSON.stringify(deviceData, null, 2);
    fs.writeFile("./src/devices.json",jsonStr, (error) =>{
        if(error)
            console.log("Trouble reading file");
        else {
            console.log("File written successfully");
            return response.redirect("/inventory/admin")
        }
    })
})
 })
 app.post("/user/login", function(request, response){
   
 })
 app.post("/inventory", function(request, response){
   response.redirect("/inventory");
 })
 app.get("/user/login", function(request, response){
   response.sendFile(path.join(reqPath,"build","index.html"))
 })
 app.get("/users", function(request,response){
   response.json(users);
 })
 app.get("/inventory", function(request, response){
  response.sendFile(path.join(reqPath,"build","index.html"))
})
app.get("/inventory/admin", function(request, response){
  response.sendFile(path.join(reqPath,"build","index.html"))
})
app.get("/users", function(request, response){
  response.send(users);
})
//set express to listen on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
//express is a web framework for node.js that helps us build web applications
//it allows us to handle http and API request