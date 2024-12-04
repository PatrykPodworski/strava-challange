"use client";

import { AthleteList } from "@/components/athleteList/AthleteList";
import { AthleteListItem } from "@/components/athleteList/AthleteListItem";
import { ChallengeProgress } from "@/components/Header/ChallengeProgress";
import { LastUpdate } from "@/components/LastUpdate";
import getLeaderboardAthletes from "@/lib/getLeaderboardAthletes";
import { useEffect, useState } from "react";
import { useTimelapseCurrentDay } from "./useTimelapseCurrentDay";
import { X } from "lucide-react";

const Timelapse = () => {
  const [athletes, setAthletes] = useState<AthleteListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const currentDay = useTimelapseCurrentDay(isLoading);

  useEffect(() => {
    const getAthletes = async () => {
      const athletes = await getLeaderboardAthletes();
      setAthletes(athletes);
      setIsLoading(false);
    };

    getAthletes();
  }, []);

  return (
    <>
      <ChallengeProgress currentDay={currentDay} />
      <AthleteList athletes={athletes} />
      <LastUpdate />
    </>
  );
};

export default Timelapse;
