import React from "react";

const Details = ({ data }: any) => {
  return (
    <div className="text-white">
      <p>{new Date(data.createdAt).toLocaleDateString()}</p>
      <p>{data.caption}</p>
    </div>
  );
};

export default Details;
