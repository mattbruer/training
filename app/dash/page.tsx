import React from "react";
import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import Welcome from "./Welcome";
import Newsfeed from "../newsfeed/Newsfeed";
import Mood from "@/components/mood";
import Link from "next/link";
import Display from "../mood/Display";
import SocketWrap from "@/components/SocketWrap";

const page = () => {
  return (
    <div className="mt-12">
      <Auth>
        <Navbar />
        <Welcome />
        <Display />

        <div
          className="border rounded-xl m-2 shadow-xl text-white p-2 bg-slate-700"
          style={{ height: "80px" }}
        >
          reminders
        </div>

        <Newsfeed />
      </Auth>
    </div>
  );
};

export default page;
