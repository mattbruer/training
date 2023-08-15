import React from "react";
import AddVid from "./AddVid";
import Library from "./Library";
import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";

const page = () => {
  return (
    <Auth>
      <Navbar />
      <AddVid />
      <Library />
    </Auth>
  );
};

export default page;
