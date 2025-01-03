import { Flame } from "lucide-react";
import clsx from "clsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { StatisticLabel } from "@/components/statistic-label";
import { StreaksPopoverContent } from "./streaks-popover-content";

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
              <Flame
                className={clsx(
                  "w-5 h-5 transition-colors",
                  getFlameColor(currentStreak)
                )}
              />
              <div
                className={clsx(
                  "absolute bottom-0 right-0 rounded-full transition-all duration-200 m-auto",
                  isStreakAboutToBeLost ? "w-2 h-2 bg-red-500" : "w-0 h-0"
                )}
              />
            </div>
          }
          value={`${currentStreak} ${currentStreak === 1 ? "day" : "days"}`}
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

const getFlameColor = (currentStreak: number) => {
  switch (true) {
    case currentStreak > 59:
      return "text-red-500";
    case currentStreak > 29:
      return "text-orange-600";
    case currentStreak > 9:
      return "text-orange-400";
    case currentStreak > 4:
      return "text-yellow-500";
    case currentStreak > 1:
      return "text-yellow-300";
    default:
      return undefined;
  }
};

type StreaksLabelProps = {
  currentStreak: number;
  longestStreak: number;
  isStreakActive: boolean;
};
