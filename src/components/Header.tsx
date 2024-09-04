import Image from "next/image";
import config from "@/utils/config";

export const Header = () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;

  return (
    <div className="flex flex-col items-center sm:mb-8 gap-4 self-center text-center sm:flex-row sm:text-start">
      <Image src="/trophy.png" alt="trophy" width={128} height={128} />
      <div>
        <h1 className="text-4xl font-bold mb-2">
          XtraMile Sport
          <br /> Challenge 2024
        </h1>
        <p className="text-gray-500 max-w-sm text-center">
          {CHALLENGE_START_DATE.toLocaleDateString("pl-PL")} -{" "}
          {CHALLENGE_END_DATE.toLocaleDateString("pl-PL")}
        </p>
      </div>
    </div>
  );
};
