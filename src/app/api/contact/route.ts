import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Handling POST requests
export async function POST(request: NextRequest) {
  try {
    const body = await request.json(); // Parse the incoming request body
    
    const { name, email, message } = body;

    // Simulate backend logic (log the message)
    console.log(`Message received from ${name} (${email}): ${message}`);

    // Return a success response
    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
    });
  } catch (error) {
    // Handle errors if any
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
