import { z } from "zod";
import Activity from "./Activity";
import config from "@/app/utils/config";

const getActivities = async (token: string) => {
  const url = getUrl();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if ("errors" in data) {
    // TODO: P2 Handle Strava API errors
    console.log(data);
    return [];
  }

  const parsed = await activitySchema.parseAsync(data);
  const mapped: Activity[] = parsed.map(mapActivity);

  return mapped;
};

const activitySchema = z.array(
  z.object({
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
    name: activity.name,
    distance: activity.distance,
    time: activity.moving_time,
    startDate: new Date(activity.start_date),
  };
};

export default getActivities;
