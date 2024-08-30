const express = require("express");
const app = express();
const auth = (req, res, next) => {
  console.log(typeof req.query.admin, "vanita");
  if (req.query.admin == "vanita") {
    console.log("inside");
    next();
  } else {
    res.send("authentication failed");
  }
};
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", auth, (req, res) => {
  res.send("Users Page");
});

app.listen(8000);
