import config from "@/utils/config";
import { calculateStreaks } from "./activities/streaks/calculateStreaks";
import getAthletes from "./athletes/getAthletes";
import { calculateStatistics } from "./calculateStatistics";
import getAthletesActivities from "./getAthletesActivities";
import { UTCDate } from "@date-fns/utc";
import { getTodayChallengeProgress } from "./challengeProgress/getTodayChallengeProgress";

const getLeaderboardAthletes = async () => {
  const { CHALLENGE_END_DATE } = config;

  const athletes = await getAthletes();
  const activities = await getAthletesActivities(athletes);
  const athletesWithStatistics = activities.map((athleteActivities) => {
    const statistics = calculateStatistics(athleteActivities.activities);
    const { isFinished } = getTodayChallengeProgress();
    const today = isFinished ? CHALLENGE_END_DATE : new UTCDate();
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

export default getLeaderboardAthletes;
