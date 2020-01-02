const express = require("express");
const router = express.Router();
const User = require("../models/User");

// const users = [
//   {_id: "234", 
//   username: "bob", 
//   password: "bob", 
//   firstName: "Bob", 
//   lastName: "Marley", 
//   email: "bob@gmail.com"
// },       
// {_id: "345", 
// username: "charly", 
// password: "charly", 
// firstName: "Charly", 
// lastName: "Garcia", 
// email: "charly@ulem.com"
// },   
// {_id: "456", 
// username: "patexiss", password: "patexiss", firstName: "Patexiss", lastName: "Patexiss", 
// email: "patexiss1@gmail.com"}
// ];

// Find user by credentials
router.get("/", async (req, res) => {
  // get username and password 
  const username = req.query.username;
  const password = req.query.password;
  let user;
  // if username and password are sent from client
  if(username && password) {
    user = await User.findOne({
      username: username, password: password
    })
      // if we found a user with given username and password
      if (users[i].username === username && users[i].password === password) {
        user = users[i];
      }
    }
    // if the username is taken
  } else if(username) {
    user = await User.findOne({ username: username });
  }

  // if user is not existing
  if(!user) {
    user = null;
  }
  // send user back to client
  res.json(user);
});

// Create new user
router.post("/", async (req,res) =>{
// const userToSave = new User({ username: newUser.username, password: newUser.password, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email});
const userToSave = new User({...req.body });

const user = await userToSave.save();
res.json(user);
});

// Find user by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

// Update user
router.put("/", (req, res) => {
 const newUser = req.body;
 await User.findByIdAndUpdate(newUser._id, newUser)
 res.json(newUser);
});

module.exports = router;
