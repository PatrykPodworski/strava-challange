import { z } from "zod";
import config from "@/app/utils/config";
import Athlete from "./Athlete";

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

const responseSchema = z.array(
  z.object({
    id: z.string(),
    fields: z.object({
      userId: z.number(),
      name: z.string().min(1),
      accessToken: z.string().min(1),
      refreshToken: z.string().min(1),
      appCode: z.string().min(1),
    }),
  })
);

type Response = z.infer<typeof responseSchema>;

const mapAthlete = (input: Response[number]): Athlete => ({
  id: input.id,
  ...input.fields,
});

export default getAthletes;
