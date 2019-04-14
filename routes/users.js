const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();

// import the User model
const User = require("../models/User");

//@route GET api/users/test
//@desc test the users router
//@access public
router.get("/test", (req, res) => res.json({ users: "router is working." }));

// @route GET api/users/register
// @desc Register a user
// @access Public
router.post("/register", async (req, res) => {
  let errors = {};
  // TODO - check to make sure there aren't any blank fields
  // query the database to see if a user already exists with that email address.
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    errors.email = "Email already exists";
    return res.status(400).json(errors);
  } else {
    // creates a new user object based on the User model that was created
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    // handle encrypting the password passed to the route
    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) throw error;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(error => console.error(error));
      });
    });
  }
});

//@route POST /api/users/login
//@desc Login User / Return a JWT
//@access Public
router.post("/login", async (req, res) => {
  let errors = {};
  // TODO make sure fields arent blank
  const email = req.body.email;
  const password = req.body.password;

  let user = await User.findOne({ email });
  // check for a user
  if (!user) {
    errors.email = "User not found";
    return res.status(404).json(errors);
  }
  // check password
  bcrypt.compare(password, user.password).then(isMatch => {
    if (isMatch) {
      // user matched - so create a JWT payload
      const payload = { id: user.id, name: user.name };
      // sign token -
      jwt.sign(
        payload,
        process.env.REACT_APP_SERVER_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          return res.json({
            sucess: true,
            token: "Bearer " + token
          });
        }
      );
    } else {
      errors.password = "Password Incorrect";
      return res.status(400).json(errors);
    }
  });
});

//@route GET api/users/current
//@desc return current user using json web tokens
//@access Private/Protected route
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
