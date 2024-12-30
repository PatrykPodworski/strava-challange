import config from "@/utils/config";
import { Athlete } from "@/models/athlete";
import { recordSchema, mapAthlete } from "./Record";

export const createAthlete = async (data: Omit<Athlete, "id">) => {
  console.log(`[createAthlete] Creating athlete: ${JSON.stringify(data)}`);

  const { AIRTABLE_BASE_ID, AIRTABLE_TABLE, AIRTABLE_API_KEY } = config;
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields: data }),
  });

  const created = await response.json();
  const parsed = await recordSchema.parseAsync(created);
  const mapped = mapAthlete(parsed);

  console.log(`[createAthlete] Created athlete`);
  return mapped;
};
