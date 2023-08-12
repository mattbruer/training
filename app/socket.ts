import { Socket, io } from "socket.io-client";
import { store } from "@/store";
import { setLevel, registerMood } from "@/store/uiSlice";
import { photoUploaded } from "@/store/photoSlice";
import { addToNewsfeed } from "@/store/newsfeedSlice";

const urlDev = "http://localhost:4000";

const socket = io(urlDev, {
  autoConnect: false,
});

socket.on("connect", () => {
  console.log("I'm connected to the server!!");
  console.log(socket.id);
  socket.on("register-mood", (data) => {
    store.dispatch(registerMood(data));
  });

  socket.on("photo-upload", (data) => {
    store.dispatch(photoUploaded(data));
  });
  socket.on("newsfeedItemAdded", (data) => {
    store.dispatch(addToNewsfeed(data));
  });
});

let sock: Socket;
export const initSock = () => {
  if (!sock) {
    sock = socket.connect();
  } else {
    console.log("already connected");
  }
  return sock;
};
