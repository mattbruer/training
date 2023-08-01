"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useSelector } from "react-redux";
import Auth from "@/components/Auth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EventForm = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [formVals, setFormVals] = useState({
    title: "",
    date: "",
    time: "",
    notes: "",
    user,
  });

  const router = useRouter();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormVals({ ...formVals, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/api/event", {
      formVals,
    });
    router.push("/calendar");
  };

  return (
    <div className="border p-5 bg-slate-400">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          name="title"
          onChange={handleChange}
          value={formVals.title}
          className="border m-5"
          placeholder="title"
        />
        <input
          name="date"
          type="date"
          onChange={handleChange}
          value={formVals.date}
          className="border m-5"
        />
        <input
          onChange={handleChange}
          value={formVals.time}
          name="time"
          type="time"
          className="border m-5"
        />
        <textarea
          onChange={handleChange}
          value={formVals.notes}
          name="notes"
          className="m-5"
          placeholder="Notes"
        />
        <div className="flex justify-center items-center">
          <button className="text-center m-5" type="button">
            <Link href="/calendar">Cancel</Link>
          </button>
          <button className="text-center m-5" type="submit">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
