import { getRawAthleteActivities } from "./getRawAthleteActivities";
import { processAthleteActivities } from "./processAthleteActivities";

const getLeaderboardAthletes = async () => {
  const activities = await getRawAthleteActivities();
  const processed = processAthleteActivities(activities);

  return processed;
};

export default getLeaderboardAthletes;
