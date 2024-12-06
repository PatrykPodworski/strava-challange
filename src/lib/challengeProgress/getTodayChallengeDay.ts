import config from "@/utils/config";
import { UTCDate } from "@date-fns/utc";
import { getDayOfYear } from "date-fns";

const NEXT_PUBLIC_CHALLENGE_START_DATE =
  process.env.NEXT_PUBLIC_CHALLENGE_START_DATE;

export const getTodayChallengeDay = () => {
  if (!NEXT_PUBLIC_CHALLENGE_START_DATE) {
    throw new Error("NEXT_PUBLIC_CHALLENGE_START_DATE is not defined");
  }

  const todayDay = getDayOfYear(new UTCDate());
  const startDay = getDayOfYear(new UTCDate(NEXT_PUBLIC_CHALLENGE_START_DATE));
  const currentDay = todayDay - startDay + 1;
  return currentDay;
};
