import Image from "next/image";
import getAthletesWithStatistics from "../lib/getAthletesWithStatistics";
import config from "../utils/config";
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
      <footer className="self-end text-end text-gray-300 text-xs">
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

export default Home;
