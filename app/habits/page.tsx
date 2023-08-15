import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import React from "react";

const page = () => {
  return (
    <Auth>
      <div className="text-white h-screen p-5">
        <p>This page will be for habit tracking</p>
      </div>
      <Navbar />
    </Auth>
  );
};

export default page;
