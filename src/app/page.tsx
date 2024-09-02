import getAthletesWithStatistics from "../lib/getAthletesWithStatistics";
import { AthleteListItem } from "../components/AthleteListItem";

// TODO: P0 Data validation screen
// TODO: P0 Adjust start and end date
// TODO: P1 Oauth flow
// TODO: P1 Club link
// TODO: P2 Unify imports
// TODO: P3 Logging wrapper (start, end, errors)
// TODO: P3 Duration progress bar
// TODO: P3 Cumulative values with examples

export const revalidate = 60;

const Home = async () => {
  const athletes = await getAthletesWithStatistics();
  const sorted = athletes.sort(
    (a, b) => b.statistics.totalTime - a.statistics.totalTime
  );

  const lastUpdate = new Date();

  return (
    <main className="flex flex-col items-center grow">
      <div className="flex flex-col gap-4 mb-8">
        {sorted.map((data, index) => (
          <AthleteListItem
            key={data.athlete.userId}
            athlete={data.athlete}
            place={index + 1}
            statistics={data.statistics}
          />
        ))}
      </div>
      <p className="text-gray-300 text-sm">
        Last update: {lastUpdate.toLocaleDateString()}{" "}
        {lastUpdate.toLocaleTimeString()}
      </p>
    </main>
  );
};

export default Home;
