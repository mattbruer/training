import React from "react";
import Details from "./Details";
import axios from "axios";
import Navbar from "@/components/nav/navbar";

const page = async ({ params }: any) => {
  const { data } = await axios.get(
    `http://localhost:8080/api/food/${params.slug}`
  );
  return (
    <div className="text-white pb-48">
      <Navbar />
      <Details recipe={data} />
    </div>
  );
};

export default page;
