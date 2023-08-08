"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { store } from "@/store";
import { authenticate } from "@/store/authSlice";

const Sign = () => {
  const router = useRouter();
  const dispatch = useDispatch<typeof store.dispatch>();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authenticate({ name, password }));
  };
  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-36 justify-around"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border"
          placeholder="name"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border"
          type="password"
          placeholder="password"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Sign;
