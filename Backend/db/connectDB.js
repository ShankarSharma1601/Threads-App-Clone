import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process, env.MONGO_URI, {
      // to avoid warnings in the console
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
