"use client";

import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  getRawAthleteActivities,
  RawAthleteActivities,
} from "@/lib/leaderboard/getRawAthleteActivities";
import { AthleteList } from "@/components/athleteList/AthleteList";
import { ChallengeProgress } from "@/components/ChallengeProgress";
import { AthleteListSkeleton } from "@/components/athleteList/AthleteListSkeleton";
import { useTimelapseCurrentDay } from "./useTimelapseCurrentDay";
import { filterAthletes } from "./filterAthletes";
import { TimelapseControls } from "./TimelapseControls";

// TODO: P0: Fix jumping at the end of the timelapse
// TODO: P0: Play/Pause button
// TODO: P0: Configure the timelapse on the client
// TODO: P2: Clean up the /app folder
const Timelapse = () => {
  const [athletes, setAthletes] = useState<RawAthleteActivities[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentDay, restart } = useTimelapseCurrentDay(isLoading);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    const getAthletes = async () => {
      const athletes = await getRawAthleteActivities();
      setAthletes(athletes);
      setIsLoading(false);
    };

    getAthletes();
  }, []);

  const filteredAthletes = filterAthletes(athletes, currentDay);

  return (
    <>
      <ChallengeProgress currentDay={currentDay} />
      {isLoading ? (
        <AthleteListSkeleton />
      ) : (
        <>
          <AthleteList athletes={filteredAthletes} ref={parent} />
          <TimelapseControls onRestart={restart} />
        </>
      )}
    </>
  );
};

export default Timelapse;
