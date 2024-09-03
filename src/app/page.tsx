import getAthletesWithStatistics from "../lib/getAthletesWithStatistics";
import { AthleteListItem } from "../components/AthleteListItem";
import config from "@/utils/config";
import { LastUpdate } from "@/components/LastUpdate";

// TODO: P1 Club link
// TODO: P2 Unify imports
// TODO: P3 Logging wrapper (start, end, errors)
// TODO: P3 Duration progress bar
// TODO: P3 Cumulative values with examples
// TODO: P3 Compare with previous year
// TODO: P3 Remember the user

export const revalidate = 60;

const { STRAVA_CLIENT_ID, BASE_URL } = config;
const redirectUrl = `${BASE_URL}/auth/callback`;
const joinUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=read,activity:read`;

const Home = async () => {
  const athletes = await getAthletesWithStatistics();
  const sorted = athletes.sort(
    (a, b) => b.statistics.totalTime - a.statistics.totalTime
  );

  return (
    <main className="flex flex-col items-center grow gap-2 sm:gap-8">
      <div className="flex flex-col sm:gap-4">
        {sorted.map((data, index) => (
          <AthleteListItem
            key={data.athlete.userId}
            athlete={data.athlete}
            place={index + 1}
            statistics={data.statistics}
          />
        ))}
      </div>
      <LastUpdate />
      <div className="flex flex-col gap-2 items-center text-center">
        <p>Not on the list? Click the button below to join the challenge!</p>
        <a
          href={joinUrl}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-center"
        >
          Join the challenge
        </a>
      </div>
    </main>
  );
};

export default Home;
