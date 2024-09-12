import { expect, test } from "vitest";
import { calculateStreaks } from "./calculateStreaks";

test("calculateStreaks returns 0 streaks for empty activities array", () => {
  expect(calculateStreaks([], new Date())).toEqual({
    currentStreak: 0,
    longestStreak: 0,
    isStreakActive: false,
  });
});

test("calculateStreaks returns 1 streak for 1 activity", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-01T00:00:00Z"))
  ).toEqual({
    currentStreak: 1,
    longestStreak: 1,
    isStreakActive: true,
  });
});

test("calculateStreaks returns 3 for 3 consecutive activities", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
    { startDate: new Date("2024-09-02T00:00:00Z") },
    { startDate: new Date("2024-09-03T00:00:00Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-03T00:00:00Z"))
  ).toEqual({
    currentStreak: 3,
    longestStreak: 3,
    isStreakActive: true,
  });
});

test("calculateStreaks returns 1 for 3 activities in 1 day", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
    { startDate: new Date("2024-09-01T12:00:00Z") },
    { startDate: new Date("2024-09-01T23:59:59Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-01T00:00:00Z"))
  ).toEqual({
    currentStreak: 1,
    longestStreak: 1,
    isStreakActive: true,
  });
});

test("calculateStreaks returns 2 for 3 activities with a gap day", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
    { startDate: new Date("2024-09-02T00:00:00Z") },
    { startDate: new Date("2024-09-04T00:00:00Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-04T00:00:00Z"))
  ).toEqual({
    currentStreak: 1,
    longestStreak: 2,
    isStreakActive: true,
  });
});

test("calculateStreaks returns current streak when there is no activity today", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
    { startDate: new Date("2024-09-02T00:00:00Z") },
    { startDate: new Date("2024-09-03T00:00:00Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-04T00:00:00Z"))
  ).toEqual({
    currentStreak: 3,
    longestStreak: 3,
    isStreakActive: false,
  });
});

test("calculateStreaks resets current streak when there is no yesterday activity", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
    { startDate: new Date("2024-09-02T00:00:00Z") },
    { startDate: new Date("2024-09-03T00:00:00Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-05T00:00:00Z"))
  ).toEqual({
    currentStreak: 0,
    longestStreak: 3,
    isStreakActive: false,
  });
});

test("calculateStreaks returns isStreakActive as false when there is no activity today", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-02T00:00:00Z"))
  ).toEqual({
    currentStreak: 1,
    longestStreak: 1,
    isStreakActive: false,
  });
});

test("calculateStreaks returns isStreakActive as true when there is activity today", () => {
  const activities: Parameters<typeof calculateStreaks>[0] = [
    { startDate: new Date("2024-09-01T00:00:00Z") },
    { startDate: new Date("2024-09-02T00:00:00Z") },
  ];

  expect(
    calculateStreaks(activities, new Date("2024-09-02T00:00:00Z"))
  ).toEqual({
    currentStreak: 2,
    longestStreak: 2,
    isStreakActive: true,
  });
});
