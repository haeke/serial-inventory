// The software model schema
const mongoose = require("mongoose");

const softwareSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  softwareName: {
    type: String,
    required: true
  },
  softwareCompany: {
    type: String,
    required: true
  },
  serialNumber: {
    type: String,
    required: true
  },
  dateAquired: {
    type: Date,
    default: Date.now
  }
});

module.exports = Software = mongoose.model("softwares", softwareSchema);
