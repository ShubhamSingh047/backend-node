const express = require("express");

const router = express.Router();

router.get("/users", async (req, res) => {
  const allDbUser = await User.find({});
  const html = `
      <ul>
          ${allDbUser
            .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
            .join("")}
      </ul>
      `;
  res.send(allDbUser);
});

router.get("/", (req, res) => res.send("Hello Home page"));

router.get("/", async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

//sending a post request
router.post("/", async (req, res) => {
  const body = req.body;
  if (
    !body.email ||
    !body.first_name ||
    !body.last_name ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({
      status: "failed",
      message: "All fields are required",
    });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitile: body.job_titile,
  });

  return res.status(201).json({ message: "success" });

  //   users.push({ ...body, id: users.length + 1 });
  //   fs.writeFile("./MOCK_DATA.JSON", JSON.stringify(users), (err, data) => {
  //     return res.json({ status: "success", id: users.length });
  //   });
});

//hadneling an update request
router.patch("/", (req, res) => {
  const index = users.findIndex((data) => data.id == req.body.id);
  console.log(index, " index");
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    fs.writeFile("./MOCK_DATA.JSON", JSON.stringify(users), (err, data) => {
      return res.send({
        status: "success",
        message: "User updated succesfully",
      });
    });
  } else {
    return res.status(404).send({
      status: "failed",
      message: "User not found",
    });
  }
});

//handleing a delet request
router.delete("/", (req, res) => {
  users = users.filter((data) => data.id != req.body.id);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>
    res.send({ status: "success", message: "user deleted" })
  );
});

module.exports = router;
