"use client";
import { useEffect } from "react";
import Newsfeed from "@/components/Newsfeed";
import Mood from "@/components/mood";
import Link from "next/link";
import Providers from "@/components/Provider";
import { store } from "../store";
import { setMsg } from "../store/uiSlice";
import Preloader from "@/components/Preloader";
import { socket } from "@/socket";
export default async function Home() {
  useEffect(() => {
    socket.on("msg", (msg) => {
      console.log(msg);
    });
    socket.emit("hi", (what: any) => {
      console.log(what);
    });
  }, []);

  // const response = await fetch("http://localhost:8080/api/users", {
  //   method: "GET",
  //   next: { revalidate: 0 },
  // });

  // const data = await response.json();

  // store.dispatch(setMsg(data.users));
  // useEffect(() => {
  //   socket.on("msg", (msg) => {
  //     console.log(msg);
  //   });
  // }, []);

  return (
    <div className="bg-purple-200 p-5">
      {/* <Preloader msg={data.users[0].email} /> */}

      <h1 className="text-4xl">Hello, User!</h1>
      {/* {data.users && (
        <div className="border p-5 bg-emerald-200 m-5 rounded-2xl">
          <p className="underline">These values come from the api/db</p>
          {data.users.map((u: any) => (
            <p key={u.email}>{u.email}</p>
          ))}
        </div>
      )} */}
      <Providers>
        <Newsfeed />
      </Providers>

      <Providers>
        <Mood />
      </Providers>
    </div>
  );
}
