import Link from "next/link";
import Activity from "@/lib/activities/Activity";
import formatToHours from "@/utils/formatToHours";
import formatToKilometers from "@/utils/formatToKilometers";
import { Separator } from "./ui/separator";
import { formatDate } from "@/utils/formatDate";
import { RulerHorizontalIcon, TimerIcon } from "@radix-ui/react-icons";

// TODO: P2 Move all shadcn/ui components
export const ActivityListItem = ({
  activity,
  index,
}: ActivityListItemProps) => {
  return (
    <div className="flex h-16 gap-2 items-center">
      <span className="text-xl font-bold">
        {index.toString().padStart(3, "0")}
      </span>
      <Separator orientation="vertical" />
      <div className="flex flex-col gap-2 grow">
        <Link
          className="hover:underline text-lg"
          href={`https://www.strava.com/activities/${activity.id}`}
        >
          {formatDate(activity.startDate)} {activity.name}
        </Link>
        <Separator />
        <div className="flex gap-2 h-6">
          <div className="flex items-center gap-1">
            <TimerIcon className="w-5 h-5" />
            {formatToHours(activity.time)}
          </div>
          <Separator orientation="vertical" />
          <div className="flex items-center gap-1">
            <RulerHorizontalIcon className="w-5 h-5" />
            {formatToKilometers(activity.distance)}
          </div>
        </div>
      </div>
    </div>
  );
};

type ActivityListItemProps = {
  index: number;
  activity: Activity;
};
