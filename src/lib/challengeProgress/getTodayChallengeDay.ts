import { UTCDate } from "@date-fns/utc";
import { getDayOfYear } from "date-fns";

const NEXT_PUBLIC_CHALLENGE_START_DATE =
  process.env.NEXT_PUBLIC_CHALLENGE_START_DATE;

const NEXT_PUBLIC_CHALLENGE_END_DATE =
  process.env.NEXT_PUBLIC_CHALLENGE_END_DATE;

// TODO: P2 Support multiple years
export const getTodayChallengeDay = (today?: UTCDate) => {
  if (!NEXT_PUBLIC_CHALLENGE_START_DATE) {
    throw new Error("NEXT_PUBLIC_CHALLENGE_START_DATE is not defined");
  }
  if (!NEXT_PUBLIC_CHALLENGE_END_DATE) {
    throw new Error("NEXT_PUBLIC_CHALLENGE_END_DATE is not defined");
  }

  const { day: startDay, year: startYear } = getData(
    new UTCDate(NEXT_PUBLIC_CHALLENGE_START_DATE)
  );
  const { day: endDay, year: endYear } = getData(
    new UTCDate(NEXT_PUBLIC_CHALLENGE_END_DATE)
  );
  const { day: todayDay, year: todayYear } = getData(today ?? new UTCDate());

  if (todayYear > endYear) {
    return endDay;
  }

  if (todayYear < startYear) {
    return 0;
  }

  if (todayDay > endDay) {
    return endDay;
  }

  if (todayDay < startDay) {
    return 0;
  }

  const currentDay = todayDay - startDay + 1;
  return currentDay;
};

const getData = (date: UTCDate) => {
  const year = date.getFullYear();
  const day = getDayOfYear(date);
  return { year, day };
};
