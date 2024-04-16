const express = require("express");
const { connectToMongoDb } = require("./connect");
const urlRoute = require("./routes/url");

const app = express();

const PORT = 8000;

connectToMongoDb("mongodb://localhost:27017/short-url").then(() =>
  console.log("connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`server started`));
