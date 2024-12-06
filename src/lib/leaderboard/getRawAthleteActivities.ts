"use server";

import getAthletes from "../athletes/getAthletes";
import getAthletesActivities from "./getAthletesActivities";

export const getRawAthleteActivities = async () => {
  const athletes = await getAthletes();
  const activities = await getAthletesActivities(athletes);

  return activities;
};

export type RawAthleteActivities = Awaited<
  ReturnType<typeof getRawAthleteActivities>
>[number];