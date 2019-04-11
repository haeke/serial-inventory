const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connect = url =>
  mongoose.connect(url, {
    userNewUrlParser: true
  });

module.exports = connect;
