import clsx from "clsx";
import Athlete from "@/lib/athletes/Athlete";
import formatToHours from "@/utils/formatToHours";
import formatToKilometers from "@/utils/formatToKilometers";

export const AthleteListItem = ({
  athlete,
  statistics,
  place,
}: AthleteListItemProps) => {
  return (
    <a
      key={athlete.userId}
      className="flex gap-3 items-center p-2 cursor-pointer"
      href={`https://www.strava.com/athletes/${athlete.userId}`}
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
        <span>{athlete.name}</span>
        <p className="text-gray-500 text-md self-end">
          <span>
            {formatToHours(statistics.totalTime)},{" "}
            {formatToKilometers(statistics.totalDistance)}
          </span>
        </p>
      </div>
    </a>
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
