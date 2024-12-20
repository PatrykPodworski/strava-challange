import { Route } from "lucide-react";
import formatToKilometers from "@/utils/formatToKilometers";
import { StatisticLabel } from "@/components/statistic-label";
import { PlaceMarker } from "@/components/place-maker";

export const SingleStatListItem = ({
  name,
  value,
  place,
}: SingleStatListItemProps) => {
  return (
    <li className="flex gap-3 items-center p-2">
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
