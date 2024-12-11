import { calculateStreaks } from "../activities/streaks/calculateStreaks";
import { calculateStatistics } from "../calculateStatistics";
import { UTCDate } from "@date-fns/utc";
import { getTodayChallengeProgress } from "../challengeProgress/getTodayChallengeProgress";
import { RawAthleteActivities } from "./getRawAthleteActivities";

export const processAthleteActivities = (
  activities: RawAthleteActivities[],
  activeDate?: UTCDate
) => {
  const dateForStreaks = getDateForStreaks(activeDate ?? new UTCDate());

  const athletesWithStatistics = activities.map((athleteActivities) => {
    const statistics = calculateStatistics(athleteActivities.activities);
    const streaks = calculateStreaks(
      athleteActivities.activities,
      dateForStreaks
    );
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

const getDateForStreaks = (activeDate: UTCDate) => {
  const NEXT_PUBLIC_CHALLENGE_END_DATE =
    process.env.NEXT_PUBLIC_CHALLENGE_END_DATE;

  if (!NEXT_PUBLIC_CHALLENGE_END_DATE) {
    throw new Error("NEXT_PUBLIC_CHALLENGE_END_DATE is not defined");
  }

  const { isFinished } = getTodayChallengeProgress(activeDate);
  return isFinished ? new UTCDate(NEXT_PUBLIC_CHALLENGE_END_DATE) : activeDate;
};
