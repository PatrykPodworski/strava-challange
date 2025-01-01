import { ActivityType } from "./activity-type";

export type Activity = {
  id: number;
  name: string;
  distance: number;
  time: number;
  startDate: Date;
  type: ActivityType;
};
