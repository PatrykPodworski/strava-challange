import formatToKilometers from "@/utils/formatToKilometers";

// TODO: P2 Add icons
export const DistancePopoverContent = ({
  walk,
  ride,
  run,
}: DistancePopoverContentProps) => {
  return (
    <div className="text-sm text-gray-700">
      <p>Walk: {formatToKilometers(walk)} km</p>
      <p>Run: {formatToKilometers(run)} km</p>
      <p>Ride: {formatToKilometers(ride)} km</p>
    </div>
  );
};

export type DistancePopoverContentProps = {
  walk: number;
  ride: number;
  run: number;
};
