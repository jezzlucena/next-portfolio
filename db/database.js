import mongoose from "mongoose";
// track the connection
let isConnected = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    console.log("MONGODB_URI");
    return;
  }

  if (isConnected) {
    console.log("DB connected already");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "MY_DB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};