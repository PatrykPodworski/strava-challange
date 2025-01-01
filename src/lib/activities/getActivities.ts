import { z } from "zod";
import Activity from "./Activity";
import config from "@/utils/config";
import { invalidTokenError } from "./errors";
import { mapToActivityType } from "./ActivityType";
import { writeActivitiesToFile } from "../data-writers/write-activities-to-file";

const PAGE_SIZE = 200;

const getActivities = async (userId: number, token: string) => {
  console.log(`[getActivities] Getting activities for ${userId}`);

  let activities: Activity[] = [];
  let page = 1;

  while (page < 3) {
    const pageActivities = await getActivitiesPage(userId, token, page);
    activities.push(...pageActivities);

    page++;
    if (pageActivities.length < PAGE_SIZE) {
      break;
    }
  }

  console.log(
    `[getActivities] Got ${activities.length} activities for ${userId}`
  );
  return activities;
};

const getActivitiesPage = async (
  userId: number,
  token: string,
  page: number
) => {
  const url = getUrl(page);
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if ("errors" in data) {
    console.log(
      `[getActivities] Error getting activities for ${userId}, ${JSON.stringify(
        data
      )}`
    );

    // TODO: P2 Detect invalid token
    // TODO: P2 Detect rate exceeded
    throw new Error(invalidTokenError);
  }

  const parsed = await activitySchema.parseAsync(data);
  const mapped: Activity[] = parsed.map(mapActivity);
  return mapped;
};

const activitySchema = z.array(
  z.object({
    id: z.number(),
    name: z.string().min(1),
    distance: z.number(),
    moving_time: z.number(),
    start_date: z.string().min(1),
    type: z.string().min(1),
  })
);

const getUrl = (page: number) => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;
  const before = CHALLENGE_END_DATE.valueOf() / 1000;
  const after = CHALLENGE_START_DATE.valueOf() / 1000;
  const url = `https://www.strava.com/api/v3/athlete/activities?after=${after}&before=${before}&per_page=${PAGE_SIZE}&page=${page}`;

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
    type: mapToActivityType(activity.type),
  };
};

export default getActivities;
