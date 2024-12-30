import Link from "next/link";
import { Clock } from "lucide-react";
import formatToHours from "@/utils/formatToHours";
import { Athlete } from "@/models/mr-athlete";
import { Statistics } from "@/models/mr-statistics";
import { Streaks } from "@/models/mr-streaks";
import { StatisticLabel } from "@/components/statistic-label";
import { PlaceMarker } from "@/components/place-maker";
import { DistanceLabel } from "./DistanceLabel";
import { StreaksLabel } from "./StreaksLabel";

export const ListItem = ({
  athlete,
  statistics,
  place,
  streaks,
}: ListItemProps) => {
  return (
    <li className="flex gap-3 items-center p-2">
      <PlaceMarker place={place} />
      <div className="flex flex-col text-xl items-start">
        <Link href={`athletes/${athlete.userId}`} className="hover:underline">
          {athlete.name}
        </Link>
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
    </li>
  );
};

type ListItemProps = {
  place: number;
  athlete: Athlete;
  statistics: Statistics;
  streaks: Streaks;
};
