"use client";
import React from "react";
import { getDaysArray, months, daysOfWeek } from "../util";

interface PageProps {
  year: number;
  month: string;
}
const MonthThumb: React.FC<PageProps> = ({ month, year }) => {
  const days = getDaysArray(months.indexOf(month) + 1, year);

  const emptyDays = () => {
    const dayArr: any[] = [];
    const firstDayOfMonth = days[0].dayOfWeek;
    for (let i = 0; i < firstDayOfMonth; i++) {
      dayArr.push(
        <div
          key={i}
          style={{ width: `${(1 / 7) * 100}%` }}
          className="month-thumb-day"
        ></div>
      );
    }
    return dayArr;
  };

  return (
    <>
      <div>
        <p className="text-center text-2xl">{month}</p>
      </div>

      <div className="flex">
        {daysOfWeek.map((d) => (
          <div
            key={d}
            className="text-center"
            style={{ width: `${(1 / 7) * 100}%` }}
          >
            <p className="text-red-400">{d}</p>
          </div>
        ))}
      </div>
      <div className="p-2 flex flex-wrap">
        {emptyDays()}

        {days.map((d) => (
          <div
            className={
              d.date === new Date(Date.now()).toISOString().split("T")[0]
                ? "border text-center bg-slate-300"
                : "border text-center"
            }
            style={{ width: `${(1 / 7) * 100}%` }}
            key={d.date}
          >
            {/* refactor with padstart(2,"0") */}

            <p>{d.day[0] === "0" ? d.day[1] : d.day}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MonthThumb;
