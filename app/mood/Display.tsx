"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";

const Display = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const mood = useSelector((state: RootState) => state.ui);

  const partner = user!.name === "matt" ? "shanna" : "matt";
  return (
    <div className="shadow-xl text-white text-center p-2">
      <h2 className="capitalize">{`${partner}'s Mood`}</h2>
      <div className="flex">
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          <p>Mood</p>
          <p>{mood[partner].moodLevel}</p>
        </div>
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          <p>Anxiety</p>
          <p>{mood[partner].anxietyLevel}</p>
        </div>
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          <p>Energy</p>
          <p>{mood[partner].energyLevel}</p>
        </div>
        <div className="border m-1 shadow-xl shadow-black rounded-xl w-1/4 text-center">
          <p>Stress</p>
          <p>{mood[partner].stressLevel}</p>
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
