import React from "react";
import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import Welcome from "./Welcome";
import Newsfeed from "../newsfeed/Newsfeed";
import Mood from "@/components/mood";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-12">
      <Auth>
        <Navbar />
        <Welcome />
        <div className="flex w-screen align-center justify-center bg-slate-100">
          <div className="w-3/4 m-1 h-24 border flex p-2">
            <div className="bg-white m-1 rounded-2xl w-1/4 border flex flex-col items-center justify-center">
              <p>Mood</p>
              <p>99</p>
            </div>
            <div className="bg-white m-1 rounded-2xl w-1/4 border flex flex-col items-center justify-center">
              <p>Energy</p>
              <p>95</p>
            </div>
            <div className="bg-white m-1 rounded-2xl w-1/4 border flex flex-col items-center justify-center">
              <p>Anxiety</p>
              <p>92</p>
            </div>
            <div className="bg-white m-1 rounded-2xl w-1/4 border flex flex-col  items-center justify-center">
              <p>Stress</p>
              <p>78</p>
            </div>
          </div>
          <Link href="/mood" className="w-1/4 m-1 h-24 border">
            Your mood
          </Link>
        </div>
        <div className="border m-2" style={{ height: "80px" }}>
          reminders
        </div>
        <Newsfeed />
      </Auth>
    </div>
  );
};

export default page;
