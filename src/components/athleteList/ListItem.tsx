import clsx from "clsx";
import Link from "next/link";
import Athlete from "@/lib/athletes/Athlete";
import formatToHours from "@/utils/formatToHours";
import { StreaksLabel } from "./StreaksLabel";
import { Clock } from "lucide-react";
import { StatisticLabel } from "./StatisticLabel";
import { Statistics } from "@/lib/calculateStatistics";
import { DistanceLabel } from "./DistanceLabel";
import { Streaks } from "@/lib/activities/streaks/Streaks";

export const ListItem = ({
  athlete,
  statistics,
  place,
  streaks,
}: ListItemProps) => {
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
          <div className="flex items-center text-lg text-gray-500 flex-wrap">
            <StatisticLabel
              className="w-20"
              icon={<Clock className="w-5 h-5" />}
              value={formatToHours(statistics.totalTime)}
            />
            <DistanceLabel {...statistics.distance} />
            <StreaksLabel {...streaks} />
          </div>
        </div>
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

type ListItemProps = {
  place: number;
  athlete: Athlete;
  statistics: Statistics;
  streaks: Streaks;
};
