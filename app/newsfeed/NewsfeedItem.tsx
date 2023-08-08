import Image from "next/image";
import React from "react";
import Link from "next/link";

const NewsfeedItem = ({ item }: any) => {
  return (
    <Link href={`food/${item.slug}`}>
      <div className="border p-2 m-2 bg-blue-100 rounded-2xl">
        <p
          style={{ fontSize: "4vw" }}
          className="text-center capitalize"
        >{`${item.user} added a new ${item.kind}: ${item.name}`}</p>
        <div style={{ height: "20vw", width: "100%", position: "relative" }}>
          <Image
            src={item.thumb}
            fill
            alt={item.caption}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default NewsfeedItem;
