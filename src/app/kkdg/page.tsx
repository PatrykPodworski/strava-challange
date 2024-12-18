import { SingleStatList } from "@/components/athleteList/AthleteList";
import { ChallengeProgress } from "@/components/ChallengeProgress";
import { getTodayChallengeDay } from "@/lib/challengeProgress/getTodayChallengeDay";
import { data } from "./data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

export const SourcePopover = () => (
  <Popover>
    <PopoverTrigger>
      <Button variant="ghost">Source</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Image src="/2024-kkdg.png" alt="KKDG 2024" width={588} height={749} />
    </PopoverContent>
  </Popover>
);

export default Home;
