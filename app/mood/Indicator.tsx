"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Gauge from "./Gauge";

const Indicator = ({ name, kind }: { name: string; kind: string }) => {
  const ui = useSelector((state: RootState) => state.ui);

  return (
    <div className="flex flex-col items-center justify-center p-2 text-white">
      <p className="p-2">{name}</p>
      <Gauge
        size="4.5rem"
        reverse={name === "Mood" || name === "Energy"}
        /* @ts-ignore */
        value={ui[kind]}
      />
    </div>
  );
};

export default Indicator;
