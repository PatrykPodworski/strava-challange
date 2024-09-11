import clsx from "clsx";
import Link from "next/link";
import Athlete from "@/lib/athletes/Athlete";
import formatToHours from "@/utils/formatToHours";
import formatToKilometers from "@/utils/formatToKilometers";
import { Separator } from "./ui/separator";
import { StreaksLabel } from "./StreaksLabel";
import { Clock, Route } from "lucide-react";

export const AthleteListItem = ({
  athlete,
  statistics,
  place,
  streaks,
}: AthleteListItemProps) => {
  return (
    <div className="flex gap-3 items-center p-2">
      <div
        className={clsx(
          "font-bold text-xl text-white rounded-full w-8 h-8 flex items-center justify-center",
          getColor(place)
        )}
      >
        {place}
      </div>
      <div className="flex flex-col text-lg items-start">
        <Link href={`athletes/${athlete.userId}`} className="hover:underline">
          {athlete.name}
        </Link>
        <p className="text-gray-500 text-md">
          <div className="flex gap-1 h-6 items-center text-base font-light">
            <Clock className="w-4 h-4" />
            <span>{formatToHours(statistics.totalTime)}</span>
            <Separator orientation="vertical" className="mx-1" />
            <Route className="w-4 h-4" />
            <span>{formatToKilometers(statistics.totalDistance)}</span>
            <Separator orientation="vertical" className="mx-1" />
            <StreaksLabel
              currentStreak={streaks.currentStreak}
              longestStreak={streaks.longestStreak}
            />
          </div>
        </p>
      </div>
    </div>
  );
};

const getColor = (index: number) => {
  switch (index) {
    case 1:
      return "bg-yellow-500";
    case 2:
      return "bg-zinc-500";
    case 3:
      return "bg-amber-700";
    default:
      return "bg-gray-200";
  }
};

type AthleteListItemProps = {
  place: number;
  athlete: Athlete;
  statistics: {
    totalTime: number;
    totalDistance: number;
  };
  streaks: {
    currentStreak: number;
    longestStreak: number;
  };
};
