"use client";
import React, { useState } from "react";
import axios from "axios";

const AddVid = () => {
  const [url, setUrl] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8080/api/video", {
      url,
    });
    const title = new DOMParser().parseFromString(data, "text/html")
      .documentElement.textContent;
  };
  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <input
        className="border border-slate-400 hover:shadow rounded p-2 mr-5 "
        type="text"
        placeholder="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        className="border border-slate-400 hover:shadow rounded p-2 mr-5 "
        type="text"
        placeholder="Artist"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        className="border border-slate-400 hover:shadow rounded p-2 mr-5 "
        type="text"
        placeholder="Category"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        className="border border-slate-400 hover:shadow rounded p-2 mr-5 "
        type="text"
        placeholder="Title"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="border p-2 rounded bg-blue-200 hover:bg-blue-300 shadow"
        type="submit"
      >
        Add Video
      </button>
    </form>
  );
};

export default AddVid;
