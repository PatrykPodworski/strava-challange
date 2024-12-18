import clsx from "clsx";
import Link from "next/link";
import Athlete from "@/lib/athletes/Athlete";
import formatToHours from "@/utils/formatToHours";
import { StreaksLabel } from "./StreaksLabel";
import { Clock, Route } from "lucide-react";
import { StatisticLabel } from "./StatisticLabel";
import { Statistics } from "@/lib/calculateStatistics";
import { DistanceLabel } from "./DistanceLabel";
import { Streaks } from "@/lib/activities/streaks/Streaks";
import { PlaceMarker } from "./PlaceMarker";
import formatToKilometers from "@/utils/formatToKilometers";

// TODO: P0 Move components
export const liClass = "flex gap-3 items-center p-2";

export const SingleStatListItem = ({
  name,
  value,
  place,
}: SingleStatListItemProps) => {
  return (
    <li className={liClass}>
      <PlaceMarker place={place} />
      <span className="text-xl w-24">{name}</span>
      <div className="text-lg text-gray-500">
        <StatisticLabel
          icon={<Route className="w-5 h-5" />}
          value={formatToKilometers(value)}
        />
      </div>
    </li>
  );
};

export type SingleStatListItemProps = {
  name: string;
  value: number;
  place: number;
};

export const ListItem = ({
  athlete,
  statistics,
  place,
  streaks,
}: ListItemProps) => {
  return (
    <li className={liClass}>
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
