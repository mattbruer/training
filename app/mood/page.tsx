import React from "react";
import Indicator from "./Indicator";
import Selector from "./Selector";
import Auth from "@/components/Auth";
import Navbar from "@/components/nav/navbar";
import Selectors from "./Selectors";
import MoodTracker from "./MoodTracker";
import SocketWrap from "@/components/SocketWrap";

const page = () => {
  return (
    <div className="pb-48">
      <Auth>
        <Navbar />

        <MoodTracker />
        <div className="flex justify-center">
          <Indicator name="Mood" kind="moodLevel" />
          <Indicator name="Energy" kind="energyLevel" />
          <Indicator name="Anxiety" kind="anxietyLevel" />
          <Indicator name="Stress" kind="stressLevel" />
        </div>

        <SocketWrap>
          <Selectors />
        </SocketWrap>
      </Auth>
    </div>
  );
};

export default page;
