import { UTCDate } from "@date-fns/utc";
import { addDays } from "date-fns";
import { RawAthleteActivities } from "@/lib/leaderboard/get-raw-athlete-activities";
import { processAthleteActivities } from "@/lib/leaderboard/process-athlete-activities";
import { sortByTotalTime } from "@/models/processed-athlete";

const NEXT_PUBLIC_CHALLENGE_START_DATE =
  process.env.NEXT_PUBLIC_CHALLENGE_START_DATE;

export const filterAthletes = (
  athletes: RawAthleteActivities[],
  currentDay: number
) => {
  if (athletes.length === 0) {
    return [];
  }

  const filterDate = getFilterDate(currentDay);
  const filtered = athletes.map((athlete) => ({
    ...athlete,
    activities: athlete.activities.filter((x) => x.startDate <= filterDate),
  }));

  const processed = processAthleteActivities(filtered, addDays(filterDate, -1));
  const sorted = processed.toSorted(sortByTotalTime);
  return sorted;
};

const getFilterDate = (currentDay: number) => {
  if (!NEXT_PUBLIC_CHALLENGE_START_DATE) {
    throw new Error("NEXT_PUBLIC_CHALLENGE_START_DATE is not defined");
  }

  const challengeStart = new UTCDate(NEXT_PUBLIC_CHALLENGE_START_DATE);
  const filterDate = addDays(challengeStart, currentDay + 1);
  filterDate.setHours(0, 0, 0, 0);

  return filterDate;
};
