require("dotenv").config();

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(MONGODB_URI);
}

export default dbConnect;
