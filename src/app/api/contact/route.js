import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body" },
        { status: 400 }
      );
    }

    const { name, email, company, service, subject, message } = body || {};

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format" },
        { status: 400 }
      );
    }

    await connectDB();

    const newContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: typeof company === "string" ? company.trim() : "",
      service: typeof service === "string" ? service.trim() : "",
      subject: typeof subject === "string" ? subject.trim() : "",
      message: typeof message === "string" ? message.trim() : "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/contact POST:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to submit contact message",
      },
      { status: 500 }
    );
  }
}