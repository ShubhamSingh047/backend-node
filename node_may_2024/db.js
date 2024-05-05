const mongoose = require("mongoose");

/* defined new collection name using /hotels */
const mongoURL = `mongodb://localhost:27017/hotels`;

/* estiblish a connection using connect */
mongoose.connect(mongoURL);

/* got the refence of perticular connections */
const db = mongoose.connection;

/* Defined differnt listners on db */
db.on("connected", () => {
  console.log(`connected to MongoDb server`);
});

db.on(`error`, (err) => {
  console.log(`Mongo db connection error : ${err}`);
});

db.on(`disconnected`, () => {
  console.log(`MongoDb dissconnected`);
});

module.exports = {
  db,
};
