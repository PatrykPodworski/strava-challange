import { Flame } from "lucide-react";

// TODO: P1 Show losing streak today
// TODO: P1 Equal width of labels
// TODO: P2 Hover Card with longest streak
// TODO: P2 Colors
// TODO: P3 Streak calendar
export const StreaksLabel = ({
  currentStreak,
  longestStreak,
}: StreaksLabelProps) => {
  return (
    <div className="flex gap-1 h-6 items-center text-base font-light">
      <Flame className="w-4 h-4" />
      <span>
        {currentStreak} {currentStreak === 1 ? "day" : "days"}
      </span>
    </div>
  );
};

type StreaksLabelProps = {
  currentStreak: number;
  longestStreak: number;
};
