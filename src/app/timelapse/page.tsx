"use client";

import { AthleteList } from "@/components/athleteList/AthleteList";
import { ChallengeProgress } from "@/components/Header/ChallengeProgress";
import { useEffect, useState } from "react";
import { useTimelapseCurrentDay } from "./useTimelapseCurrentDay";
import { UTCDate } from "@date-fns/utc";
import { addDays } from "date-fns";
import {
  getRawAthleteActivities,
  RawAthleteActivities,
} from "@/lib/leaderboard/getRawAthleteActivities";
import { processAthleteActivities } from "@/lib/leaderboard/processAthleteActivities";
import { AthleteListSkeleton } from "@/components/athleteList/AthleteListSkeleton";

const NEXT_PUBLIC_CHALLENGE_START_DATE =
  process.env.NEXT_PUBLIC_CHALLENGE_START_DATE;

// TODO: P0: Reorder animation
// TODO: P0: Count up animation
// TODO: P0: Restart timelapse
// TODO: P0: Menu with link
const Timelapse = () => {
  const [athletes, setAthletes] = useState<RawAthleteActivities[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentDay = useTimelapseCurrentDay(isLoading);

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
        <AthleteList athletes={filteredAthletes} />
      )}
    </>
  );
};

const filterAthletes = (
  athletes: RawAthleteActivities[],
  currentDay: number
) => {
  if (athletes.length === 0) {
    return [];
  }

  const filterDate = getFilterDate(currentDay);
  const filtered = athletes.map((athlete) => ({
    ...athlete,
    activities: athlete.activities.filter((x) => x.startDate <= filterDate),
  }));

  const processed = processAthleteActivities(filtered, addDays(filterDate, -1));
  return processed;
};

const getFilterDate = (currentDay: number) => {
  if (!NEXT_PUBLIC_CHALLENGE_START_DATE) {
    throw new Error("NEXT_PUBLIC_CHALLENGE_START_DATE is not defined");
  }

  const challengeStart = new UTCDate(NEXT_PUBLIC_CHALLENGE_START_DATE);
  const filterDate = addDays(challengeStart, currentDay + 1);
  filterDate.setHours(0, 0, 0, 0);

  return filterDate;
};

export default Timelapse;