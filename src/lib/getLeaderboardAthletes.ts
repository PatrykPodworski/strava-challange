import { calculateStreaks } from "./activities/streaks/calculateStreaks";
import getAthletes from "./athletes/getAthletes";
import { calculateStatistics } from "./calculateStatistics";
import getAthletesActivities from "./getAthletesActivities";

const getLeaderboardAthletes = async () => {
  const athletes = await getAthletes();
  const activities = await getAthletesActivities(athletes.slice(0, 1));
  const athletesWithStatistics = activities.map((athleteActivities) => {
    const statistics = calculateStatistics(athleteActivities.activities);
    const streaks = calculateStreaks(athleteActivities.activities, new Date());
    return {
      athlete: athleteActivities.athlete,
      statistics,
      streaks,
    };
  });

  return athletesWithStatistics;
};

export default getLeaderboardAthletes;
