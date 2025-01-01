import fs from "fs/promises";
import path from "path";
import { activitySchema, mapActivity } from "../common/activity-schema";
import { Activity } from "../models/a-activity";

const LOCAL_ACTIVITIES_PATH = "src/lib/activities/local/data";

export const getLocalAthleteActivities = async (userId: number) => {
  const filePath = path.join(
    process.cwd(),
    LOCAL_ACTIVITIES_PATH,
    `${userId}.json`
  );
  console.log(
    `[getLocalAthleteActivities] Reading activities for ${userId} from ${filePath}`
  );
  const buffer = await fs.readFile(filePath);
  const data = JSON.parse(buffer.toString());
  const parsed = await activitySchema.parseAsync(data);
  const mapped: Activity[] = parsed.map(mapActivity);
  console.log(
    `[getLocalAthleteActivities] Got ${mapped.length} activities for ${userId}`
  );
  return mapped;
};
