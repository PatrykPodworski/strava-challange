import Activity from "./activities/Activity";
import { calculateStreaks } from "./activities/streaks/calculateStreaks";
import getAthletes from "./athletes/getAthletes";
import getAthletesActivities from "./getAthletesActivities";

// TODO: P1 Rename
const getAthletesWithStatistics = async () => {
  const athletes = await getAthletes();
  const activities = await getAthletesActivities(athletes);
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

const calculateStatistics = (activities: Activity[]) => {
  const statistics = activities.reduce(
    (acc, activity) => {
      acc.totalDistance += activity.distance;
      acc.totalTime += activity.time;
      return acc;
    },
    { totalDistance: 0, totalTime: 0 }
  );

  return statistics;
};

export default getAthletesWithStatistics;
