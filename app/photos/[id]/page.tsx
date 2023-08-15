import React from "react";
import Auth from "@/components/Auth";
// import SinglePhoto from "./SinglePhoto";
import axios from "axios";
import Image from "next/image";
import Details from "./Details";
import Frame from "@/components/Frame/Frame";

const page = async ({ params }: any) => {
  const { data } = await axios(
    `http://localhost:8080/api/photo/single-photo/${params.id}`
  );

  return (
    <Auth>
      <div
        className="bg-slate-700"
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Frame
          src={`https://matt-shanna.s3.us-east-2.amazonaws.com/${data.key}`}
        />
      </div>

      {/* <div
        style={{
          border: "1px solid red",
          margin: "30px auto",
          height: "60vh",
          width: "72vw",
          position: "relative",
          // boxShadow: "inset 0px 0px 10px 5px black",
        }}
      >
        <Image
          alt={data.caption}
          fill
          style={{
            objectFit: "contain",
          }}
          src={`https://matt-shanna.s3.us-east-2.amazonaws.com/${data.key}`}
        />
      </div> */}

      <Details data={data} />
    </Auth>
  );
};

export default page;
