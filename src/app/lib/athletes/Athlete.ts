import { z } from "zod";

export const athleteSchema = z.object({
  userId: z.number(),
  name: z.string().min(1),
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1),
  appCode: z.string().min(1),
});

export type Athlete = z.infer<typeof athleteSchema>;

export default Athlete;
