import { Progress } from "../ui/progress";
import { getChallengeProgress } from "../../lib/getChallengeProgress";

// TODO: P2 Component testing (start is 1st, end is 100%, finished state)
export const ChallengeProgress = () => {
  const { currentDay, daysLeft, progress, isFinished } = getChallengeProgress();

  return (
    <div className="w-full">
      <Progress value={progress} />
      {isFinished ? (
        <div className="text-center text-lg text-gray-600">
          Challenge finished!
        </div>
      ) : (
        <div className="flex justify-between text-sm text-gray-500">
          <span>Day {currentDay}</span>
          <span>{daysLeft} days left</span>
        </div>
      )}
    </div>
  );
};
