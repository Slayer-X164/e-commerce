import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("connection succefull! ", connection.connection.host);
  } catch (error: any) {
    console.log("error while connecting to mongo DB ", error.message);
    process.exit(1);
  }
};
