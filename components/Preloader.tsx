"use client";

import { useRef } from "react";
import { store } from "@/store";
import { loadRecipes } from "@/store/foodSlice";
import { setMsg } from "@/store/uiSlice";

const Preloader = ({ recipes }: any) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(loadRecipes(recipes));
    loaded.current = true;
  }

  return null;
};

export default Preloader;
