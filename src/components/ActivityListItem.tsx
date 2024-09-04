import Link from "next/link";
import Activity from "@/lib/activities/Activity";
import formatToHours from "@/utils/formatToHours";
import formatToKilometers from "@/utils/formatToKilometers";

export const ActivityListItem = ({ activity }: ActivityListItemProps) => {
  return (
    <Link
      className="hover:underline"
      href={`https://www.strava.com/activities/${activity.id}`}
    >
      <p>
        {activity.startDate.toLocaleDateString("pl-PL")} {activity.name}
      </p>
      <p>
        {formatToHours(activity.time)} {formatToKilometers(activity.distance)}
      </p>
    </Link>
  );
};

type ActivityListItemProps = {
  activity: Activity;
};
