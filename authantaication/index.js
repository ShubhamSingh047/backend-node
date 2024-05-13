const express = require("express");
const userRoutes = require("./routes/user");

const app = express();

app.set("view engine", "ejs");

app.use("/", userRoutes);

// app.get("/test", (req, res) => res.render("signup"));
app.listen(8000, () => console.log("routes started succesfully"));
