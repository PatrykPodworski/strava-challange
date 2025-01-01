import { UTCDate } from "@date-fns/utc";
import { ProcessedAthlete } from "@/models/processed-athlete";
import { calculateStreaks } from "../activities/streaks/calculate-streaks";
import { calculateStatistics } from "../calculate-statistics";
import { getTodayChallengeProgress } from "../challengeProgress/getTodayChallengeProgress";
import { RawAthleteActivities } from "./get-raw-athlete-activities";

export const processAthleteActivities = (
  activities: RawAthleteActivities[],
  activeDate?: UTCDate
) => {
  const dateForStreaks = getDateForStreaks(activeDate ?? new UTCDate());

  const athletesWithStatistics: ProcessedAthlete[] = activities.map(
    (athleteActivities) => {
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
    }
  );

  return athletesWithStatistics;
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
