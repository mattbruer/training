"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/dash");
  }, [router]);
  return null;
};

export default Redirect;
