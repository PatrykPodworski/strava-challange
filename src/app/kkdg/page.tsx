import { AthleteList } from "@/components/athleteList/AthleteList";
import { ChallengeProgress } from "@/components/ChallengeProgress";
import { getTodayChallengeDay } from "@/lib/challengeProgress/getTodayChallengeDay";

const Home = async () => {
  const currentDay = getTodayChallengeDay();

  return (
    <>
      <ChallengeProgress currentDay={currentDay} />
      <div className="flex flex-col sm:gap-4">
        {data.map((x) => (
          <div key={x.name}>
            <p>
              {x.name} - {x.distance} km
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

const data = [
  {
    name: "Piotr G",
    distance: 550.7,
  },
  {
    name: "Anna R",
    distance: 260.7,
  },
  {
    name: "Patryk P",
    distance: 225.3,
  },
  {
    name: "Łukasz J",
    distance: 151.0,
  },
  {
    name: "Gosia G",
    distance: 122.8,
  },
  {
    name: "Marcin P",
    distance: 25.4,
  },
  {
    name: "Kasia S",
    distance: 18.7,
  },
  {
    name: "Paweł W",
    distance: 16.8,
  },
];
