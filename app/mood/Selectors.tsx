"use client";
import React, { MouseEventHandler, useState } from "react";
import Selector from "./Selector";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";
import { setLevel } from "@/store/uiSlice";

const Selectors = ({ socket }: any) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { moodLevel, anxietyLevel, energyLevel, stressLevel } = useSelector(
    (state: RootState) => state.ui
  );
  const { user } = useSelector((state: RootState) => state.auth);

  const handleRegister: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8080/api/mood", {
      moodLevel,
      anxietyLevel,
      energyLevel,
      stressLevel,
      userId: user!.id,
      comment,
    });
    socket.emit("register-mood", { data });
  };

  return (
    <div className="p-5 flex flex-col items-center">
      <div className="p-5 mb-5 shadow-2xl shadow-black bg-slate-800 rounded-xl">
        <Selector name="Mood" kind="moodLevel" />
        <Selector name="Energy" kind="energyLevel" />
        <Selector name="Anxiety" kind="anxietyLevel" />
        <Selector name="Stress" kind="stressLevel" />
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border m-2 w-4/5"
        name="comment"
        placeholder="Comment:"
      />
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
