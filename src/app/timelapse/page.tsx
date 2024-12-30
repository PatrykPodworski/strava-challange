"use client";

import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AthleteList } from "@/components/athleteList";
import { ChallengeProgress } from "@/components/challenge-progress";
import { AthleteListSkeleton } from "@/components/athleteList/AthleteListSkeleton";
import { TimelapseControls } from "@/components/TimelapseControls";
import {
  getRawAthleteActivities,
  RawAthleteActivities,
} from "@/lib/leaderboard/get-raw-athlete-activities";
import { useTimelapseCurrentDay } from "./use-timelapse-current-day";
import { filterAthletes } from "./filter-athletes";

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
