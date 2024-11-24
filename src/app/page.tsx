import getLeaderboardAthletes from "../lib/getLeaderboardAthletes";
import { AthleteListItem } from "../components/athleteList/AthleteListItem";
import config from "@/utils/config";
import { LastUpdate } from "@/components/LastUpdate";

// TODO: P1 Add og tags
// TODO: P1 Timelapse
// TODO: P1 Compare with previous year
// TODO: P2 Time popover
// TODO: P2 Distance leaderboard
// TODO: P2 Cumulative values with examples (openAI, structured output)
// TODO: P2 Streaks leaderboard
// TODO: P2 Calories data
// TODO: P3 Logging wrapper (start, end, errors)
// TODO: P3 Remember the user
// TODO: P3 Unify imports
// TODO: P3 Store activities
// TODO: P3 Activity map

export const revalidate = 60;

const { STRAVA_CLIENT_ID, BASE_URL } = config;
const redirectUrl = `${BASE_URL}/auth/callback`;
const joinUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=read,activity:read`;

const Home = async () => {
  const athletes = await getLeaderboardAthletes();
  const sorted = athletes.sort(
    (a, b) => b.statistics.totalTime - a.statistics.totalTime
  );

  return (
    <main className="flex flex-col items-center grow gap-2 sm:gap-8">
      <div className="flex flex-col sm:gap-4">
        {sorted.map(({ athlete, statistics, streaks }, index) => (
          <AthleteListItem
            key={athlete.userId}
            athlete={athlete}
            place={index + 1}
            statistics={statistics}
            streaks={streaks}
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
