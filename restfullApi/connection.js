const mongoose = require("mongoose");

//Connection
async function connectMongoDb(url) {
  return mongoose.connect(url);
}

// mongoose
//   .connect("mongodb://127.0.0.1:27017/node-app-1")
//   .then(() => console.log("MongoDb connected"))
//   .catch((err) => console.log("Mongo Error ", err));

module.exports = {
  connectMongoDb,
};
