const express = require("express");
const fs = require("fs");
const { connectMongoDb } = require("./connection");
const userRoutes = require("./routes/user");
const logReqRes = require("./middlewares");

const app = express();

connectMongoDb(`mongodb://127.0.0.1:27017/node-app-1`);

app.use(express.urlencoded({ extended: false }));

//sending html as an response

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//routers
app.use("./user", userRoutes);

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
