import Link from "next/link";
import { tryGetAthleteActivities } from "@/lib/activities/strava/try-get-athlete-activities";
import { getAthlete } from "@/lib/athletes/getAthlete";
import { ActivityListItem } from "@/components/activity-list-item";
import { LastUpdate } from "@/components/last-update";
import { BackButton } from "./back-button";
import { getLocalAthleteActivities } from "@/lib/activities/local/get-local-athlete-activities";

export const revalidate = 60;

const AthletePage = async ({ params }: AthletePageProps) => {
  const { id } = await params;

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

  const activities = await getLocalAthleteActivities(athlete.userId);

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
  params: Promise<{
    id: string;
  }>;
};

export default AthletePage;
