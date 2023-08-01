import Navbar from "@/components/nav/navbar";
import Link from "next/link";
import Gallery from "./Gallery";
import Auth from "@/components/Auth";

const page = async () => {
  return (
    <Auth>
      <Navbar />
      <Gallery />
      <div
        style={{ boxShadow: "0px 0px 5px black" }}
        className="fixed h-16 bottom-4  bg-white w-screen border"
      >
        <Link className="border shadow" href="/photos/upload">
          {" "}
          Upload
        </Link>
      </div>
    </Auth>
  );
};

export default page;
