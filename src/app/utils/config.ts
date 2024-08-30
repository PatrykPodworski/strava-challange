import { parseISO } from "date-fns";
import dotenv from "dotenv";

dotenv.config();

const setEnvs = () => {
  const {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    CHALLENGE_START_DATE,
    CHALLENGE_END_DATE,
  } = process.env;

  if (
    !AIRTABLE_API_KEY ||
    !AIRTABLE_BASE_ID ||
    !CHALLENGE_START_DATE ||
    !CHALLENGE_END_DATE
  ) {
    throw new Error("Missing environment variables");
  }

  const startDate = parseISO(CHALLENGE_START_DATE);
  if (isNaN(startDate.getTime())) {
    throw new Error("Invalid CHALLENGE_START_DATE");
  }

  const endDate = parseISO(CHALLENGE_END_DATE);
  if (isNaN(endDate.getTime())) {
    throw new Error("Invalid CHALLENGE_END_DATE");
  }

  const envs = {
    AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID,
    CHALLENGE_START_DATE: startDate,
    CHALLENGE_END_DATE: endDate,
  } as const;

  return envs;
};

const config = setEnvs();

export default config;
