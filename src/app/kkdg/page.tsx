import { SingleStatList } from "@/components/athleteList/AthleteList";
import { ChallengeProgress } from "@/components/ChallengeProgress";
import { getTodayChallengeDay } from "@/lib/challengeProgress/getTodayChallengeDay";
import { data } from "./data";
import { SourcePopover } from "./SourcePopover";

const Home = async () => {
  const currentDay = getTodayChallengeDay();

  return (
    <>
      <ChallengeProgress currentDay={currentDay} />
      <SingleStatList athletes={data} />
      <SourcePopover />
    </>
  );
};

export default Home;
