import React from "react";
import "./style.css";
import Link from "next/link";

const links = [
  "dash",
  "photos",
  "food",
  "calendar/2023",
  "reading",
  "habits",
  "youtube",
  "journal",
];

const Navbar = () => {
  return (
    <div className="nav-container">
      {links.map((link) => (
        <Link
          key={link}
          className="ml-1 link bg-blue-100 hover:bg-blue-300 rounded-2xl w-1/5 border shadow shadow-black  h-1/3 flex items-center justify-center"
          href={`http://localhost:3000/${link}`}
        >
          <p className="first-letter:uppercase">{link}</p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
