"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import Gauge from "./Gauge";

const val = 50;
const Display = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const mood = useSelector((state: RootState) => state.ui);

  const partner = user!.name === "matt" ? "shanna" : "matt";
  return (
    <div className="shadow-xl text-white text-center p-2">
      <h2 className="capitalize">{`${partner}'s Mood`}</h2>
      <div className="flex">
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Gauge value={(mood[partner].moodLevel / 100) * 264 - 132} />
          </div>
        </div>
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          {/* <p>Anxiety</p> */}
          <Gauge value={(mood[partner].anxietyLevel / 100) * 264 - 132} />
        </div>
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          {/* <p>Energy</p> */}
          <Gauge value={(mood[partner].energyLevel / 100) * 264 - 132} />
        </div>
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          {/* <p>Stress</p> */}
          <Gauge value={(mood[partner].stressLevel / 100) * 264 - 132} />
        </div>
        <Link
          href="/mood"
          className="m-1 shadow-xl shadow-black w-1/4 m-1 h-24 border"
        >
          Your mood
        </Link>
      </div>
    </div>
  );
};

export default Display;
