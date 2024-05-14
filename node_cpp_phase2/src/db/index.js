import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MogoDB Connected !!, ${connectionInstance}`);
  } catch (err) {
    console.log(err, ": MogoDB Connection Failure !");
    process.exit(1);
  }
};

export default connectDB;
