import React from "react";
import Link from "next/link";

const AddEvent = () => {
  return (
    <button className="border border-black p-5">
      <Link href="/calendar/event">Add Event</Link>
    </button>
  );
};

export default AddEvent;
