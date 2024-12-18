import { Ref } from "react";
import { AthleteListItem } from "./AthleteListItem";
import {
  ListItem,
  SingleStatListItem,
  SingleStatListItemProps,
} from "./ListItem";

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

// TODO: P0 Move components
export const SingleStatList = ({ athletes }: SingleStatListProps) => {
  return (
    <ol className="flex flex-col gap-2 sm:gap-4">
      {athletes.map((x, index) => (
        <SingleStatListItem key={index} {...x} place={index + 1} />
      ))}
    </ol>
  );
};

type SingleStatListProps = {
  athletes: Omit<SingleStatListItemProps, "place">[];
};

type AthleteListProps = {
  athletes: AthleteListItem[];
  ref?: Ref<HTMLOListElement>;
};
