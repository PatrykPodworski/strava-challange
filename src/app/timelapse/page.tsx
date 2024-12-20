"use client";

import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  getRawAthleteActivities,
  RawAthleteActivities,
} from "@/lib/leaderboard/getRawAthleteActivities";
import { AthleteList } from "@/components/athleteList";
import { ChallengeProgress } from "@/components/ChallengeProgress";
import { AthleteListSkeleton } from "@/components/athleteList/AthleteListSkeleton";
import { TimelapseControls } from "@/components/TimelapseControls";
import { useTimelapseCurrentDay } from "./useTimelapseCurrentDay";
import { filterAthletes } from "./filterAthletes";

// TODO: P1: Show arrow on position change
// TODO: P2: Clean up the /app folder
const Timelapse = () => {
  const [athletes, setAthletes] = useState<RawAthleteActivities[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentDay, ...controls } = useTimelapseCurrentDay(isLoading);
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
          <TimelapseControls {...controls} />
        </>
      )}
    </>
  );
};

export default Timelapse;
