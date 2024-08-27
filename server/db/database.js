import mongoose from "mongoose";
export const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: "backend-project",
    });
    console.log("Mongo connected");
  } catch (err) {
    console.log(err);
  }
};
