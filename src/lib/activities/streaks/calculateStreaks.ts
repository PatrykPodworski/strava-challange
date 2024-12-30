import { getDayOfYear } from "date-fns";
import { Streaks } from "@/models/mr-streaks";
import Activity from "../Activity";

// TODO: P3 Support multiple years
export const calculateStreaks = (
  activities: Pick<Activity, "startDate">[],
  today: Date
): Streaks => {
  if (activities.length === 0) {
    return { currentStreak: 0, longestStreak: 0, isStreakActive: false };
  }

  const daysWithActivities = Array.from(
    new Set(activities.map((x) => getDayOfYear(x.startDate)))
  ).toSorted();

  const todayDay = getDayOfYear(today);

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
  const isStreakExtendable = lastDay >= todayDay - 1;
  const isStreakActive = lastDay === todayDay;

  return {
    currentStreak: isStreakExtendable ? currentStreak : 0,
    longestStreak,
    isStreakActive: isStreakActive,
  };
};
