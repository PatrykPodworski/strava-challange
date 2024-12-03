import config from "@/utils/config";
import { UTCDate } from "@date-fns/utc";
import { getDayOfYear } from "date-fns";

// TODO: P1 Fix the config so it can be used in Client Components
const CHALLENGE_START_DATE = process.env.NEXT_PUBLIC_CHALLENGE_START_DATE;
const CHALLENGE_END_DATE = process.env.NEXT_PUBLIC_CHALLENGE_END_DATE;

export const getChallengeProgress = (currentDay: number) => {
  if (!CHALLENGE_START_DATE || !CHALLENGE_END_DATE) {
    throw new Error("Missing environment variables");
  }

  const startDay = getDayOfYear(new UTCDate(CHALLENGE_START_DATE));
  const endDay = getDayOfYear(new UTCDate(CHALLENGE_END_DATE));

  const numberOfDays = endDay - startDay + 1;
  const daysLeft = numberOfDays - currentDay;

  const isFinished = daysLeft <= 0;
  if (isFinished) {
    return {
      daysLeft: 0,
      progress: 100,
      isFinished,
    };
  }

  const progress = Math.min((currentDay / (endDay - startDay + 1)) * 100, 100);

  return { daysLeft, progress, isFinished };
};
