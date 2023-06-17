"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState("");
  const [res, setRes] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    window.localStorage.setItem("pass", form);
    const { data } = await axios.post("http://localhost:3000/api", {
      pass: window.localStorage.getItem("pass"),
    });
    setRes(data.msg);
  };
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="hi"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
          <button type="submit">submit to me</button>
        </form>
        <p>{res}</p>
      </div>
    </div>
  );
}
