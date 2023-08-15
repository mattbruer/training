import Image from "next/image";
import React from "react";
import Link from "next/link";
import Gauge from "../mood/Gauge";

const NewsfeedItem = ({ item }: any) => {
  return (
    <Link href={item.href}>
      <div className="shadow-xl shadow-black border text-white p-2 m-2 hover:bg-slate-800 bg-slate-900  rounded-2xl">
        <p
          style={{ textShadow: "5px 5px 5px black", fontSize: "1.3rem" }}
          className="text-center capitalize"
        >{`${item.user} ${
          item.kind === "mood" ? "registered" : "added"
        } a new ${item.kind}: ${item.heading}`}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "30vw",
            width: "100%",
            position: "relative",
          }}
        >
          {item.kind === "mood" ? (
            <div className="flex w-auto justify-center">
              <div className="p-2 text-center">
                <p className="mb-2">Mood</p>
                <Gauge
                  size="4.5rem"
                  reverse={true}
                  value={JSON.parse(item.subtext).moodLevel}
                />
              </div>
              <div className="p-2 text-center">
                <p className="mb-2">Energy</p>
                <Gauge
                  size="4.5rem"
                  reverse={true}
                  value={JSON.parse(item.subtext).energyLevel}
                />
              </div>
              <div className="p-2 text-center">
                <p className="mb-2">Anxiety</p>
                <Gauge
                  size="4.5rem"
                  value={JSON.parse(item.subtext).anxietyLevel}
                />
              </div>
              <div className="p-2 text-center">
                <p className="mb-2">Stress</p>
                <Gauge
                  size="4.5rem"
                  value={JSON.parse(item.subtext).stressLevel}
                />
              </div>
            </div>
          ) : (
            <Image
              src={item.imgUrl}
              fill
              alt={item.subtext}
              style={{
                objectFit: item.kind === "photo" ? "contain" : "cover",

                borderRadius: "10px",
              }}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default NewsfeedItem;
