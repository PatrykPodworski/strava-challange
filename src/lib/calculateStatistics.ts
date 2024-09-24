import Activity from "./activities/Activity";

export const calculateStatistics = (activities: Activity[]) => {
  const statistics = activities.reduce(
    (acc, activity) => {
      acc.distance.total += activity.distance;
      acc.totalTime += activity.time;

      switch (activity.type) {
        case "Ride":
          acc.distance.ride += activity.distance;
          break;
        case "Run":
          acc.distance.run += activity.distance;
          break;
        case "Walk":
          acc.distance.walk += activity.distance;
          break;
      }

      return acc;
    },
    {
      totalTime: 0,
      distance: {
        total: 0,
        ride: 0,
        run: 0,
        walk: 0,
      },
    }
  );

  return statistics;
};

export type Statistics = ReturnType<typeof calculateStatistics>;
