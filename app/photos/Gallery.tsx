"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPhotos } from "@/store/photoSlice";
import { RootState } from "@/store";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { sendToken } from "../helpers";
const Gallery = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state: RootState) => state.photo);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios(
        "http://localhost:8080/api/photo/all-images",
        sendToken()
      );
      console.log("data.images", data);
      data.error ? console.log(data.error) : dispatch(loadPhotos(data.images));
    };

    if (!photos.length) {
      fetchPhotos();
    }
  }, [dispatch, photos.length]);

  return (
    <div className="p-1 mb-20">
      <h1 className="text-white text-center">Gallery</h1>

      <div className="flex justify-center flex-wrap bg-black rounded p-1 ">
        {photos &&
          photos.map((p: any) => (
            <Link
              href={`/photos/${p.id}`}
              className="flex m-px rounded bg-white items-center justify-center"
              style={{
                width: "calc(33% - 1px)",
                height: "33vw",
              }}
              key={p.key}
            >
              <Image
                width={200}
                height={200}
                src={`https://matt-shanna.s3.us-east-2.amazonaws.com/${p.key}`}
                alt={p.caption || "no caption"}
                style={{
                  height: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
