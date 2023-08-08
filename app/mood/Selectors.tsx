"use client";
import React, { MouseEventHandler } from "react";
import Selector from "./Selector";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";

const Selectors = () => {
  const dispatch = useDispatch();
  const { moodLevel, anxietyLevel, energyLevel, hornyLevel } = useSelector(
    (state: RootState) => state.ui
  );
  const auth = useSelector((state: RootState) => state.auth);
  const handleRegister: MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    console.log("auth", auth);
    const { data } = await axios.post("http://localhost:8080/api/mood", {
      moodLevel,
      anxietyLevel,
      energyLevel,
      hornyLevel,
      user: auth.user,
    });
  };

  return (
    <div>
      <Selector name="Mood" kind="moodLevel" />
      <Selector name="Anxiety" kind="anxietyLevel" />
      <Selector name="Energy" kind="energyLevel" />
      <Selector name="Horny" kind="hornyLevel" />
      <button
        onClick={handleRegister}
        className="border m-5 p-5 rounded-2xl bg-blue-100"
      >
        Register
      </button>
    </div>
  );
};

export default Selectors;
