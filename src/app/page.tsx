import clsx from "clsx";
import Image from "next/image";
import getAthletesWithStatistics from "./lib/getAthletesWithStatistics";
import formatToHours from "./utils/formatToHours";
import formatToKilometers from "./utils/formatToKilometers";
import config from "./utils/config";
import { format } from "date-fns";

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

export const revalidate = 60;

const Home = async () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;
  const athletes = await getAthletesWithStatistics();
  const sorted = athletes.sort(
    (a, b) => b.statistics.totalTime - a.statistics.totalTime
  );

  const lastUpdate = new Date();

  return (
    <div className="flex flex-col justify-between min-h-screen p-8">
      <main className="flex flex-col items-center ">
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
        <div className="flex flex-col gap-8 mb-8">
          {sorted.map((athlete, index) => (
            <div
              key={athlete.athlete.userId}
              className="flex gap-3 items-center"
            >
              <div
                className={clsx(
                  "font-bold text-xl text-white rounded-full w-8 h-8 flex items-center justify-center",
                  getColor(index)
                )}
              >
                {index + 1}
              </div>
              <div className="flex flex-col text-lg">
                <span>{athlete.athlete.name}</span>
                <p className="text-gray-500 text-md self-end">
                  <span>
                    {formatToHours(athlete.statistics.totalTime)},{" "}
                    {formatToKilometers(athlete.statistics.totalDistance)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm">
          Last update: {format(lastUpdate, "dd.MM.yyyy, HH:mm:ss")}
        </p>
      </main>
      <footer className="self-end text-end text-gray-400 text-xs">
        <p>
          Icons by{" "}
          <a href="https://freepik.com" className="hover:underline">
            Freepik
          </a>
        </p>
      </footer>
    </div>
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
