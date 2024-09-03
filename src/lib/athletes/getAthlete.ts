import getAthletes from "./getAthletes";

// TODO: P3 query for a single athlete

export const getAthlete = async (userId: number) => {
  const athletes = await getAthletes();
  return athletes.find((athlete) => athlete.userId === userId);
};
