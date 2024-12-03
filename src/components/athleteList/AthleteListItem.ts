import { Streaks } from "@/lib/activities/streaks/Streaks";
import Athlete from "@/lib/athletes/Athlete";
import { Statistics } from "@/lib/calculateStatistics";

export type AthleteListItem = {
  athlete: Athlete;
  statistics: Statistics;
  streaks: Streaks;
};
