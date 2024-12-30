import { Route } from "lucide-react";
import formatToKilometers from "@/utils/formatToKilometers";
import { StatisticLabel } from "@/components/statistic-label";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
} from "@/components/ui/popover";
import {
  DistancePopoverContent,
  DistancePopoverContentProps,
} from "./distance-popover-content";

export const DistanceLabel = ({
  totalDistance,
  ...props
}: DistanceLabelProps) => {
  const hasAnyDistance = totalDistance > 0;

  return (
    <Popover>
      <PopoverTrigger disabled={!hasAnyDistance}>
        <StatisticLabel
          clickable={hasAnyDistance}
          className="w-28"
          icon={<Route className="w-5 h-5" />}
          value={formatToKilometers(totalDistance)}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <DistancePopoverContent {...props} />
      </PopoverContent>
    </Popover>
  );
};

export type DistanceLabelProps = DistancePopoverContentProps & {
  totalDistance: number;
};
