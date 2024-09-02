"use server";

import getAthletes from "./getAthletes";
import { createAthlete } from "./createAthlete";
import { getAthleteToken } from "./getAthleteToken";

export const initializeAthlete = async (code: string) => {
  const parsed = await getAthleteToken(code);
  const athletes = await getAthletes();

  const existingUser = athletes.find((x) => x.userId === parsed.athlete.id);
  if (existingUser) {
    console.log(`[getAthleteToken] User ${parsed.athlete.id} already exists`);
    return existingUser;
  }

  const athlete = await createAthlete({
    userId: parsed.athlete.id,
    name: `${parsed.athlete.firstname} ${parsed.athlete.lastname}`,
    accessToken: parsed.access_token,
    refreshToken: parsed.refresh_token,
    appCode: code,
  });

  return athlete;
};
