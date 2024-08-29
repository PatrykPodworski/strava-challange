import { z } from "zod";
import Activity from "./Activity";

const AFTER = 1717200000;
const BEFORE = 1725148800;
const ATHLETES_URL = `https://www.strava.com/api/v3/athlete/activities?after=${AFTER}&before=${BEFORE}&per_page=200&page=1`;

const getActivities = async (token: string) => {
  const response = await fetch(ATHLETES_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
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
