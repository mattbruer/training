import React from "react";
import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import Welcome from "./Welcome";
import Newsfeed from "../newsfeed/Newsfeed";
import Mood from "@/components/mood";
import Link from "next/link";
import Display from "../mood/Display";
import SocketWrap from "@/components/SocketWrap";
import Button1 from "@/components/Button/Button1/Button";
import Button2 from "@/components/Button/Button2/Button2";
const page = () => {
  return (
    <div className="mt-12">
      <Auth>
        <Navbar />
        <Welcome />
        <Display />
        {/* <div>
          <Button1 />
          <Button2 />
          <Button1 />
          <Button1 />
        </div> */}

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
