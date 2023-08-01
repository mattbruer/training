import React from "react";
import Day from "./Day";

const Week = () => {
  return (
    <div className="flex">
      <Day day={"2023-07-07"} />
      <Day day={"2023-07-08"} />
      <Day day={"2023-07-09"} />
      <Day day={"2023-07-10"} />
      <Day day={"2023-07-11"} />
      <Day day={"2023-07-12"} />
      <Day day={"2023-07-13"} />
    </div>
  );
};

export default Week;
