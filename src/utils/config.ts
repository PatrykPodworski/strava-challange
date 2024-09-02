import dotenv from "dotenv";

dotenv.config();

const setEnvs = () => {
  const {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    AIRTABLE_TABLE,
    CHALLENGE_START_DATE,
    CHALLENGE_END_DATE,
    STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET,
  } = process.env;

  if (
    !AIRTABLE_API_KEY ||
    !AIRTABLE_BASE_ID ||
    !AIRTABLE_TABLE ||
    !CHALLENGE_START_DATE ||
    !CHALLENGE_END_DATE ||
    !STRAVA_CLIENT_ID ||
    !STRAVA_CLIENT_SECRET
  ) {
    throw new Error("Missing environment variables");
  }

  const startDate = new Date(CHALLENGE_START_DATE);
  if (isNaN(startDate.getTime())) {
    throw new Error("Invalid CHALLENGE_START_DATE");
  }

  const endDate = new Date(CHALLENGE_END_DATE);
  if (isNaN(endDate.getTime())) {
    throw new Error("Invalid CHALLENGE_END_DATE");
  }

  const envs = {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    AIRTABLE_TABLE,
    STRAVA_CLIENT_ID: STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET: STRAVA_CLIENT_SECRET,
    CHALLENGE_START_DATE: startDate,
    CHALLENGE_END_DATE: endDate,
  } as const;

  return envs;
};

const config = setEnvs();

export default config;
