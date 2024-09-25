import formatToKilometers from "@/utils/formatToKilometers";

// TODO: P1 Do not show if all distances are 0
// TODO: P2 Add icons
// TODO: P3 Sort by distance
export const DistancePopoverContent = ({
  walkDistance,
  rideDistance,
  runDistance,
}: DistancePopoverContentProps) => {
  return (
    <div className="text-sm text-gray-700">
      {walkDistance > 0 && <p>Walk: {formatToKilometers(walkDistance)}</p>}
      {runDistance > 0 && <p>Run: {formatToKilometers(runDistance)}</p>}
      {rideDistance > 0 && <p>Ride: {formatToKilometers(rideDistance)}</p>}
    </div>
  );
};

export type DistancePopoverContentProps = {
  walkDistance: number;
  rideDistance: number;
  runDistance: number;
};
