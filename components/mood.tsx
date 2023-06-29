"use client";

import { useState, ChangeEvent, DragEventHandler } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setMsg, setMoodLevel } from "@/store/uiSlice";
import { store } from "@/store";
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Mood = () => {
  const dispatch = useAppDispatch();
  const { msg, moodLevel } = useAppSelector((state) => state.ui);
  const [open, setOpen] = useState(true);

  const handleMood = (e: any) => {
    dispatch(setMoodLevel(+e.target.value));
  };
  return (
    <div>
      {open ? (
        <div className="flex">
          <div className="bg-white border p-2 shadow m-5 rounded-2xl">
            <div className="text-right text-2xl p-1">
              <button onClick={() => setOpen(false)}>X</button>
            </div>
            <div className="p-10">
              <label htmlFor="mood">
                <p className="text-2xl mb-5">Your Current Mood:</p>
              </label>
              <div className="flex  mb-5 ">
                <p>bad</p>
                <input
                  onChange={handleMood}
                  className="ml-2 mr-2"
                  name="mood"
                  type="range"
                />
                <p>good</p>
              </div>
              <p>Comments:</p>
              {msg}

              <textarea className="border"></textarea>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)}>Mood</button>
      )}
    </div>
  );
};

export default Mood;
