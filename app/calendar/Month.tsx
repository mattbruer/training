import React from "react";
import Week from "./Week";
import Day from "./Day";
import { generateDateObjectsInRange } from "./util";

const p = "border text-center bg-slate-300 day";
const Month = () => {
  return (
    <div>
      <div className="flex">
        <p className={p}>Sun</p>
        <p className={p}>Mon</p>
        <p className={p}>Tues</p>
        <p className={p}>Wed</p>
        <p className={p}>Thurs</p>
        <p className={p}>Fri</p>
        <p className={p}>Sat</p>
      </div>
      <div className="flex flex-wrap">
        {dayAdjust(days).map((d) => (
          <Day key={d} day={d.date} />
        ))}
      </div>

      {/* <Week />
      <Week />
      <Week />
      <Week />
      <Week /> */}
    </div>
  );
};

export default Month;
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dayAdjust(days: any) {
  const newDays = [];
  const emptyDays = days[0].dayOfWeek;

  for (let i = 0; i < emptyDays; i++) {
    newDays.push({ date: "0000-00-00" });
  }

  return newDays.concat(days);
}

const days = [
  {
    date: "07-01-2023",
    month: "07",
    day: "01",
    year: 2023,
    dayOfWeek: 6,
  },
  {
    date: "07-02-2023",
    month: "07",
    day: "02",
    year: 2023,
    dayOfWeek: 0,
  },
  {
    date: "07-03-2023",
    month: "07",
    day: "03",
    year: 2023,
    dayOfWeek: 1,
  },
  {
    date: "07-04-2023",
    month: "07",
    day: "04",
    year: 2023,
    dayOfWeek: 2,
  },
  {
    date: "07-05-2023",
    month: "07",
    day: "05",
    year: 2023,
    dayOfWeek: 3,
  },
  {
    date: "07-06-2023",
    month: "07",
    day: "06",
    year: 2023,
    dayOfWeek: 4,
  },
  {
    date: "07-07-2023",
    month: "07",
    day: "07",
    year: 2023,
    dayOfWeek: 5,
  },
  {
    date: "07-08-2023",
    month: "07",
    day: "08",
    year: 2023,
    dayOfWeek: 6,
  },
  {
    date: "07-09-2023",
    month: "07",
    day: "09",
    year: 2023,
    dayOfWeek: 0,
  },
  {
    date: "07-10-2023",
    month: "07",
    day: "10",
    year: 2023,
    dayOfWeek: 1,
  },
  {
    date: "07-11-2023",
    month: "07",
    day: "11",
    year: 2023,
    dayOfWeek: 2,
  },
  {
    date: "07-12-2023",
    month: "07",
    day: "12",
    year: 2023,
    dayOfWeek: 3,
  },
  {
    date: "07-13-2023",
    month: "07",
    day: "13",
    year: 2023,
    dayOfWeek: 4,
  },
  {
    date: "07-14-2023",
    month: "07",
    day: "14",
    year: 2023,
    dayOfWeek: 5,
  },
  {
    date: "07-15-2023",
    month: "07",
    day: "15",
    year: 2023,
    dayOfWeek: 6,
  },
  {
    date: "07-16-2023",
    month: "07",
    day: "16",
    year: 2023,
    dayOfWeek: 0,
  },
  {
    date: "07-17-2023",
    month: "07",
    day: "17",
    year: 2023,
    dayOfWeek: 1,
  },
  {
    date: "07-18-2023",
    month: "07",
    day: "18",
    year: 2023,
    dayOfWeek: 2,
  },
  {
    date: "07-19-2023",
    month: "07",
    day: "19",
    year: 2023,
    dayOfWeek: 3,
  },
  {
    date: "07-20-2023",
    month: "07",
    day: "20",
    year: 2023,
    dayOfWeek: 4,
  },
  {
    date: "07-21-2023",
    month: "07",
    day: "21",
    year: 2023,
    dayOfWeek: 5,
  },
  {
    date: "07-22-2023",
    month: "07",
    day: "22",
    year: 2023,
    dayOfWeek: 6,
  },
  {
    date: "07-23-2023",
    month: "07",
    day: "23",
    year: 2023,
    dayOfWeek: 0,
  },
  {
    date: "07-24-2023",
    month: "07",
    day: "24",
    year: 2023,
    dayOfWeek: 1,
  },
  {
    date: "07-25-2023",
    month: "07",
    day: "25",
    year: 2023,
    dayOfWeek: 2,
  },
  {
    date: "07-26-2023",
    month: "07",
    day: "26",
    year: 2023,
    dayOfWeek: 3,
  },
  {
    date: "07-27-2023",
    month: "07",
    day: "27",
    year: 2023,
    dayOfWeek: 4,
  },
  {
    date: "07-28-2023",
    month: "07",
    day: "28",
    year: 2023,
    dayOfWeek: 5,
  },
  {
    date: "07-29-2023",
    month: "07",
    day: "29",
    year: 2023,
    dayOfWeek: 6,
  },
  {
    date: "07-30-2023",
    month: "07",
    day: "30",
    year: 2023,
    dayOfWeek: 0,
  },
  {
    date: "07-31-2023",
    month: "07",
    day: "31",
    year: 2023,
    dayOfWeek: 1,
  },
];
