import React from "react";
import Auth from "@/components/Auth";
// import SinglePhoto from "./SinglePhoto";
import axios from "axios";
import Image from "next/image";
import Details from "./Details";
import { relative } from "path";

const page = async ({ params }: any) => {
  const { data } = await axios(
    `http://localhost:8080/api/photo/single-photo/${params.id}`
  );

  return (
    <Auth>
      <div
        style={{
          width: "90%",
          margin: " 20px auto",
          height: "60vh",
          position: "relative",
        }}
        className="bg-black border border-black rounded shadow shadow-black"
      >
        <Image
          alt={data.caption}
          fill
          style={{ objectFit: "contain" }}
          src={`https://matt-shanna.s3.us-east-2.amazonaws.com/${data.key}`}
        />
      </div>
      <Details data={data} />
    </Auth>
  );
};

export default page;
