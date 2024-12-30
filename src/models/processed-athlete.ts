import { Athlete } from "./mr-athlete";
import { Statistics } from "./mr-statistics";
import { Streaks } from "./mr-streaks";

export type ProcessedAthlete = {
  athlete: Athlete;
  statistics: Statistics;
  streaks: Streaks;
};

export const sortByTotalTime = (a: ProcessedAthlete, b: ProcessedAthlete) =>
  b.statistics.totalTime - a.statistics.totalTime;

export const sortByDistance = (a: ProcessedAthlete, b: ProcessedAthlete) =>
  b.statistics.distance.totalDistance - a.statistics.distance.totalDistance;

export const sortBySteaks = (a: ProcessedAthlete, b: ProcessedAthlete) =>
  b.streaks.longestStreak - a.streaks.longestStreak;
