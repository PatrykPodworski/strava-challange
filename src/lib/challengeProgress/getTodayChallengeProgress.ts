import { UTCDate } from "@date-fns/utc";
import { getChallengeProgress } from "./getChallengeProgress";
import { getTodayChallengeDay } from "./getTodayChallengeDay";

export const getTodayChallengeProgress = (today?: UTCDate) => {
  const currentDay = getTodayChallengeDay(today);
  return getChallengeProgress(currentDay);
};
