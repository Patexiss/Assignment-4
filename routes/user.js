const express = require("express");
const router = express.Router();
const jwt = require ("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const auth = require("../middleware/auth");

// Login 
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username, password: password });
 
  // if user is not existing
  if (!user) {
    res.json(null);
  } else {
    const payload = {
      user: {
        id: user.id
      }
    };
 
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token, user });
      }
    );
  }
});


// Load user
router.get("/load", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});


// Check if username is taken
router.get("/", async (req, res) => {
  // get username and password 
  const username = req.query.username;
  let user = await User.findOne({ username: username }) 
  // if user is not existing
  if(!user) {
    user = null;
    }
  // send user back to client
  res.json(user);
  }); 
// Create new user
router.post("/register", async(req, res) =>{
  const newUser = new User({...req.body });
  const user = await newUser.save();
  const payload = {
    user: {
      id: user.id
    }
  };
});
jwt.sign(payload, 
config.get("jwtSecret"),
{
  expiresIn:"1d"
},
(err, token) => {
if (err) {
  throw err;
}
res.json({ token, user });
}
);

// Find user by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

// Update user
router.put("/", async (req, res) => {
 const newUser = req.body;
 await User.findByIdAndUpdate(newUser._id, newUser)
 res.json(newUser);
});

module.exports = router;
