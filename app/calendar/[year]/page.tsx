import React from "react";
import "../style.css";
import { months } from "../util";
import Link from "next/link";
import MonthThumb from "./MonthThumb";
import Navbar from "@/components/nav/navbar";

interface ParamsType {
  year: number;
}

interface PageProps {
  params: ParamsType;
}

const thisMonth = new Date(Date.now()).getMonth();

const page: React.FC<PageProps> = async ({ params }) => {
  const { year } = params;
  return (
    <div className="pt-12 pb-48">
      <Navbar />
      <div className="flex w-screen justify-around items-center">
        <Link className="text-blue-500" href={`/calendar/${+year - 1}`}>
          {+year - 1}
        </Link>
        <h1 className="text-4xl text-center">{year}</h1>
        <Link className="text-blue-500" href={`/calendar/${+year + 1}`}>
          {+year + 1}
        </Link>
      </div>

      <div className="flex flex-wrap justify-center p-5">
        {months.map((month) => (
          <Link key={month} href={`/calendar/${year}/${month}`}>
            <div
              style={
                month === months[thisMonth]
                  ? { boxShadow: "0px 0px 10px blue" }
                  : {}
              }
              className="month m-2 shadow shadow-black rounded"
            >
              <MonthThumb month={month} year={year} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
