"use client";

import { useRef } from "react";
import { store } from "@/store";

import { setMsg } from "@/store/uiSlice";

const Preloader = ({ msg }: any) => {
  const loaded = useRef(false);

  store.dispatch(setMsg(msg));

  loaded.current = true;

  return null;
};

export default Preloader;
