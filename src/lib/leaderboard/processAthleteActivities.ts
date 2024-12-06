import { calculateStreaks } from "../activities/streaks/calculateStreaks";
import { calculateStatistics } from "../calculateStatistics";
import { UTCDate } from "@date-fns/utc";
import { getTodayChallengeProgress } from "../challengeProgress/getTodayChallengeProgress";
import { RawAthleteActivities } from "./getRawAthleteActivities";

const NEXT_PUBLIC_CHALLENGE_END_DATE =
  process.env.NEXT_PUBLIC_CHALLENGE_END_DATE;

export const processAthleteActivities = (
  activities: RawAthleteActivities[]
) => {
  if (!NEXT_PUBLIC_CHALLENGE_END_DATE) {
    throw new Error("NEXT_PUBLIC_CHALLENGE_END_DATE is not defined");
  }

  const athletesWithStatistics = activities.map((athleteActivities) => {
    const statistics = calculateStatistics(athleteActivities.activities);
    const { isFinished } = getTodayChallengeProgress();
    const today = isFinished
      ? new UTCDate(NEXT_PUBLIC_CHALLENGE_END_DATE)
      : new UTCDate();
    const streaks = calculateStreaks(athleteActivities.activities, today);
    return {
      athlete: athleteActivities.athlete,
      statistics,
      streaks,
    };
  });

  const sorted = athletesWithStatistics.sort(
    (a, b) => b.statistics.totalTime - a.statistics.totalTime
  );

  return sorted;
};
