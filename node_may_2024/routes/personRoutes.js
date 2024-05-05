const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

/* Post request */
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    /* creating new person document using mongoose model */
    const newPerson = new Person(data);

    /* Save new person to the data base */
    const response = await newPerson.save();
    console.log("data save");

    res.status(200).json(response);
  } catch (err) {
    console.log(err);

    res.status(500).json({ err: err });
  }
});

/* Get requests */
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.stale(500).json({ err: err._message });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    /* extracting work type from the url parameter */
    const workType = req.params.workType;
    console.log("inside try of /:worktype", workType);
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log(response, " response");
      res.status(200).json(response);
    } else {
      console.log(workType, "work type");
      res.status(404).json({ err: "Not a valid request!" });
    }
  } catch (err) {
    console.log(err, "err");
    return res.status(500).json({ err: err._message });
  }
});

module.exports = router;
