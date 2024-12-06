import { AthleteListItem } from "./AthleteListItem";
import { ListItem } from "./ListItem";

export const AthleteList = ({ athletes }: AthleteListProps) => {
  return (
    <div className="flex flex-col sm:gap-4">
      {athletes.map(({ athlete, statistics, streaks }, index) => (
        <ListItem
          key={athlete.userId}
          athlete={athlete}
          place={index + 1}
          statistics={statistics}
          streaks={streaks}
        />
      ))}
    </div>
  );
};

type AthleteListProps = {
  athletes: AthleteListItem[];
};
