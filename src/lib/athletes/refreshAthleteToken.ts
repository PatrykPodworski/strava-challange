import { z } from "zod";
import config from "@/utils/config";
import Athlete from "./Athlete";
import { updateAthlete } from "./updateAthlete";

const refreshAthleteToken = async (athlete: Athlete) => {
  console.log(`[refreshAthleteToken] Refreshing ${athlete.id} token`);
  const url = `https://www.strava.com/oauth/token?client_id=${config.STRAVA_CLIENT_ID}&client_secret=${config.STRAVA_CLIENT_SECRET}&refresh_token=${athlete.refreshToken}&grant_type=refresh_token`;
  const response = await fetch(url, {
    method: "POST",
  });

  const data = await response.json();
  if ("errors" in data) {
    // TODO: P2 Handle Strava API errors
    console.log(
      `[refreshAthleteToken] Error refreshing token for ${athlete.userId}, ${data}`
    );
    throw new Error("Error refreshing token");
  }

  const parsed = responseSchema.parse(data);
  const updatedAthlete = await updateAthlete(athlete.id, {
    accessToken: parsed.access_token,
    refreshToken: parsed.refresh_token,
  });

  console.log(`[refreshAthleteToken] Refreshed token for ${athlete.userId}`);
  return updatedAthlete;
};

// TODO: P3 Use access token expiration time
const responseSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
  expires_at: z.number(),
});

export default refreshAthleteToken;
