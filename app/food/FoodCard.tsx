import React from "react";
import Link from "next/link";
import Image from "next/image";
import validator from "validator";

const FoodCard = ({ url, slug, name, description, thumb }: any) => {
  const validateURL = () => {
    return validator.isURL(thumb);
  };
  return (
    <Link href={`/food/${slug}`}>
      <div
        style={{ minHeight: "150px" }}
        className="flex overflow-hidden text-white border m-5 rounded-2xl bg-slate-800 shadow-xl"
      >
        {thumb && (
          <div className="relative border" style={{ minWidth: "65%" }}>
            <Image
              style={{ objectFit: "cover" }}
              fill
              alt={description}
              src={validateURL() ? thumb : "/food.webp"}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        )}
        <div className="p-2 ">
          <p className="text-2xl capitalize">{name}</p>
          <p className="text-slate-300">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
