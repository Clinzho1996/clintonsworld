import Message from "@/models/Contact";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, content } = await request.json();

  await connect();

  const newMessage = new Message({
    name,
    email,
    content,
  });

  try {
    await newMessage.save();
    return new NextResponse("Message sent successfully", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
