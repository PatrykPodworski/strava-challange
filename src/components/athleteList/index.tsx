import { Ref } from "react";
import { ListItem } from "./list-item";
import { ProcessedAthlete } from "@/models/processed-athlete";

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
  athletes: ProcessedAthlete[];
  ref?: Ref<HTMLOListElement>;
};
