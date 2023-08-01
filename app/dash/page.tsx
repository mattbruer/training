import React from "react";
import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import Welcome from "./Welcome";
import Newsfeed from "../newsfeed/Newsfeed";
import Mood from "@/components/mood";

const page = () => {
  return (
    <div className="mt-12">
      <Auth>
        <Navbar />
        <Welcome />

        <Newsfeed />
        <Mood />
      </Auth>
    </div>
  );
};

export default page;
