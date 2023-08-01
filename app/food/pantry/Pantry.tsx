"use client";
import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "@/store";

const Pantry = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div>
      <p>{user}</p>
    </div>
  );
};

export default Pantry;
