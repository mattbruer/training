"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const Indicator = ({
  name,
  kind,
}: {
  name: string;
  kind: keyof RootState["ui"];
}) => {
  const ui = useSelector((state: RootState) => state.ui);

  return (
    <div className="border m-5">
      <p>{name}</p>
      <p>{ui[kind]}</p>
    </div>
  );
};

export default Indicator;
