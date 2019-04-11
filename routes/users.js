const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();

//@route GET api/users/test
//@desc test the users router
//@access public
router.get("/test", (req, res) => res.json({ users: "router is working." }));

module.exports = router;
