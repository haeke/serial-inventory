const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const connect = require("./connect");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());

// require the list of routers
const users = require("./routes/users");
const software = require("./routes/software");

app.use(morgan("dev"));

// body parser url encoded and json middleare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport configuration
require("./config/passport")(passport);

// the users router
app.use("/api/users", users);
app.use("/api/software", software);
// Serve the statis assets if in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));
  // any route should go to the bundled html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3002;

connect(process.env.REACT_APP_MONGO_URI).then(() =>
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  })
);
