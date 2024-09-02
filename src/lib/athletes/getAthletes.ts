import { z } from "zod";
import config from "@/utils/config";
import { recordSchema, mapAthlete } from "./Record";

const URL = `https://api.airtable.com/v0/${config.AIRTABLE_BASE_ID}/${config.AIRTABLE_TABLE}?maxRecords=20&view=Grid%20view`;

const getAthletes = async () => {
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${config.AIRTABLE_API_KEY}`,
    },
  });

  const data = await response.json();
  const parsed = await responseSchema.parseAsync(data.records);
  const mapped = parsed.map(mapAthlete);
  return mapped;
};

const responseSchema = z.array(recordSchema);

export default getAthletes;
