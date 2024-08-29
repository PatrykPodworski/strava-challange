import clsx from "clsx";
import getAthletesWithStatistics from "./lib/getAthletesWithStatistics";
import formatToHours from "./utils/formatToHours";
import formatToKilometers from "./utils/formatToKilometers";

const Home = async () => {
  const athletes = await getAthletesWithStatistics();

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Strava Challenge</h1>
      <div className="flex flex-col gap-8">
        {[...athletes, ...athletes, ...athletes].map((athlete, index) => (
          <div key={athlete.athlete.id} className="flex gap-3 items-center">
            <div
              className={clsx(
                "font-bold text-xl text-white rounded-full w-8 h-8 flex items-center justify-center",
                getColor(index)
              )}
            >
              {index + 1}
            </div>
            <div className="flex flex-col ">
              <span>{athlete.athlete.name}</span>
              <p className="text-gray-500 text-sm self-end">
                <span>
                  {formatToHours(athlete.statistics.totalTime)},{" "}
                  {formatToKilometers(athlete.statistics.totalDistance)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const getColor = (index: number) => {
  switch (index) {
    case 0:
      return "bg-yellow-500";
    case 1:
      return "bg-zinc-500";
    case 2:
      return "bg-amber-700";
    default:
      return "bg-gray-200";
  }
};

export default Home;
