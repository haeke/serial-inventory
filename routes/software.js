const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");

//  import the software model
const Software = require("../models/Software");

//@route GEt /api/software/test
//@desc The Test route to make sure the software router is working
//@access public
router.get("/test", (req, res) => {
  res.send({ Software: "route is working." });
});

module.exports = router;
