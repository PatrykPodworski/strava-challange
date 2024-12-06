import { getChallengeNumberOfDays } from "./getChallengeNumberOfDays";

export const getChallengeProgress = (currentDay: number) => {
  const numberOfDays = getChallengeNumberOfDays();
  const daysLeft = numberOfDays - currentDay;

  const isFinished = daysLeft <= 0;
  if (isFinished) {
    return {
      daysLeft: 0,
      progress: 100,
      isFinished,
    };
  }

  const progress = Math.min((currentDay / numberOfDays) * 100, 100);

  return { daysLeft, progress, isFinished };
};
