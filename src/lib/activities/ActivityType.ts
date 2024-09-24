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

export const isActivityType = (x: string): x is ActivityType =>
  activityTypesSet.has(x as ActivityType);

export type ActivityType = (typeof activityTypes)[number];
