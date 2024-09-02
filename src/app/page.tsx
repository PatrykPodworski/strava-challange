import getAthletesWithStatistics from "../lib/getAthletesWithStatistics";
import { AthleteListItem } from "../components/AthleteListItem";
import config from "@/utils/config";

// TODO: P0 Data validation screen
// TODO: P0 Adjust start and end date
// TODO: P1 Club link
// TODO: P2 Unify imports
// TODO: P3 Logging wrapper (start, end, errors)
// TODO: P3 Duration progress bar
// TODO: P3 Cumulative values with examples

export const revalidate = 60;

const { STRAVA_CLIENT_ID, BASE_URL } = config;
const redirectUrl = `${BASE_URL}/auth/callback`;
const joinUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=read,activity:read`;

const Home = async () => {
  const athletes = await getAthletesWithStatistics();
  const sorted = athletes.sort(
    (a, b) => b.statistics.totalTime - a.statistics.totalTime
  );

  const lastUpdate = new Date();

  return (
    <main className="flex flex-col items-center grow gap-8">
      <div className="flex flex-col gap-4">
        {sorted.map((data, index) => (
          <AthleteListItem
            key={data.athlete.userId}
            athlete={data.athlete}
            place={index + 1}
            statistics={data.statistics}
          />
        ))}
      </div>
      <p className="text-gray-300 text-sm">
        Last update: {lastUpdate.toLocaleDateString()}{" "}
        {lastUpdate.toLocaleTimeString()}
      </p>
      <div className="flex flex-col gap-2 items-center">
        <p className="max-w-prose">
          Not on the list? Click the button below to join the challenge!
        </p>
        <a
          href={joinUrl}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          Join the challenge
        </a>
      </div>
    </main>
  );
};

export default Home;
