import getAthletesWithStatistics from "./lib/getAthletesWithStatistics";
import formatToHours from "./utils/formatToHours";
import formatToKilometers from "./utils/formatToKilometers";

const Home = async () => {
  const athletes = await getAthletesWithStatistics();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Strava Challenge</h1>
      {athletes.map((athlete) => (
        <div key={athlete.athlete.id}>
          <p>{athlete.athlete.name}</p>
          <p>{formatToKilometers(athlete.statistics.totalDistance)}</p>
          <p>{formatToHours(athlete.statistics.totalTime)}</p>
        </div>
      ))}
    </main>
  );
};

export default Home;
