"use client";

import Athlete from "@/lib/athletes/Athlete";
import { initializeAthlete } from "@/lib/athletes/initializeAthlete";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// TODO: P2 Handle refresh
// TODO: P2 Handle already added status

const AuthCallback = () => {
  const [error, setError] = useState(false);
  const [athlete, setAthlete] = useState<Athlete>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      return;
    }

    window.history.replaceState({}, document.title, window.location.pathname);
    initializeAthlete(code)
      .then((x) => {
        setAthlete(x);
      })
      .catch(() => setError(true));
  }, [searchParams]);

  if (error) {
    return (
      <main className="text-center grow">
        <h2 className="text-xl font-bold text-wrap">
          An error occurred. Please try again later. If the problem persists,
          contact support.
        </h2>
      </main>
    );
  }

  if (!athlete) {
    return (
      <main className="text-center grow">
        <p className="animate-spin">Loading...</p>
      </main>
    );
  }

  return (
    <main className="text-center grow">
      <h2 className="text-xl font-bold">
        {`Congratulations, ${athlete.name}! You've been added to the leaderboard.`}
      </h2>
      <p>
        Click{" "}
        <Link href="/" className="underline text-blue-500 hover:text-blue-700">
          here
        </Link>{" "}
        to go back to the leaderboard.
      </p>
    </main>
  );
};

export default AuthCallback;
