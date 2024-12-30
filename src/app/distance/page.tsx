import { LastUpdate } from "@/components/LastUpdate";
import { ChallengeProgress } from "@/components/ChallengeProgress";
import { AthleteList } from "@/components/athleteList";
import { getTodayChallengeDay } from "@/lib/challengeProgress/getTodayChallengeDay";
import getLeaderboardAthletes from "@/lib/leaderboard/get-leaderboard-athletes";
import { sortByDistance } from "@/models/processed-athlete";

export const revalidate = 60;

const Distance = async () => {
  const athletes = await getLeaderboardAthletes();
  const sorted = athletes.toSorted(sortByDistance);
  const currentDay = getTodayChallengeDay();

  return (
    <>
      <ChallengeProgress currentDay={currentDay} />
      <div className="flex flex-col sm:gap-4">
        <AthleteList athletes={sorted} />
      </div>
      <LastUpdate />
    </>
  );
};

export default Distance;
