"use client";
import { useParams } from "next/navigation";
import Auth from "@/components/Auth";

const Header = () => {
  const params = useParams();
  return (
    <div className="text-4xl mt-5 text-center">
      {new Date(params.date).toDateString()}
    </div>
  );
};

export default Header;
