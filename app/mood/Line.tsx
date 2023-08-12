"use client";
import { useEffect } from "react";
// @ts-ignore
import { ResponsiveLine } from "nivo/es/components/charts/line";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveLine = ({ data }: any) => {
  // commented out stuff came from library and seems to have no effect.

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
      // xScale={{ type: "point" }}
      // yScale={{
      //   type: "linear",
      //   min: "auto",
      //   max: "auto",
      //   stacked: true,
      //   reverse: false,
      // }}
      // yFormat=" >-.2f"
      curve="cardinal"
      // axisTop={null}
      // axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "date",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "level",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      // pointSize={10}
      // pointColor={{ theme: "background" }}
      // pointBorderWidth={2}
      // pointBorderColor={{ from: "serieColor" }}
      // pointLabelYOffset={-12}
      // useMesh={true}
      // legends={[
      //   {
      //     anchor: "bottom-right",
      //     direction: "column",
      //     justify: false,
      //     translateX: 100,
      //     translateY: 0,
      //     itemsSpacing: 0,
      //     itemDirection: "left-to-right",
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemOpacity: 0.75,
      //     symbolSize: 12,
      //     symbolShape: "circle",
      //     symbolBorderColor: "rgba(0, 0, 0, .5)",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemBackground: "rgba(0, 0, 0, .03)",
      //           itemOpacity: 1,
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
};
export default MyResponsiveLine;
