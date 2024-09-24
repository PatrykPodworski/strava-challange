import formatToKilometers from "@/utils/formatToKilometers";

// TODO: P1 Do not show if all distances are 0
// TODO: P2 Add icons
// TODO: P3 Sort by distance
export const DistancePopoverContent = ({
  walk,
  ride,
  run,
}: DistancePopoverContentProps) => {
  return (
    <div className="text-sm text-gray-700">
      {walk > 0 && <p>Walk: {formatToKilometers(walk)} km</p>}
      {run > 0 && <p>Run: {formatToKilometers(run)} km</p>}
      {ride > 0 && <p>Ride: {formatToKilometers(ride)} km</p>}
    </div>
  );
};

export type DistancePopoverContentProps = {
  walk: number;
  ride: number;
  run: number;
};
