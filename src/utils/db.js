import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDB;