"use client";
import { store } from "@/store";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const Newsfeed = () => {
  const { msg, moodLevel } = useSelector((state: RootState) => state.ui);
  return (
    <div>
      <p>Newsfeed</p>
      <p>{moodLevel}</p>
      <input readOnly type="range" value={moodLevel} />
    </div>
  );
};

export default Newsfeed;
