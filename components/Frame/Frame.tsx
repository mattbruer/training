"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";

const Frame = ({ src }: any) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  return (
    <div
      style={{
        position: "relative",
        boxSizing: "border-box",
        height: `${height + 90}px`,
        width: `${width + 90}px`,
        boxShadow: "10px 10px 15px black",
      }}
    >
      <div
        style={{
          height: "45px",
          width: "45px",
          position: "absolute",
          background: 'url("/tl.png")',
          backgroundSize: "cover",
          top: 0,
          left: 0,
        }}
      ></div>
      <div
        style={{
          height: "45px",
          width: "45px",
          position: "absolute",
          background: 'url("/tr.png")',
          backgroundSize: "cover",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: height,
          width: "45px",
          position: "absolute",
          background: 'url("/l.png")',
          backgroundSize: "cover",
          top: 45,
          left: 0,
        }}
      ></div>
      <div
        style={{
          height: height,
          width: "45px",
          position: "absolute",
          background: 'url("/r.png")',
          backgroundSize: "cover",
          top: 45,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: 45,
          width: width,
          position: "absolute",
          background: 'url("/b.png")',
          backgroundSize: "contain",
          bottom: 0,
          left: 45,
        }}
      ></div>
      <div
        style={{
          height: "45px",
          width: "45px",
          position: "absolute",
          background: 'url("/bl.png")',
          backgroundSize: "cover",
          bottom: 0,
          left: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          height: "45px",
          width: width,
          left: "45px",
          top: 1,
          background: 'url("/t.png")',
          backgroundSize: "contain",
        }}
      ></div>
      <div
        style={{
          height: "45px",
          width: "45px",
          position: "absolute",
          background: 'url("/br.png")',
          backgroundSize: "cover",
          bottom: 0,
          right: 0,
        }}
      ></div>

      <div
        style={{
          left: "45px",
          top: "45px",
          position: "relative",
          height: height,
          width: width,

          boxShadow: "0px 0px 45px 10px black",
        }}
        className="container"
      >
        <Image
          alt={""}
          fill
          style={{
            objectFit: "contain",
          }}
          onLoad={(e) => {
            /* @ts-ignore */
            setHeight(e.target.naturalHeight);
            /* @ts-ignore */
            setWidth(e.target.naturalWidth);
          }}
          src={src}
        />
      </div>
    </div>
  );
};

export default Frame;
