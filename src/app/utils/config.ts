import dotenv from "dotenv";

dotenv.config();

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
  throw new Error("Missing environment variables");
}

const config = {
  AIRTABLE_API_KEY,
  AIRTABLE_BASE_ID,
} as const;

export default config;
