import Image from "next/image";
import React from "react";
import Link from "next/link";

const NewsfeedItem = ({ item }: any) => {
  return (
    <Link href={`food/${item.slug}`}>
      <div className="shadow-xl shadow-black border text-white p-2 m-2 bg-slate-800 rounded-2xl">
        <p
          style={{ textShadow: "5px 5px 5px black", fontSize: "2rem" }}
          className="text-center capitalize"
        >{`${item.user} added a new ${item.kind}: ${item.name}`}</p>
        <div style={{ height: "30vw", width: "100%", position: "relative" }}>
          <Image
            src={item.thumb}
            fill
            alt={item.caption}
            style={{
              objectFit: "cover",

              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </Link>
  );
};

export default NewsfeedItem;
