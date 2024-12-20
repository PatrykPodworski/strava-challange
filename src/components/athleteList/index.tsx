import { Ref } from "react";
import { ListItem } from "./ListItem";
import { Streaks } from "@/lib/activities/streaks/Streaks";
import Athlete from "@/lib/athletes/Athlete";
import { Statistics } from "@/lib/calculateStatistics";

export const AthleteList = ({ athletes, ref }: AthleteListProps) => {
  return (
    <ol className="flex flex-col sm:gap-4" ref={ref}>
      {athletes.map(({ athlete, statistics, streaks }, index) => (
        <ListItem
          key={athlete.userId}
          athlete={athlete}
          place={index + 1}
          statistics={statistics}
          streaks={streaks}
        />
      ))}
    </ol>
  );
};

type AthleteListProps = {
  athletes: AthleteListItem[];
  ref?: Ref<HTMLOListElement>;
};

type AthleteListItem = {
  athlete: Athlete;
  statistics: Statistics;
  streaks: Streaks;
};
