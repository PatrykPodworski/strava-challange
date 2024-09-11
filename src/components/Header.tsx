import Image from "next/image";
import config from "@/utils/config";
import { formatDate } from "@/utils/formatDate";
import { Calendar } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const { CHALLENGE_END_DATE, CHALLENGE_START_DATE } = config;

  return (
    <div className="flex flex-col items-center sm:mb-8 gap-4 self-center text-center sm:flex-row sm:text-start">
      <Link href="/">
        <Image
          src="/trophy.png"
          alt="trophy"
          width={141}
          height={141}
          className="w-32 h-32 hover:scale-110 transition-all"
        />
      </Link>
      <div>
        <h1 className="text-4xl font-bold mb-2">
          XtraMile Sport
          <br /> Challenge 2024
        </h1>
        <p className="text-gray-500 max-w-sm text-center text-xl flex items-center gap-2">
          <Calendar />
          {formatDate(CHALLENGE_START_DATE)} - {formatDate(CHALLENGE_END_DATE)}
        </p>
      </div>
    </div>
  );
};
