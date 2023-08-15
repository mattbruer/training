"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import MyResponsiveLine from "./Line";
import { RootState } from "@/store";

interface MoodData {
  id: string;
  color: string;
  data: { x: number; y: number }[]; // Define the type here
}

const MoodTracker = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const partner = user!.name === "matt" ? "shanna" : "matt";
  const data: MoodData[] = [
    {
      id: "stress",
      color: "hsl(115, 70%, 50%)",
      data: [],
    },
    {
      id: "mood",
      color: "hsl(121, 17%, 90%)",
      data: [],
    },
    {
      id: "anxiety",
      color: "hsl(11, 10%, 40%)",
      data: [],
    },
    {
      id: "energy",
      color: "hsl(21, 60%, 60%)",
      data: [],
    },
  ];
  const [moods, setMoods] = useState<any[]>([]);
  const [person, setPerson] = useState(user!.name);
  const loadMoods = async () => {
    const { data } = await axios("http://localhost:8080/api/mood");
    setMoods(data);
  };
  useEffect(() => {
    loadMoods();
  }, []);

  const shannaMoods = moods.filter((mood) => mood.user.name === "shanna");
  const mattMoods = moods.filter((mood) => mood.user.name === "matt");

  const makeData = () => {
    const personMood = person === "shanna" ? shannaMoods : mattMoods;
    personMood.forEach((m) => {
      const x = new Date(m.createdAt).getTime();
      data[0].data.push({
        x,
        y: m.stressLevel,
      });

      data[1].data.push({
        x,
        y: m.moodLevel,
      });
      data[2].data.push({
        x,
        y: m.anxietyLevel,
      });

      data[3].data.push({
        x,
        y: m.energyLevel,
      });
    });

    return data;
  };

  return (
    <div className="flex flex-col pb-12 mb-2">
      <div style={{ height: "500px", width: "100%" }}>
        <MyResponsiveLine data={makeData()} />
        <button
          onClick={(e) => {
            setPerson(person === partner ? user!.name : partner);
          }}
          className="ml-12 text-white capitalize border p-2 rounded shadow"
        >{`See ${person === partner ? user!.name : partner}'s data`}</button>
      </div>
    </div>
  );
};

export default MoodTracker;
