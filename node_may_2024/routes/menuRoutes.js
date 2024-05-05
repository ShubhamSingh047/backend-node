const express = require("express");
const router = express.Router();
const MenuItems = require("../models/menu");

/* Get Method */
router.get("/", async (req, res) => {
  try {
    const menuData = await MenuItems.find();
    console.log("data fetched for menu");
    res.status(200).json(menuData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server err from menu" });
  }
});
/* Peramaterised Routes for get */
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
      const data = await MenuItems.find({ taste: tasteType });
      res.status(200).json(data);
    } else {
      console.log(tasteType, "error");
      res.status(400).json({ err: "some err" });
      throw new Error("Invalid Taste Type");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* Post Method */
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItems(data);
    const result = await newMenu.save();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal sever error" });
  }
});

module.exports = router;
