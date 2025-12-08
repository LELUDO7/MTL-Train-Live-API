import mongoose from "mongoose";
import { log } from "./utils/logger.js";
import { env } from "./config/env.js";
import * as text from "./utils/text.js"

const color = "green";

const connectDB = async () => {
  try {
    await mongoose.connect(env.mongoUri);
    log.default(text.color(`Connected to DB`,color));
  } catch (err) {
    log.error("Can't connect to MongoDB DB :", err.message);
    process.exit(1);
  }
};

export default connectDB;
