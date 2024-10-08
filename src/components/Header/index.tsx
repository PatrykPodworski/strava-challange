import { Calendar } from "lucide-react";
import config from "@/utils/config";
import { formatDate } from "@/utils/formatDate";
import { Logo } from "./Logo";
import { ChallengeProgress } from "./ChallengeProgress";

export const Header = () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;

  return (
    <div className="max-w-4xl flex flex-col items-center gap-2 m-auto sm:mb-4">
      <div className="flex flex-col items-center gap-4 self-center text-center sm:flex-row sm:text-start">
        <Logo />
        <div>
          <h1 className="text-4xl font-bold mb-2">
            XtraMile Sport
            <br /> Challenge 2024
          </h1>
          <p className="text-gray-500 max-w-sm text-center text-xl flex items-center gap-2">
            <Calendar />
            {formatDate(CHALLENGE_START_DATE)} -{" "}
            {formatDate(CHALLENGE_END_DATE)}
          </p>
        </div>
      </div>
      <ChallengeProgress />
    </div>
  );
};
