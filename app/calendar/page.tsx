import React from "react";
import Container from "./Container";
import Navbar from "@/components/nav/navbar";
import Auth from "@/components/Auth";

const page = () => {
  return (
    <Auth>
      <Container />
      <Navbar />
    </Auth>
  );
};

export default page;
