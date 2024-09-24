const activityTypes = [
  "Walk",
  "Run",
  "Ride",
  "Workout",
  "WeightTraining",
  "Yoga",
  "Other",
] as const;
const activityTypesSet = new Set(activityTypes);

const activityMapping: Record<string, ActivityType> = {
  Hike: "Walk",
};

const isActivityType = (x: string): x is ActivityType =>
  activityTypesSet.has(x as ActivityType);

export const mapToActivityType = (x: string): ActivityType => {
  if (isActivityType(x)) {
    return x;
  }

  if (x in activityMapping) {
    return activityMapping[x];
  }

  return "Other";
};

export type ActivityType = (typeof activityTypes)[number];
