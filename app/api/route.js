import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  if (data.pass === "hi") {
    return NextResponse.json({ msg: "you are shanna" });
  }
  return NextResponse.json({ msg: process.env.password });
}
