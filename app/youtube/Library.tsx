"use client";
import React, { useRef } from "react";
import Link from "next/link";

const Library = () => {
  const here = useRef<HTMLIFrameElement | null>(null);

  return (
    <div>
      <h2 className="text-center text-2xl">MUSIC</h2>
      <Link
        target="_blank"
        href="https://developers.google.com/youtube/iframe_api_reference"
      >
        https://developers.google.com/youtube/iframe_api_reference
      </Link>
      <div className="border bg-slate-900 rounded-2xl shadow shadow-black m-5 pb-48 p-5 flex flex-wrap">
        <div className="p-2 w-1/2 border border-white bg-black rounded-2xl">
          <iframe
            src="https://player.vimeo.com/video/252765355"
            width="100%"
            height="315"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-2 border border-white w-1/2 bg-black rounded-2xl">
          <iframe
            width="100%"
            height="315"
            allow="autoplay"
            src="https://www.youtube.com/embed/FcvaMEG9Xr8"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-2 border border-white w-1/2 bg-black rounded-2xl">
          <iframe
            src="https://player.vimeo.com/video/252765355"
            width="100%"
            height="315"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-2 border border-white w-1/2 bg-black rounded-2xl">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/FcvaMEG9Xr8"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Library;
