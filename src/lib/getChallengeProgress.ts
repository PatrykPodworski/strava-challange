import config from "@/utils/config";
import { UTCDate } from "@date-fns/utc";
import { getDayOfYear } from "date-fns";

export const getChallengeProgress = () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;
  const todayDay = getDayOfYear(new UTCDate());
  const startDay = getDayOfYear(new UTCDate(CHALLENGE_START_DATE));
  const endDay = getDayOfYear(new UTCDate(CHALLENGE_END_DATE));

  const isFinished = todayDay > endDay;
  if (isFinished) {
    return {
      currentDay: endDay - startDay + 1,
      daysLeft: 0,
      progress: 100,
      isFinished,
    };
  }

  const currentDay = todayDay - startDay + 1;
  const daysLeft = endDay - todayDay;
  const progress = Math.min((currentDay / (endDay - startDay + 1)) * 100, 100);

  return { currentDay, daysLeft, progress, isFinished };
};
