import { z } from "zod";
import Activity from "./Activity";
import config from "@/utils/config";
import { invalidTokenError } from "./errors";

const getActivities = async (userId: number, token: string) => {
  console.log(`[getActivities] Getting activities for ${userId}`);
  const url = getUrl();
  // const response = await fetch(url, {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  // const data = await response.json();
  // if ("errors" in data) {
  //   console.log(
  //     `[getActivities] Error getting activities for ${userId}, ${JSON.stringify(
  //       data
  //     )}`
  //   );

  //   // TODO: P2 Detect invalid token
  //   // TODO: P2 Detect rate exceeded
  //   throw new Error(invalidTokenError);
  // }

  // const parsed = await activitySchema.parseAsync(data);
  // const mapped: Activity[] = parsed.map(mapActivity);

  // console.log(`[getActivities] Got ${mapped.length} activities for ${userId}`);
  return [];
};

const activitySchema = z.array(
  z.object({
    id: z.number(),
    name: z.string().min(1),
    distance: z.number(),
    moving_time: z.number(),
    start_date: z.string().min(1),
  })
);

const getUrl = () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;
  const before = CHALLENGE_END_DATE.valueOf() / 1000;
  const after = CHALLENGE_START_DATE.valueOf() / 1000;
  const url = `https://www.strava.com/api/v3/athlete/activities?after=${after}&before=${before}&per_page=200&page=1`;

  return url;
};

const mapActivity = (
  activity: z.infer<typeof activitySchema>[number]
): Activity => {
  return {
    id: activity.id,
    name: activity.name,
    distance: activity.distance,
    time: activity.moving_time,
    startDate: new Date(activity.start_date),
  };
};

export default getActivities;
