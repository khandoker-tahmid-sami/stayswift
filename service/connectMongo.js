import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(String(process.env.MONGO_ATLAS_URI));

    return conn;
  } catch (e) {
    console.log(e);
  }
};
