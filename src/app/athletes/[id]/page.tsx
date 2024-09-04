import Link from "next/link";
import { ArrowUturnLeft } from "@/components/icons/ArrowUturnLeft";
import { tryGetAthleteActivities } from "@/lib/tryGetAthleteActivities";
import { getAthlete } from "@/lib/athletes/getAthlete";
import { ActivityListItem } from "@/components/ActivityListItem";
import { LastUpdate } from "@/components/LastUpdate";
import { BackButton } from "./BackButton";

export const revalidate = 60;

const AthletePage = async ({ params: { id } }: AthletePageProps) => {
  const userId = parseInt(id, 10);
  const athlete = await getAthlete(userId);

  if (!athlete) {
    return (
      <main className="flex flex-col items-center grow">
        <h2 className="text-2xl font-bold">Athlete not found</h2>
        <BackButton />
      </main>
    );
  }

  const activities = await tryGetAthleteActivities(athlete);

  return (
    <main className="flex flex-col items-center grow">
      <Link
        className="hover:underline"
        href={`https://www.strava.com/athletes/${athlete.userId}`}
      >
        <h2 className=" text-2xl font-bold">{athlete.name}</h2>
      </Link>
      <h3 className="text-gray-700">
        Recorded {activities.length} activities in the challenge
      </h3>
      <LastUpdate />
      <div className="flex flex-col gap-12 my-8">
        {activities.map((x, index) => (
          <ActivityListItem
            key={x.id}
            activity={x}
            index={activities.length - index}
          />
        ))}
      </div>
      <BackButton />
    </main>
  );
};

type AthletePageProps = {
  params: {
    id: string;
  };
};

export default AthletePage;
