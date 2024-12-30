import { z } from "zod";
import { Athlete } from "@/models/athlete";

export const recordSchema = z.object({
  id: z.string(),
  fields: z.object({
    userId: z.number(),
    name: z.string().min(1),
    accessToken: z.string().min(1),
    refreshToken: z.string().min(1),
    appCode: z.string().min(1),
  }),
});

export type Record = z.infer<typeof recordSchema>;

export const mapAthlete = (input: Record): Athlete => ({
  id: input.id,
  ...input.fields,
});
