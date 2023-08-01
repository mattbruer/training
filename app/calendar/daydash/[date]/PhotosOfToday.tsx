"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const PhotosOfToday = () => {
  const params = useParams();
  const [photos, setPhotos] = useState<{ caption: string; key: string }[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      console.log("params.date", params.date);
      const {
        data: { imagesOfDay },
      } = await axios(`http://localhost:8080/api/photo/${params.date}`);
      setPhotos(imagesOfDay);
    };
    fetchPhotos();
  }, [params.date]);

  return (
    <div className="flex">
      {photos.map((photo) => (
        <div
          className="border"
          style={{ width: "200px", height: "200px", margin: "1px" }}
          key={photo.key}
        >
          <Image
            height={200}
            width={200}
            alt={photo.caption || "no caption"}
            style={{ objectFit: "contain", height: "100%" }}
            src={`https://matt-shanna.s3.us-east-2.amazonaws.com/${photo.key}`}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotosOfToday;
