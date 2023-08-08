import React from "react";
import Auth from "@/components/Auth";
// import SinglePhoto from "./SinglePhoto";
import axios from "axios";
import Image from "next/image";

const page = async ({ params }: any) => {
  const { data } = await axios(`http://localhost:8080/api/photo/${params.id}`);

  return (
    <Auth>
      <div
        style={{
          padding: "10px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt={data.caption}
          fill
          style={{ objectFit: "contain" }}
          src={`https://matt-shanna.s3.us-east-2.amazonaws.com/${data.key}`}
        />
        <p>{data.createdAt}</p>
        <p>{data.caption}</p>
      </div>
    </Auth>
  );
};

export default page;
