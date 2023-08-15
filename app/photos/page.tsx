import Navbar from "@/components/nav/navbar";
import Link from "next/link";
import Gallery from "./Gallery";
import Auth from "@/components/Auth";

const page = async () => {
  return (
    <Auth>
      <Navbar />
      <div
        style={{ top: 0 }}
        className="bg-slate-800 flex justify-around fixed w-screen flex p-2"
      >
        <Link
          className="text-white border shadow p-2 rounded"
          href="/photos/upload"
        >
          Upload +
        </Link>
        <input className="p-2" placeholder="search" />
      </div>
      <Gallery />
    </Auth>
  );
};

export default page;
