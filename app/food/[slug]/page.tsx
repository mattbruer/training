import React from "react";
import Details from "./Details";
import axios from "axios";

const page = async ({ params }: any) => {
  const { data } = await axios.get(
    `http://localhost:8080/api/food/${params.slug}`
  );
  return (
    <div>
      <Details recipe={data} />
    </div>
  );
};

export default page;
