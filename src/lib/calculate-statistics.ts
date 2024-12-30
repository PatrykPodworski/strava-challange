import Activity from "./activities/Activity";
import { Statistics } from "@/models/mr-statistics";

export const calculateStatistics = (activities: Activity[]): Statistics => {
  const statistics = activities.reduce(
    (acc, activity) => {
      acc.distance.totalDistance += activity.distance;
      acc.totalTime += activity.time;

      switch (activity.type) {
        case "Ride":
          acc.distance.rideDistance += activity.distance;
          break;
        case "Run":
          acc.distance.runDistance += activity.distance;
          break;
        case "Walk":
          acc.distance.walkDistance += activity.distance;
          break;
      }

      return acc;
    },
    {
      totalTime: 0,
      distance: {
        totalDistance: 0,
        rideDistance: 0,
        runDistance: 0,
        walkDistance: 0,
      },
    }
  );

  return statistics;
};
