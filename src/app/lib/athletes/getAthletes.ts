import { z } from "zod";
import config from "@/app/utils/config";
import Athlete, { athleteSchema } from "./Athlete";

const URL = `https://api.airtable.com/v0/${config.AIRTABLE_BASE_ID}/Athletes?maxRecords=15&view=Grid%20view`;

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

const responseSchema = z.array(
  z.object({
    fields: athleteSchema,
  })
);

type Response = z.infer<typeof responseSchema>;

const mapAthlete = (input: Response[number]): Athlete => ({
  ...input.fields,
});

export default getAthletes;
