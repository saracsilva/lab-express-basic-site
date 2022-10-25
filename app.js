const express = require("express");

const app = express();
app.get("/home", (req, res) => {
  res.render("home");
  //res.send("working");
});
app.get("/about", (req, res) => {
  res.render("about");
  //res.send("working");
});
app.get("/works", (req, res) => {
  res.render("works");
  //res.send("working");
});
app.listen(3000, () => {
  console.log(`App is listening.....`);
});
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static("public"));
