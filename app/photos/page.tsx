import Navbar from "@/components/nav/navbar";
import Link from "next/link";
import Gallery from "./Gallery";
import Auth from "@/components/Auth";

const page = async () => {
  return (
    <Auth>
      <Navbar />
      <Link
        className=" text-white border shadow p-5 rounded"
        href="/photos/upload"
      >
        Upload +
      </Link>
      <Gallery />
    </Auth>
  );
};

export default page;
