import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = () => {
  const imgs = [];
  for (let i = 0; i < 15; i++) {
    imgs.push(
      <Image
        className="p-1 border"
        width="200"
        height="0"
        style={{
          maxWidth: "33%",
          height: "auto",
          boxShadow: "0px 0px 2px black",
        }}
        src={"/me.jpeg"}
        alt={"me"}
      />
    );
  }
  return imgs;
};

const page = () => {
  return (
    <div>
      <h1>Photos</h1>
      <div className="flex flex-wrap justify-center mb-16">{images()}</div>
      <div
        style={{ boxShadow: "0px 0px 5px black" }}
        className="fixed h-16 bottom-4  bg-white w-screen border"
      >
        <Link className="border shadow" href="/photos/upload">
          {" "}
          Upload
        </Link>
      </div>
    </div>
  );
};

export default page;
