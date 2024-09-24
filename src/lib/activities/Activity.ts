import { ActivityType } from "./ActivityType";

type Activity = {
  id: number;
  name: string;
  distance: number;
  time: number;
  startDate: Date;
  type: ActivityType;
};

export default Activity;
