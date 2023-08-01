import React from "react";
import "./style.css";
import Link from "next/link";

const linkStyle = "ml-2 mr-2";
const links = [
  "dash",
  "photos",
  "food",
  "calendar/2023",
  "links",
  "tasks",
  "files",
];

const Navbar = () => {
  return (
    <div className="nav-container">
      {links.map((link) => (
        <Link key={link} className={linkStyle} href={link}>
          <p className="first-letter:uppercase">{link}</p>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
