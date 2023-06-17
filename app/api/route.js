import { NextResponse } from "next/server";

const links = [
  "https://thisvid.com/videos/stuffing-her-prolapsed-butthole-with-big-dildo-t/",
  "https://thisvid.com/videos/stuffing-her-prolapsed-butthole-with-big-dildo-t/",
];

export async function POST(request) {
  const data = await request.json();
  console.log(process);
  if (data.pass === "hi") {
    return NextResponse.json({ msg: "you are shanna" });
  }
  return NextResponse.json({ msg: "you are not shanna" });
}
