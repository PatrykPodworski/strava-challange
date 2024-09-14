import clsx from "clsx";
import Link from "next/link";
import Athlete from "@/lib/athletes/Athlete";
import formatToHours from "@/utils/formatToHours";
import formatToKilometers from "@/utils/formatToKilometers";
import { Separator } from "../ui/separator";
import { StreaksLabel, StreaksLabelProps } from "./StreaksLabel";
import { Clock, Route } from "lucide-react";

// TODO: P1 Improve mobile experience (view)
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
      <div className="flex flex-col text-xl items-start">
        <Link href={`athletes/${athlete.userId}`} className="hover:underline">
          {athlete.name}
        </Link>
        <div>
          <div className="flex gap-1 items-center text-lg text-gray-500 flex-wrap">
            <StatisticLabel
              icon={<Clock className="w-5 h-5" />}
              value={formatToHours(statistics.totalTime)}
            />
            <Separator orientation="vertical" className="mx-1 h-0 sm:h-7" />
            <StatisticLabel
              icon={<Route className="w-5 h-5" />}
              value={formatToKilometers(statistics.totalDistance)}
            />
            <Separator orientation="vertical" className="mx-1 h-0 sm:h-7" />
            <StreaksLabel
              currentStreak={5}
              isStreakActive={false}
              longestStreak={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatisticLabel = ({ icon, value }: StatisticLabelProps) => {
  return (
    <div className="flex gap-1 items-center text-lg text-gray-500">
      {icon}
      <span className="text-base">{value}</span>
    </div>
  );
};

type StatisticLabelProps = {
  icon: React.ReactNode;
  value: string;
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
  streaks: StreaksLabelProps;
};
