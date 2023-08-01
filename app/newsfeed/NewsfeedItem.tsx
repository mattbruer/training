import Image from "next/image";
import React from "react";
import Link from "next/link";

const NewsfeedItem = ({ item }: any) => {
  return (
    <Link href={`food/${item.slug}`}>
      <div className="">
        <p>{`${item.user} added a new ${item.kind}: ${item.name}`}</p>
        <div style={{ height: "100px", width: "100px", position: "relative" }}>
          <Image
            src={item.thumb}
            fill
            alt={item.caption}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default NewsfeedItem;
