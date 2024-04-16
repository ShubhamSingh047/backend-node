const express = require("express");
const { handleGenerateShortUrl } = require("../controllers/url");

const router = express.Router();

router.post("/", (req, res) => handleGenerateShortUrl(req, res));

module.exports = router;
