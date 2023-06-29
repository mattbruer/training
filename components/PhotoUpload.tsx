"use client";
import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";

const PhotoUpload = () => {
  const [caption, setCaption] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          src={selectedImage as string}
          alt=""
          width="200"
          height="0"
          style={{ height: "auto" }}
        />
      )}

      <input type="file" onChange={handlePhoto} />
      <textarea
        value={caption}
        onChange={handleCaption}
        placeholder="...caption"
        className="border p-2 h-60"
      ></textarea>
      <div></div>
      <button type="submit">submit</button>
    </form>
  );
};

export default PhotoUpload;
