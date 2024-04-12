const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello from Home"));

app.get("/about", (req, res) =>
  res.send(`Hello from about to ${req.query.myName}`)
);

app.listen(8000, () => console.log("sever started !"));
