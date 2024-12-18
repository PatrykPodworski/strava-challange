import { Ref } from "react";
import { AthleteListItem } from "./AthleteListItem";
import { ListItem } from "./ListItem";

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
