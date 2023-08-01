import React from "react";
import Link from "next/link";
import Image from "next/image";
import validator from "validator";

const FoodCard = ({ url, slug, name, description, thumb }: any) => {
  const validateURL = (value: string) => {
    return validator.isURL(thumb);
  };
  return (
    <Link href={`/food/${slug}`}>
      <div
        style={{ minHeight: "150px" }}
        className="flex overflow-hidden border m-5 rounded-2xl bg-white shadow-xl"
      >
        {thumb && (
          <div className="relative border" style={{ minWidth: "33%" }}>
            <Image
              style={{ objectFit: "cover" }}
              fill
              alt={description}
              src={validateURL(thumb) ? thumb : "/food.webp"}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="p-2 ">
          <p
            style={{ textShadow: "2px 2px 1px lightgrey" }}
            className="text-2xl capitalize"
          >
            {name}
          </p>
          <p className="text-slate-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
