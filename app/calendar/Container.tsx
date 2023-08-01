import React from "react";
import Month from "./Month";
import AddEvent from "./AddEvent";

const Container = () => {
  return (
    <div className="bg-slate-400">
      <Month />
      <div className="w-screen h-24 flex flex-col items-center justify-center bg-slate-200">
        <form>
          <select>
            <option>Day</option>
            <option>Week</option>
            <option>Month</option>
            <option>Year</option>
          </select>
        </form>
        <AddEvent />
      </div>
    </div>
  );
};

export default Container;
