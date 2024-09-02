import config from "@/utils/config";
import { z } from "zod";

export const getAthleteToken = async (code: string) => {
  console.log(`[getAthleteToken] Getting token for ${code}`);
  const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } = config;
  const url = `https://www.strava.com/api/v3/oauth/token?client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&code=${code}&grant_type=authorization_code`;

  const response = await fetch(url, { method: "POST" });
  const data = await response.json();

  if ("errors" in data) {
    console.log(
      `[getAthleteToken] Error getting token for ${code}, ${JSON.stringify(
        data
      )}`
    );

    throw new Error("Error getting token");
  }

  const parsed = await responseSchema.parseAsync(data);

  console.log(`[getAthleteToken] Got token for ${code}`);
  return parsed;
};

const responseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
  athlete: z.object({
    id: z.number(),
    firstname: z.string(),
    lastname: z.string(),
  }),
});
