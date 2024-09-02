import config from "@/utils/config";
import Athlete from "./Athlete";
import { mapAthlete, recordSchema } from "./Record";

export const updateAthlete = async (id: string, data: InputData) => {
  console.log(
    `[updateAthlete] Updating athlete ${id}, data: ${JSON.stringify(data)}`
  );
  const url = `https://api.airtable.com/v0/${config.AIRTABLE_BASE_ID}/${config.AIRTABLE_TABLE}/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${config.AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields: data }),
  });

  const updated = await response.json();
  const parsed = await recordSchema.parseAsync(updated);
  const mapped = mapAthlete(parsed);

  console.log(`[updateAthlete] Updated athlete ${id}`);
  return mapped;
};

type InputData = Partial<Omit<Athlete, "id">>;
