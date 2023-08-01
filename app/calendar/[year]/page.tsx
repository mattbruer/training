import React from "react";
import "../style.css";
import { months } from "../util";
import Link from "next/link";
import MonthThumb from "./MonthThumb";

interface ParamsType {
  year: number;
}

interface PageProps {
  params: ParamsType;
}

const page: React.FC<PageProps> = ({ params }) => {
  const { year } = params;
  return (
    <div>
      <h1 className="text-4xl text-center">{year}</h1>
      <div className="flex flex-wrap justify-center p-5">
        {months.map((month) => (
          <Link key={month} href={`/calendar/${year}/${month}`}>
            <div className="month m-2 shadow shadow-black rounded">
              <MonthThumb month={month} year={year} />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between m-5 text-2xl">
        <Link href={`/calendar/${+year - 1}`}>
          <p>{+year - 1}</p>
        </Link>
        <Link href={`/calendar/${+year + 1}`}>{+year + 1}</Link>
      </div>
    </div>
  );
};

export default page;
