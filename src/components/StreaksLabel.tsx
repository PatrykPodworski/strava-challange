import { Flame } from "lucide-react";
import clsx from "clsx";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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
  const isStreakAboutToBeLost = !isStreakActive && currentStreak > 0;

  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={clsx(
            "flex gap-1 items-center relative",
            isStreakAboutToBeLost && "hover:underline cursor-pointer"
          )}
        >
          <div className="relative">
            <Flame className="w-5 h-5" />
            {isStreakAboutToBeLost && (
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </div>
          <span>
            {currentStreak} {currentStreak === 1 ? "day" : "days"}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        {isStreakAboutToBeLost && (
          <p className="text-sm">Add an activity today to keep your streak!</p>
        )}
      </PopoverContent>
    </Popover>
  );
};

export type StreaksLabelProps = {
  currentStreak: number;
  longestStreak: number;
  isStreakActive: boolean;
};
