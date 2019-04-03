const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

// Serve the statis assets if in production
if (process.env.NODE_ENV === "production") {
  // set a static folder
  app.use(express.static("client/build"));
  // any route should go to the bundled html file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
