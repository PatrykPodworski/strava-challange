import { UTCDate } from "@date-fns/utc";
import dotenv from "dotenv";

dotenv.config();

const setEnvs = () => {
  const {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    AIRTABLE_TABLE,
    NEXT_PUBLIC_CHALLENGE_START_DATE,
    NEXT_PUBLIC_CHALLENGE_END_DATE,
    STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET,
    BASE_URL,
  } = process.env;

  if (
    !AIRTABLE_API_KEY ||
    !AIRTABLE_BASE_ID ||
    !AIRTABLE_TABLE ||
    !NEXT_PUBLIC_CHALLENGE_START_DATE ||
    !NEXT_PUBLIC_CHALLENGE_END_DATE ||
    !STRAVA_CLIENT_ID ||
    !STRAVA_CLIENT_SECRET ||
    !BASE_URL
  ) {
    throw new Error("Missing environment variables");
  }

  const startDate = new UTCDate(NEXT_PUBLIC_CHALLENGE_START_DATE);
  if (isNaN(startDate.getTime())) {
    throw new Error("Invalid NEXT_PUBLIC_CHALLENGE_START_DATE");
  }

  const endDate = new UTCDate(NEXT_PUBLIC_CHALLENGE_END_DATE);
  if (isNaN(endDate.getTime())) {
    throw new Error("Invalid NEXT_PUBLIC_CHALLENGE_END_DATE");
  }

  const envs = {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    AIRTABLE_TABLE,
    STRAVA_CLIENT_ID,
    STRAVA_CLIENT_SECRET,
    CHALLENGE_START_DATE: startDate,
    CHALLENGE_END_DATE: endDate,
    BASE_URL,
  } as const;

  return envs;
};

const config = setEnvs();

export default config;
