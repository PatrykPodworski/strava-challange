import { getChallengeNumberOfDays } from "@/lib/challengeProgress/getChallengeNumberOfDays";
import { useEffect, useState } from "react";

const DEFAULT_DELAY = 300;
const DEFAULT_STEP_SIZE = 1;

export const useTimelapseCurrentDay = (isLoading: boolean) => {
  const [currentDay, setCurrentDay] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [delay, setDelay] = useState(DEFAULT_DELAY);
  const [stepSize, setStepSize] = useState(DEFAULT_STEP_SIZE);

  const challengeNumberOfDays = getChallengeNumberOfDays();

  useEffect(() => {
    if (isLoading || !isPlaying) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentDay((prev) =>
        prev < challengeNumberOfDays ? prev + stepSize : prev
      );
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [challengeNumberOfDays, isLoading, isPlaying, delay, stepSize]);

  const restart = () => {
    setCurrentDay(0);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return {
    currentDay,
    restart,
    togglePlay,
    isPlaying,
    setDelay,
    setStepSize,
    delay,
    stepSize,
  };
};
