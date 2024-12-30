import { Athlete } from "@/models/mr-athlete";
import { tryGetAthleteActivities } from "../try-get-athlete-activities";

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
