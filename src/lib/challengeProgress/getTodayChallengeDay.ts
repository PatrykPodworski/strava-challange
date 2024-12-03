import config from "@/utils/config";
import { UTCDate } from "@date-fns/utc";
import { getDayOfYear } from "date-fns";

export const getTodayChallengeDay = () => {
  const { CHALLENGE_START_DATE } = config;
  const todayDay = getDayOfYear(new UTCDate());
  const startDay = getDayOfYear(new UTCDate(CHALLENGE_START_DATE));
  const currentDay = todayDay - startDay + 1;
  return currentDay;
};
