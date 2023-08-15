import React from "react";
import "./style.css";
import Link from "next/link";

const links = [
  "dash",
  "photos",
  "food",
  "calendar",
  "reading",
  "habits",
  "music",
  "discuss",
];

const Navbar = () => {
  return (
    <div className="nav-container ">
      {links.map((link) => (
        <Link
          style={{
            border: "2px groove silver",
            boxShadow: "0px 0px 10px white, inset 0px 0px 1px 1px white",
          }}
          key={link}
          className="ml-1 link bg-red-800 hover:bg-red-900 rounded-2xl w-1/5  shadow-xl shadow-black  h-1/3 flex items-center justify-center"
          href={`http://localhost:3000/${
            link === "calendar" ? "calendar/2023" : link
          }`}
        >
          <p
            style={{ textShadow: "1px 1px 1px black" }}
            className="first-letter:uppercase"
          >
            {link}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
