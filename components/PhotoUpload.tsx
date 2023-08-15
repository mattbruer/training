"use client";
import Image from "next/image";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { photoUploaded } from "@/store/photoSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";

const PhotoUpload = ({ socket }: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [caption, setCaption] = useState<string>("");
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const { user } = useSelector((state: RootState) => state.auth);

  const uploadToS3 = async (e: ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(e.target);
    const file = formData.get("file");

    if (!file) {
      return null;
    }

    // //@ts-ignore
    // const fileType = encodeURIComponent(file.type);
    //@ts-ignore
    const ft = file.type;
    // const { data } = await axios.get(
    //   `http://localhost:8080/api/photo?fileType=${fileType}`
    // );

    const { data } = await axios.post(`http://localhost:8080/api/photo`, {
      caption,
      ft,
      userId: user!.id,
      height,
      width,
    });

    const {
      uploadUrl,
      dataValues: { key, cap, id },
    } = data;

    await axios.put(uploadUrl, file);
    socket.emit("photo-uploaded", { key, cap, id, user: user!.name });

    return key;
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await uploadToS3(e);
    router.push("/photos");
  };

  const handleCaption = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(e.target.value);
  };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-11/12 m-auto">
      {selectedImage && (
        <Image
          onLoad={(e) => {
            /* @ts-ignore */
            setWidth(e.target.naturalWidth);
            /* @ts-ignore */
            setHeight(e.target.naturalHeight);
          }}
          src={selectedImage as string}
          alt=""
          width="200"
          height="0"
          style={{ height: "auto" }}
        />
      )}

      <input
        className="m-5"
        name="file"
        type="file"
        accept="image/jpeg image/png"
        onChange={handlePhoto}
      />
      <textarea
        value={caption}
        onChange={handleCaption}
        placeholder="...caption"
        className="border p-2 h-60 rounded-xl"
      ></textarea>

      <button
        className="bg-slate-700 m-5 p-2 rounded-xl text-white"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default PhotoUpload;
