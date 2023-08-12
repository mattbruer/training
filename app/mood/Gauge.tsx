import React from "react";

const Gauge = ({ value }: { value: number }) => {
  console.log("value", value);
  return (
    <div
      style={{
        position: "relative",
        top: "5%",
        left: "25%",
        borderLeft: ".35rem dotted red",
        borderTop: ".35rem dotted yellow",
        borderRight: ".35rem dotted green",
        borderBottom: ".35rem dotted transparent",
        borderRadius: 50,
        width: "50%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          transform: `rotate(${value}deg)`,
        }}
      >
        <div
          style={{
            borderRight: "1px solid white",
            height: "50%",
            width: "50%",
          }}
        ></div>
        <div
          style={{
            borderLeft: "1px solid white",
            height: "50%",
            width: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Gauge;
