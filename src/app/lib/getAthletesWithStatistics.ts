import Activity from "./activities/Activity";
import getAthletes from "./athletes/getAthletes";
import getAthletesActivities from "./getAthletesActivities";

const getAthletesWithStatistics = async () => {
  const athletes = await getAthletes();
  const activities = await getAthletesActivities(athletes);
  const athletesWithStatistics = activities.map((athleteActivities) => {
    const statistics = calculateStatistics(athleteActivities.activities);
    return {
      athlete: athleteActivities.athlete,
      statistics,
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
