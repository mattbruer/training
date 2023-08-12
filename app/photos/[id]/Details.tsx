import React from "react";

const Details = ({ data }: any) => {
  return (
    <div>
      <p>{data.createdAt}</p>
      <p>{data.caption}</p>
    </div>
  );
};

export default Details;
