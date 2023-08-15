import React from "react";

const Gauge = ({
  size,
  value,
  reverse = false,
}: {
  size: string;
  value: number;
  reverse?: boolean;
}) => {
  const adjVal = (value / 100) * 300 - 150;

  const color = () => {
    if (adjVal >= -150 && adjVal <= -50 && !reverse) {
      return "green";
    }
    if (adjVal >= -150 && adjVal <= -50 && reverse) {
      return "red";
    }
    if (adjVal >= 50 && !reverse) {
      return "red";
    }
    if (adjVal >= 50 && reverse) {
      return "green";
    } else {
      return "yellow";
    }
  };
  return (
    <div
      className="bg-slate-900"
      style={{
        background: `radial-gradient(
            at center,
            ${color()},
            rgb(0, 0, 0),
            rgb(0, 0, 0)
          )`,
        borderLeft: reverse ? ".35rem dotted red" : ".35rem dotted green",
        borderTop: ".35rem dotted yellow",
        borderRight: reverse ? ".35rem dotted green" : ".35rem dotted red",
        borderBottom: "0px dotted transparent",
        borderRadius: "50%",
        width: size,
        height: size,
        // boxShadow: `0px 0px 15px ${color()}`,
        boxShadow: `0px 0px 60px 1px ${color()},inset 0px 0px 10px 2px ${color()}`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          transform: `rotate(${adjVal}deg)`,
        }}
      >
        <div
          style={{
            borderRight: "2px solid grey",
            borderTop: "6px solid transparent",
            height: "50%",
            width: "50%",
          }}
        ></div>

        <div
          style={{
            borderLeft: "2px solid white",

            borderTop: "6px solid transparent",
            height: "50%",
            width: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Gauge;
