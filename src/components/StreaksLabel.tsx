import { Flame } from "lucide-react";

// TODO: P1 Show losing streak today
// TODO: P1 Equal width of labels
// TODO: P2 Hover Card with longest streak
// TODO: P2 Colors
// TODO: P3 Streak calendar
export const StreaksLabel = ({
  currentStreak,
  longestStreak,
  isStreakActive,
}: StreaksLabelProps) => {
  return (
    <>
      <div className="flex gap-1 items-center relative">
        <Flame className="w-5 h-5" />
        {!isStreakActive && currentStreak > 0 && (
          <div className="absolute top-0 -right-2 bg-red-500 w-2 h-2 rounded-full" />
        )}
        <span>
          {currentStreak} {currentStreak === 1 ? "day" : "days"}
        </span>
      </div>
    </>
  );
};

export type StreaksLabelProps = {
  currentStreak: number;
  longestStreak: number;
  isStreakActive: boolean;
};
