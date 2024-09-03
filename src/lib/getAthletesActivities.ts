import Athlete from "./athletes/Athlete";
import { tryGetAthleteActivities } from "./tryGetAthleteActivities";

const getAthletesActivities = async (athletes: Athlete[]) => {
  const activities = await Promise.all(
    athletes.map(async (athlete) => {
      return {
        athlete: athlete,
        activities: await tryGetAthleteActivities(athlete),
      };
    })
  );

  return activities;
};

export default getAthletesActivities;
