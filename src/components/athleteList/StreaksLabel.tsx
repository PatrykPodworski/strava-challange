import { Flame } from "lucide-react";
import clsx from "clsx";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { StatisticLabel } from "./StatisticLabel";
import { StreaksPopoverContent } from "./StreaksPopoverContent";

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
        <StatisticLabel
          clickable
          className="w-24"
          icon={
            <div className="relative">
              <Flame className="w-5 h-5" />
              {isStreakAboutToBeLost && (
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </div>
          }
          value={`${88} ${currentStreak === 1 ? "day" : "days"}`}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <StreaksPopoverContent
          currentStreak={currentStreak}
          isStreakAboutToBeLost={isStreakAboutToBeLost}
          longestStreak={longestStreak}
        />
      </PopoverContent>
    </Popover>
  );
};

export type StreaksLabelProps = {
  currentStreak: number;
  longestStreak: number;
  isStreakActive: boolean;
};
