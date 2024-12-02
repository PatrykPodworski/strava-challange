import config from "@/utils/config";
import { Progress } from "../ui/progress";
import { UTCDate } from "@date-fns/utc";
import { getDayOfYear } from "date-fns";

// TODO: P2 Component testing (start is 1st, end is 100%, finished state)
export const ChallengeProgress = () => {
  const { currentDay, daysLeft, progress, isFinished } = getProgress();

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

const getProgress = () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;
  const todayDay = getDayOfYear(new UTCDate());
  const startDay = getDayOfYear(new UTCDate(CHALLENGE_START_DATE));
  const endDay = getDayOfYear(new UTCDate(CHALLENGE_END_DATE));

  const isFinished = todayDay > endDay;
  if (isFinished) {
    return {
      currentDay: endDay - startDay + 1,
      daysLeft: 0,
      progress: 100,
      isFinished,
    };
  }

  const currentDay = todayDay - startDay + 1;
  const daysLeft = endDay - todayDay;
  const progress = Math.min((currentDay / (endDay - startDay + 1)) * 100, 100);

  return { currentDay, daysLeft, progress, isFinished };
};
