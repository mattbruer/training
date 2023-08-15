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
    <div className="mb-5 shadow-xl text-white text-center p-2">
      <h2 className="capitalize">{`${partner}'s Mood`}</h2>
      <div
        // style={{ maxWidth: "65%", margin: "auto" }}
        className="flex items-center justify-center pb-5"
      >
        <div className="p-2">
          <p>Mood</p>

          <Gauge size="4.5rem" reverse={true} value={mood[partner].moodLevel} />
        </div>
        <div className="p-2">
          <p>Energy</p>
          <Gauge
            size="4.5rem"
            reverse={true}
            value={mood[partner].energyLevel}
          />
        </div>
        <div className="p-2">
          <p>Anxiety</p>
          <Gauge size="4.5rem" value={mood[partner].anxietyLevel} />
        </div>

        <div className="p-2">
          <p>Stress</p>
          <Gauge size="4.5rem" value={mood[partner].stressLevel} />
        </div>
      </div>
      <Link
        style={{
          boxShadow: "0px 0px 10px silver, inset 0px 0px 1px 1px white",
        }}
        href="/mood"
        className="p-2 bg-red-800 hover:bg-red-900 rounded-2xl w-1/4 m-1 h-24 border"
      >
        Your mood
      </Link>
    </div>
  );
};

export default Display;
