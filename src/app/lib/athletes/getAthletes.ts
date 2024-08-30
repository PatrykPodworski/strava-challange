import Athlete from "./Athlete";
import { z } from "zod";
import config from "@/app/utils/config";

const URL = `https://api.airtable.com/v0/${config.AIRTABLE_BASE_ID}/Athletes?maxRecords=15&view=Grid%20view`;

const getAthletes = async () => {
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${config.AIRTABLE_API_KEY}`,
    },
  });

  const data = await response.json();
  const parsed = await athletesSchema.parseAsync(data.records);
  const mapped = parsed.map(mapAthlete);
  return mapped;
};

const athletesSchema = z.array(
  z.object({
    fields: z.object({
      id: z.number(),
      name: z.string().min(1),
      token: z.string().min(1),
      avatarUrl: z.string().min(1),
    }),
  })
);

const mapAthlete = (input: z.infer<typeof athletesSchema>[number]): Athlete => {
  return {
    id: input.fields.id,
    name: input.fields.name,
    token: input.fields.token,
    avatarUrl: input.fields.avatarUrl,
  };
};

export default getAthletes;
