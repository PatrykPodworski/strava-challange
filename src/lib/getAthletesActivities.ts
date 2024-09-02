import getActivities from "./activities/getActivities";
import { invalidTokenError } from "./activities/errors";
import Athlete from "./athletes/Athlete";
import refreshAthleteToken from "./athletes/refreshAthleteToken";

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

const tryGetAthleteActivities = async (athlete: Athlete) => {
  try {
    const activities = await getActivities(athlete.userId, athlete.accessToken);
    return activities;
  } catch (error) {
    if (error instanceof Error && error.message === invalidTokenError) {
      console.log(
        `[getAthletesActivities] Invalid token for ${athlete.userId}`
      );
      const updatedAthlete = await refreshAthleteToken(athlete);
      const activities = await getActivities(
        updatedAthlete.userId,
        updatedAthlete.accessToken
      );
      return activities;
    }
  }

  return [];
};

export default getAthletesActivities;
