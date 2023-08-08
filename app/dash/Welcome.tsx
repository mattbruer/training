"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { logout } from "@/store/authSlice";
const Welcome = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div>
      {user && (
        <div className=" z-10 bg-slate-50 fixed top-0 w-screen flex justify-between shadow">
          <p className="text-2xl ml-5 ">
            Welcome, <span className="capitalize">{user.name}!</span>
          </p>
          <button
            onClick={() => {
              dispatch(logout(""));
            }}
            className="mr-5"
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
