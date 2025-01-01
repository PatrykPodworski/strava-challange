import { Athlete } from "@/models/athlete";
import { getLocalAthleteActivities } from "../activities/local/get-local-athlete-activities";

const getAthletesActivities = async (athletes: Athlete[]) => {
  const activities = await Promise.all(
    athletes.map(async (athlete) => {
      return {
        athlete: athlete,
        activities: await getLocalAthleteActivities(athlete.userId),
      };
    })
  );

  return activities;
};

export default getAthletesActivities;
