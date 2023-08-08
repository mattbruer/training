import React from "react";
import Indicator from "./Indicator";
import Selector from "./Selector";
import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import Selectors from "./Selectors";

const page = () => {
  return (
    <Auth>
      <Navbar />
      <div className="pb-48">
        <div className="border p-5 m-5">
          <Indicator name="Mood" kind="moodLevel" />
          <Indicator name="Anxiety" kind="anxietyLevel" />
          <Indicator name="Energy" kind="energyLevel" />
          <Indicator name="Horny" kind="hornyLevel" />
        </div>
        <Selectors />
      </div>
    </Auth>
  );
};

export default page;
