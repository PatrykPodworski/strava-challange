import { ArrowUturnLeft } from "@/components/icons/ArrowUturnLeft";
import Link from "next/link";

export const BackButton = () => (
  <Link
    href="/"
    className="flex gap-2 items-center p-2 cursor-pointer hover:underline"
  >
    <ArrowUturnLeft className="size-5" />
    Back to the leaderboard
  </Link>
);
