import React from "react";
import { getDaysArray, months, daysOfWeek } from "../../util";
import Link from "next/link";
import axios from "axios";
import Navbar from "@/components/nav/navbar";
interface ParamsType {
  year: string;
  month: string;
}

interface PageProps {
  params: ParamsType;
}

const page: React.FC<PageProps> = async ({ params }) => {
  const { year, month } = params;
  const days = getDaysArray(months.indexOf(month) + 1, +year);
  const {
    data: { monthEvents },
  } = await axios(`http://localhost:8080/api/event/${year}/${month}`);

  const emptyDays = () => {
    const dayArr: any[] = [];
    const firstDayOfMonth = days[0].dayOfWeek;
    for (let i = 0; i < firstDayOfMonth; i++) {
      dayArr.push(
        <div
          key={i}
          style={{
            width: `${(1 / 7) * 100}%`,
            height: `${(1 / 9) * 100}vw`,
            maxHeight: "120px",
          }}
          className="bg-slate-300"
        ></div>
      );
    }
    return dayArr;
  };

  return (
    <div className="bg-white pb-24">
      <Navbar />
      <div className="pb-36" style={{ width: "98%", margin: "auto" }}>
        <p>maybe some search/filter functionality</p>
        <div className="shadow shadow rounded shadow-black">
          <div className="mb-5 flex justify-around">
            <Link href={`/calendar/${year}`}>Prev</Link>
            <h1 className="text-4xl text-center">
              {month} {year}
            </h1>
            <Link href={`/calendar/${year}`}>Next</Link>
          </div>

          <div className="flex mb-1 ">
            {/* is this key unique?? */}
            {daysOfWeek.map((d) => (
              <div style={{ width: `${(1 / 7) * 100}%` }} key={d}>
                <p className="text-red-500 text-center">{d}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap bg-slate-300">
            {emptyDays()}
            {days.map((day) => (
              <div
                key={day.date}
                style={{
                  width: `${(1 / 7) * 100}%`,
                  height: `${(1 / 9) * 100}vw`,
                  maxHeight: "120px",
                  fontSize: "2vw",
                }}
                className="border hover:border-red-800 shadow shadow-slate-300 bg-white"
              >
                <Link href={`/calendar/daydash/${day.date}`}>
                  <div
                    style={
                      monthEvents.filter((e: any) => e.date === day.date)
                        .length > 0
                        ? {
                            width: "100%",
                            height: "100%",
                            backgroundColor: "pink",
                          }
                        : { width: "100%", height: "100%" }
                    }
                  >
                    <p>{day.day[0] === "0" ? day.day[1] : day.day}</p>
                    {monthEvents.filter((e: any) => e.date === day.date)
                      .length > 0 && <p className="text-red-400 text-2xl">•</p>}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
