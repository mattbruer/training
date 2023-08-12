"use client";
import React, { useEffect, useState } from "react";
import { initSock } from "@/app/socket";
import { Socket } from "socket.io-client";
import { RootState } from "@/store";

const SocketWrap = ({ children }: any) => {
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    if (!socket) {
      setSocket(initSock());
    }
  }, [socket]);

  const childrenWithSocket = () => {
    if (Array.isArray(children)) {
      return children.map((c) => {
        c.props.socket = socket;

        return c;
      });
    } else {
      children.props.socket = socket;
      return children;
    }
  };
  return <div>{childrenWithSocket()}</div>;
};

export default SocketWrap;
