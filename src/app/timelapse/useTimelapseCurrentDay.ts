import { getChallengeNumberOfDays } from "@/lib/challengeProgress/getChallengeNumberOfDays";
import { useEffect, useState } from "react";

export const useTimelapseCurrentDay = (isLoading: boolean) => {
  const [currentDay, setCurrentDay] = useState(0);
  const challengeNumberOfDays = getChallengeNumberOfDays();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentDay((prev) => (prev < challengeNumberOfDays ? prev + 1 : prev));
    }, 333);

    return () => {
      clearInterval(interval);
    };
  }, [challengeNumberOfDays, isLoading]);

  const restart = () => {
    setCurrentDay(0);
  };

  return { currentDay, restart };
};
