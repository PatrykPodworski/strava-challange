import { getChallengeProgress } from "@/lib/challengeProgress/getChallengeProgress";
import { Progress } from "./ui/progress";

// TODO: P2 Component testing (start is 1st, end is 100%, finished state)
export const ChallengeProgress = ({ currentDay }: ChallengeProgressProps) => {
  const { daysLeft, progress, isFinished } = getChallengeProgress(currentDay);

  return (
    <div className="w-full sm:min-w-[420px]">
      <Progress value={progress} />
      {isFinished ? (
        <div className="text-center text-lg text-gray-600">
          Challenge finished!
        </div>
      ) : (
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Day {currentDay}</span>
          <span>{daysLeft} days left</span>
        </div>
      )}
    </div>
  );
};

type ChallengeProgressProps = {
  currentDay: number;
};
