"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://training-wheat.vercel.app";

export default function Home() {
  const [form, setForm] = useState("");
  const [res, setRes] = useState("");
  const [src, setSrc] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    window.localStorage.setItem("pass", form);
    const { data } = await axios.post(`${baseUrl}/api`, {
      pass: window.localStorage.getItem("pass"),
    });
    setRes(data.msg);
    setSrc(data.source);
    console.log(data);
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form id="form" onSubmit={handleSubmit}>
          <input
            placeholder="hi"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
          <button type="submit">submit to me</button>
        </form>
        <p>{res}</p>
        <p>{src}</p>
      </div>
    </div>
  );
}
