import { z } from "zod";
import { mapToActivityType } from "../models/activity-type";
import { Activity } from "../models/a-activity";

export const activitySchema = z.array(
  z.object({
    id: z.number(),
    name: z.string().min(1),
    distance: z.number(),
    moving_time: z.number(),
    start_date: z.string().min(1),
    type: z.string().min(1),
  })
);

export const mapActivity = (
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
