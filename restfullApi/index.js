const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();

//Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/node-app-1")
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log("Mongo Error ", err));

//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: false,
    },
    lastName: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    jobtitile: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

app.use(express.urlencoded({ extended: false }));

//sending html as an response
app.get("/users", async (req, res) => {
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

//middleware
app.use(express.urlencoded({ extended: false }));

// restfull api calls.

app.get("/", (req, res) => res.send("Hello Home page"));

app.get("/api/users", async (req, res) => {
  const allUsers = await User.find({});
  res.json(allUsers);
});

//sending a post request
app.post("/api/users", async (req, res) => {
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
app.patch("/api/users", (req, res) => {
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
app.delete("/api/users", (req, res) => {
  users = users.filter((data) => data.id != req.body.id);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) =>
    res.send({ status: "success", message: "user deleted" })
  );
});

// app.app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id == id);
//     res.json(user);
//   })
//   .post((req, res) => {
//     //Edit post later
//     return res.json({ status: "Pending post" });
//   })
//   .put((req, res) => {
//     return res.json({
//       status: "Pending put",
//     });
//   })
//   .patch((req, res) => {
//     return res.json({
//       status: "Pending patch",
//     });
//   })
//   .delete((req, res) => {
//     return res.json({
//       status: "Pending delet",
//     });
//   });

// app.get("/api/users/:id", (req, res) => {
//   const id = +req.params.id;
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

app.listen(8000, () => console.log("server started at 8000"));
