import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ msg: "hello!!!" });
}
// import { MongoClient } from "mongodb";

// const dbURL =
//   "mongodb+srv://matt:o5hGYLg2BNDCWLQj@cluster0.gsfzp3g.mongodb.net/?retryWrites=true&w=majority";

// export async function POST(request) {
//   const data = await request.json();

//   if (data.pass === process.env.password || data.pass === "shanna") {
//     const client = await MongoClient.connect(process.env.databaseURL || dbURL);
//     const db = client.db();

//     const what = await db.collection("shanna").find().toArray();

//     client.close();
//     return NextResponse.json({
//       msg: "you are shanna",
//       source: process.env.password ? "backend" : "local",
//       what,
//     });
//   }
//   return NextResponse.json({ msg: "you are not shanna" });
// }
