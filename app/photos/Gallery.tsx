"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPhotos } from "@/store/photoSlice";
import { RootState } from "@/store";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Gallery = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state: RootState) => state.photo);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data } = await axios(
        "http://localhost:8080/api/photo/all-images"
      );

      dispatch(loadPhotos(data.images));
    };

    if (!photos.length) {
      fetchPhotos();
    }
  }, [dispatch, photos.length]);

  return (
    <div className="p-1 mb-20">
      <h1 className="text-center">Gallery</h1>

      <div className="flex justify-center flex-wrap bg-slate-100 border border-black rounded p-1 ">
        {photos &&
          photos.map((p: any) => (
            <Link
              href={`/photos/${p.id}`}
              className="flex border m-px shadow shadow-black rounded bg-white items-center justify-center"
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
