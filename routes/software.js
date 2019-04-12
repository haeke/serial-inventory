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

//@route GET /api/software/
//@desc Will return a JSON object of the software saved inside the database- the softwareName, softwareCompany, serialNumber and dateAquired will be sent from the client.
//@access Public for now but it will be Private - a user needs to be authenticated in order to create

router.get("/", async (req, res) => {
  try {
    let software = await Software.find().sort({ date: -1 });

    res.json(software);
  } catch (error) {
    res.status(404).json(error);
  }
});

//@route GET /api/software/:id
//@desc Get an individual software object by id from the Software model
//@access Public but will be Private
router.get("/:id", async (req, res) => {
  try {
    let software = await Software.findById(req.params.id);
    res.json(software);
  } catch (error) {
    res.sendStatus(404).json(error);
  }
});

//@route DELETE /api/software/:id
//@desc DELETE request to remove a document from Software by the ID
//@access Public but will be changed to Private
router.delete("/:id", async (req, res) => {
  try {
    //TODO - get the current user from the User model
    // Use the findById method to get the software item from the Software Model
    const software = await Software.findById(req.params.id);
    try {
      // make sure the item is removed from the database before sending the message.
      await software.remove();
    } catch (error) {
      res.json({ software: "Software Item could not be found." });
    }
    res.json({ software: "Software Item Deleted" });
  } catch (error) {
    res
      .sendStatus(404)
      .json({ softwarenotfound: "Software Item could not be deleted." });
  }
});

//@route PATCH /api/software/:id
//@desc PATCH request to update an existing software item
//@access Public but will be converted to private.
router.patch("/:id", async (req, res) => {
  const { softwareName, softwareCompany, serialNumber, dateAquired } = req.body;
  try {
    // get the software item
    await Software.findByIdAndUpdate(req.params.id, {
      softwareName,
      softwareCompany,
      serialNumber,
      dateAquired
    });
    res.json({ software: "Software Item updated." });
  } catch (error) {
    res
      .sendStatus(404)
      .json({ software: "Software Item Could not be updated" });
  }
});

//@route POST /api/software/
//@desc Will create a document inside of the Software Model. This will consist of the softwareName, softwareCompany, serialNumber, and dateAquired.
//@access Public but will be Private - a user will need to be authenticated.
router.post("/", async (req, res) => {
  console.log(req.user);
  try {
    const {
      softwareName,
      softwareCompany,
      serialNumber,
      dateAquired
    } = req.body;
    // TODO: check to make sure none of these fields are left empty.
    let softwareEntry = await Software({
      softwareName,
      softwareCompany,
      serialNumber,
      dateAquired
    });

    softwareEntry.save();
    res.json(softwareEntry);
  } catch (error) {
    res.sendStatus(404).json(error);
  }
});

module.exports = router;
