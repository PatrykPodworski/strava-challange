import { getChallengeProgress } from "./getChallengeProgress";
import { getTodayChallengeDay } from "./getTodayChallengeDay";

export const getTodayChallengeProgress = () => {
  const currentDay = getTodayChallengeDay();
  return getChallengeProgress(currentDay);
};
