const express = require("express");
const app = express();
const db = require("./db");
const personRoutes = require("./routes/personRoutes");
const menuRoutes = require("./routes/menuRoutes");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

/* Get method */
app.get("/", (req, res) => {
  res.send("Hello World");
});

/* using routes */
app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

/* Globle 404 */
// app.get("*", (req, res) => {
//   res.send("404 !");
// });

app.listen(4040, console.log("listining on port 4040"));
