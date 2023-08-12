"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { me } from "../store/authSlice";
import { store } from "@/store";
import Sign from "@/app/sign/page";
import { initSock } from "@/app/socket";
import { Socket } from "socket.io-client";
import { RootState } from "@/store";

const Auth = ({ children }: any) => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  // const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    !user && dispatch(me());
  }, [dispatch, user]);

  // useEffect(() => {
  //   if (!socket) {
  //     setSocket(initSock());
  //   }
  // }, [socket]);

  //this is weird but works
  // const childrenWithSocket = () => {
  //   if (Array.isArray(children)) {
  //     return children.map((c) => {
  //       console.log("child=>", c);
  //       c.props.socket = socket;
  //       return c;
  //     });
  //   } else {
  //     children.props.socket = socket;
  //     return children;
  //   }
  // };

  return <div>{user ? <>{children}</> : <Sign />}</div>;
};

export default Auth;
