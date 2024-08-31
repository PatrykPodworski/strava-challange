import clsx from "clsx";
import Image from "next/image";
import getAthletesWithStatistics from "./lib/getAthletesWithStatistics";
import formatToHours from "./utils/formatToHours";
import formatToKilometers from "./utils/formatToKilometers";
import config from "./utils/config";

// TODO: P0 Data validation screen
// TODO: P0 Last update date
// TODO: P0 Adjust start and end date
// TODO: P1 Refreshing data
// TODO: P1 Link to Athlete
// TODO: P1 Club link
// TODO: P2 Unify imports
// TODO: P2 Oauth flow
// TODO: P3 Logging wrapper (start, end, errors)
// TODO: P3 Duration progress bar
// TODO: P3 Cumulative values with examples

const Home = async () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;
  const athletes = await getAthletesWithStatistics();
  const sorted = athletes.sort(
    (a, b) => b.statistics.totalTime - a.statistics.totalTime
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex items-center mb-8 gap-4">
        <Image src="/trophy.png" alt="trophy" width={128} height={128} />
        <div className="max-w-sm">
          <h1 className="text-4xl font-bold mb-2">
            XtraMile Sport Challenge 2024
          </h1>
          <p className="text-gray-500">
            {CHALLENGE_START_DATE.toDateString()} -{" "}
            {CHALLENGE_END_DATE.toDateString()}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {sorted.map((athlete, index) => (
          <div key={athlete.athlete.userId} className="flex gap-3 items-center">
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
