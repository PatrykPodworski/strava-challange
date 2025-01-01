import { Athlete } from "@/models/athlete";
import { invalidTokenError } from "../models/errors";
import getActivities from "./get-activities";
import refreshAthleteToken from "../../athletes/refreshAthleteToken";

export const tryGetAthleteActivities = async (athlete: Athlete) => {
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
    throw error;
  }
};
