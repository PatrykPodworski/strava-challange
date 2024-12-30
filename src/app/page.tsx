import { LastUpdate } from "@/components/LastUpdate";
import { JoinChallengeButton } from "@/components/JoinChallengeButton";
import { ChallengeProgress } from "@/components/ChallengeProgress";
import { AthleteList } from "@/components/athleteList";
import getLeaderboardAthletes from "@/lib/leaderboard/get-leaderboard-athletes";
import { getTodayChallengeDay } from "@/lib/challengeProgress/getTodayChallengeDay";
import { sortByTotalTime } from "@/models/processed-athlete";

// TODO: P2 Streaks leaderboard
// TODO: P2 Compare with previous year
// TODO: P2 Time popover
// TODO: P2 Cumulative values with examples (openAI, structured output)
// TODO: P2 Calories data
// TODO: P3 Logging wrapper (start, end, errors)
// TODO: P3 Remember the user
// TODO: P3 Store activities
// TODO: P3 Activity map
// TODO: P3 Update readme
// TODO: P3 Group and sort imports
// TODO: P3 Force import type

export const revalidate = 60;

const Home = async () => {
  const athletes = await getLeaderboardAthletes();
  const sorted = athletes.toSorted(sortByTotalTime);
  const currentDay = getTodayChallengeDay();

  return (
    <>
      <ChallengeProgress currentDay={currentDay} />
      <div className="flex flex-col sm:gap-4">
        <AthleteList athletes={sorted} />
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
