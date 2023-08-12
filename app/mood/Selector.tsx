"use client";
import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setLevel } from "@/store/uiSlice";

const Selector = ({
  name,
  kind,
}: {
  name: "Mood" | "Anxiety" | "Energy" | "Stress";
  kind: "moodLevel" | "anxietyLevel" | "energyLevel" | "stressLevel";
}) => {
  const [val, setVal] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(+e.target.value);
    dispatch(setLevel({ level: kind, value: val as unknown as number }));
  };

  return (
    <div className="text-white">
      <label htmlFor="selector">{name}</label>
      <input
        onChange={handleChange}
        className="ml-5"
        name="selector"
        type="range"
        value={val}
      />
    </div>
  );
};

export default Selector;
