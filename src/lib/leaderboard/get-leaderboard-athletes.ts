import { getRawAthleteActivities } from "./get-raw-athlete-activities";
import { processAthleteActivities } from "./process-athlete-activities";

const getLeaderboardAthletes = async () => {
  const activities = await getRawAthleteActivities();
  const processed = processAthleteActivities(activities);

  return processed;
};

export default getLeaderboardAthletes;
