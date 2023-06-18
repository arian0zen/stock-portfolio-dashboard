import mongoose from "mongoose";
import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

const POST = async (request) => {
  const { username } = await request.json();
  console.log(username);
  await connectDB();
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      return NextResponse.json({
        message: "Username is taken",
        status: "E01",
      });
    } else {
      return NextResponse.json({
        message: "Username is available",
        status: "S01",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Error checking username!",
    });
  }
};

export { POST };
