import Link from "next/link";
import { ArrowUturnLeft } from "@/components/icons/ArrowUturnLeft";

const AthletePage = async () => {
  return (
    <main className="flex flex-col items-center">
      <Link
        href="/"
        className="flex gap-2 items-center p-2 cursor-pointer hover:underline"
      >
        <ArrowUturnLeft className="size-5" />
        Back to the leaderboard
      </Link>
    </main>
  );
};

export default AthletePage;
