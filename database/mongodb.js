import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    if (!process.env.DB_URI) {
      throw new Error("Please define DB_URI in your .env file");
    }

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    return await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.log(error);
  }
};