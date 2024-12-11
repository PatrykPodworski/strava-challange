import clsx from "clsx";

export const PlaceMarker = ({ place }: PlaceMarkerProps) => {
  return (
    <div
      className={clsx(
        "font-bold text-xl text-white rounded-full w-8 h-8 flex items-center justify-center",
        getColor(place)
      )}
    >
      {place}
    </div>
  );
};

const getColor = (index: number) => {
  switch (index) {
    case 1:
      return "bg-yellow-500";
    case 2:
      return "bg-zinc-500";
    case 3:
      return "bg-amber-700";
    default:
      return "bg-gray-200";
  }
};

type PlaceMarkerProps = {
  place: number;
};
