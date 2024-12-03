import getLeaderboardAthletes from "../lib/getLeaderboardAthletes";
import { AthleteListItem } from "../components/athleteList/AthleteListItem";
import { LastUpdate } from "@/components/LastUpdate";
import { JoinChallengeButton } from "@/components/JoinChallengeButton";
import { ChallengeProgress } from "@/components/Header/ChallengeProgress";

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

const Home = async () => {
  const athletes = await getLeaderboardAthletes();

  return (
    <>
      <ChallengeProgress />
      <div className="flex flex-col sm:gap-4">
        {athletes.map(({ athlete, statistics, streaks }, index) => (
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
        <JoinChallengeButton />
      </div>
    </>
  );
};

export default Home;
