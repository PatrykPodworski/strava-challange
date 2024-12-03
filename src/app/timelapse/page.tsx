"use client";

import { AthleteList } from "@/components/athleteList/AthleteList";
import { AthleteListItem } from "@/components/athleteList/AthleteListItem";
import { ChallengeProgress } from "@/components/Header/ChallengeProgress";
import { LastUpdate } from "@/components/LastUpdate";
import { useState } from "react";

const Timelapse = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [athletes, setAthletes] = useState<AthleteListItem[]>([]);

  return (
    <>
      <ChallengeProgress currentDay={currentDay} />
      <AthleteList athletes={athletes} />
      <LastUpdate />
    </>
  );
};

export default Timelapse;
