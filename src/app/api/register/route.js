import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connectDB from "@/utils/db";

const POST = async (request) => {
  const { username, password } = await request.json();
  console.log(username, password);
  await connectDB();
  const hashedPassword = await bcrypt.hash(password, 5);
  // const hashedPassword = password;

  const user = new User({
    username: username,
    password: hashedPassword,
  });

  try {
    await user.save();

    return NextResponse.json({
      message: "You are now registered!",
    });
  } catch (error) {
    console.log(error);
    if (error.code == 11000 && error.message.includes("duplicate key error")) {
      return NextResponse.json({
        message: "Username already exists!",
      });
    }
    return NextResponse.json({
      message: "Error saving user!",
    });
  }
};

export { POST };
