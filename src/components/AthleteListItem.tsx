import clsx from "clsx";
import Link from "next/link";
import { TimerIcon } from "@radix-ui/react-icons";
import Athlete from "@/lib/athletes/Athlete";
import formatToHours from "@/utils/formatToHours";
import formatToKilometers from "@/utils/formatToKilometers";
import { Separator } from "./ui/separator";

export const AthleteListItem = ({
  athlete,
  statistics,
  place,
}: AthleteListItemProps) => {
  return (
    <Link
      key={athlete.userId}
      className="flex gap-3 items-center p-2 cursor-pointer hover:bg-neutral-100 transition-colors duration-300 rounded"
      href={`athletes/${athlete.userId}`}
    >
      <div
        className={clsx(
          "font-bold text-xl text-white rounded-full w-8 h-8 flex items-center justify-center",
          getColor(place)
        )}
      >
        {place}
      </div>
      <div className="flex flex-col text-lg">
        <span className="hover:underline">{athlete.name}</span>
        <p className="text-gray-500 text-md">
          <div className="flex gap-1 h-6 items-center text-base font-light">
            <TimerIcon className="w-4 h-4" />
            <span>{formatToHours(statistics.totalTime)}</span>
            <Separator orientation="vertical" className="mx-1" />
            <span>{formatToKilometers(statistics.totalDistance)}</span>
          </div>
        </p>
      </div>
    </Link>
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
};
