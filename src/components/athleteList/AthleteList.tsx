import { forwardRef } from "react";
import { AthleteListItem } from "./AthleteListItem";
import { ListItem } from "./ListItem";

const AthleteList = forwardRef<HTMLOListElement, AthleteListProps>(
  ({ athletes }, ref) => {
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
  }
);

AthleteList.displayName = "AthleteList";
export { AthleteList };

type AthleteListProps = {
  athletes: AthleteListItem[];
};
