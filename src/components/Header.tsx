import Image from "next/image";
import config from "@/utils/config";

export const Header = () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;

  return (
    <div className="flex items-center mb-8 gap-4 self-center">
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
  );
};
