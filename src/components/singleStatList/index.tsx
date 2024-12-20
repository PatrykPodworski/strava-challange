import {
  SingleStatListItem,
  SingleStatListItemProps,
} from "./SingleStatListItem";

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
