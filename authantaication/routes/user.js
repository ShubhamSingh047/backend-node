// const URL = require("../models/URL");
const express = require("express");
const router = express.Router();
const { handleUserSignUp } = require("../controllers/user");

router.get("/signup", (req, res) => res.render("signup"));

router.post("/signup", handleUserSignUp);

module.exports = router;
