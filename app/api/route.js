import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  if (data.pass === process.env.password || data.pass === "shanna") {
    return NextResponse.json({
      msg: "you are shanna",
      source: process.env.password ? "backend" : "local",
    });
  }
  return NextResponse.json({ msg: "you are not shanna" });
}
