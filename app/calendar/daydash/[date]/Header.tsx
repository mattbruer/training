"use client";
import { useParams } from "next/navigation";
import Auth from "@/components/Auth";
import { daysOfWeek, months } from "../../util";

const Header = () => {
  const params = useParams();
  const [year, month, day] = params.date.split("-");
  const dayOfWeek = daysOfWeek[new Date(+year, +month - 1, +day).getDay()];

  return (
    <div className="text-4xl p-5 text-center">
      <p>{`${dayOfWeek} ${months[+month - 1]} ${day}, ${year}`}</p>
    </div>
  );
};

export default Header;
