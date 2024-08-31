import getActivities from "./activities/getActivities";
import Athlete from "./athletes/Athlete";

const getAthletesActivities = async (athletes: Athlete[]) => {
  const activities = await Promise.all(
    athletes.map(async (athlete) => {
      return {
        athlete: athlete,
        activities: await getActivities(athlete.accessToken),
      };
    })
  );

  return activities;
};

export default getAthletesActivities;
