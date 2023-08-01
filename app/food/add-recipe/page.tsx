import React from "react";
import Recipe from "./Recipe";
import Auth from "@/components/Auth";

const page = () => {
  return (
    <Auth>
      <Recipe />
    </Auth>
  );
};

export default page;
