import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get("access_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "No token provided" }, { status: 401 });
  }

  try {
    // Send request to your backend
    const response = await fetch(
      "http://localhost:4000/api/v1/auth/user-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: token }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch user data");
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { error: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
