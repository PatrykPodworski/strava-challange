import formatToKilometers from "@/utils/formatToKilometers";

// TODO: P2 Add icons
// TODO: P3 Sort by distance
export const DistancePopoverContent = ({
  walk,
  ride,
  run,
}: DistancePopoverContentProps) => {
  return (
    <div className="text-sm text-gray-700">
      {walk > 0 && <p>Walk: {formatToKilometers(walk)}</p>}
      {run > 0 && <p>Run: {formatToKilometers(run)}</p>}
      {ride > 0 && <p>Ride: {formatToKilometers(ride)}</p>}
    </div>
  );
};

export type DistancePopoverContentProps = {
  walk: number;
  ride: number;
  run: number;
};
