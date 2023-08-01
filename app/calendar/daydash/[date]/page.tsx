import React from "react";
import Header from "./Header";
import PhotosOfToday from "./PhotosOfToday";
import Auth from "@/components/Auth";

const page = () => {
  return (
    <Auth>
      <Header />
      <div>
        <PhotosOfToday />
        <p>agenda</p>
        <p>journal</p>
        <p>mood</p>
      </div>
    </Auth>
  );
};

export default page;
