import { getDayOfYear } from "date-fns";
import Activity from "../Activity";
import { UTCDate } from "@date-fns/utc";

// TODO: P3 Support multiple years
export const calculateStreaks = (
  activities: Pick<Activity, "startDate">[],
  today: Date
): Response => {
  if (activities.length === 0) {
    return { currentStreak: 0, longestStreak: 0 };
  }

  const daysWithActivities = Array.from(
    new Set(activities.map((x) => getDayOfYear(new UTCDate(x.startDate))))
  ).toSorted();

  const todayDay = getDayOfYear(new UTCDate(today));

  const [longestStreak, currentStreak] = daysWithActivities.reduce(
    ([longestStreak, currentStreak, previousDay], day) => {
      if (day !== previousDay + 1) {
        return [longestStreak, 1, day];
      }

      const newStreak = currentStreak + 1;
      const newLongestStreak = Math.max(longestStreak, newStreak);
      return [newLongestStreak, newStreak, day];
    },
    [1, 1, NaN]
  );

  const lastDay = daysWithActivities.at(-1)!;
  const isCurrentStreakActive = lastDay === todayDay;

  return {
    currentStreak: isCurrentStreakActive ? currentStreak : 0,
    longestStreak,
  };
};

type Response = {
  currentStreak: number;
  longestStreak: number;
};
