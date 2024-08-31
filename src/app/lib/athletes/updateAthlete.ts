import config from "@/app/utils/config";
import Athlete from "./Athlete";

export const updateAthlete = async (id: string, data: InputData) => {
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
};

type InputData = Partial<Omit<Athlete, "id">>;
