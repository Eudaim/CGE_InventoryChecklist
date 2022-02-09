const path = require("path");
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt') // module that allows us to hash the clients passoword so that I won't be able to see what it is
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
const users = [
  {
    name: "asz19", 
    password: "cgeasz"
  },
  {
    name: "amado", 
    password: "cgeamado"
  }
]
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
  const user = users.find(user => user.name === request.body.name); 
  const input = request.body.password;
  if(user == null){
    return response.status(400).send("Cannot find User"); 
  }
  if(user.password == input)
  {
    
    return response.redirect("/inventory")
  }
  else
  {
    return response.redirect("/user/login")
  }
  // try{
  //   //user bcrpyt because it is more secure to prevent timing attacks
  //   if(await bcrypt.compare(request.body.password, user.password))
  //   {
  //     response.send("Success");
  //   }
  //   else{ console.log(user.password);
  //     console.log(request.body.password);
  //     response.send("Not Allowed");
  //   }
  // }
  // catch{
  //   response.status(500).send();
  //}
})

//create users
// app.post("/user", async function(request, response){
//   try {
//     //hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(request.body.password, salt);
//     //actually add user to the database
//     const user = { name: request.body.name, password: hashedPassword };
//     users.push(user);
//     console.log(users);
//     response.status(201).send();
//   } catch {
//     response.status(500).send();
//   }
// })
 app.get("/user/login", function(request, response){
   response.sendFile(path.join(reqPath,"build","index.html"))
 })
 app.get("/users", function(request,response){
   response.json(users);
 })
 app.get("/inventory", function(request, response){
  response.sendFile(path.join(reqPath,"build","index.html"))
})
//set express to listen on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//express is a web framework for node.js that helps us build web applications
//it allows us to handle http and API request