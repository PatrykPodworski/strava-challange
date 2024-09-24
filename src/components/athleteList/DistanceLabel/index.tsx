import { Route } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { StatisticLabel } from "../StatisticLabel";
import formatToKilometers from "@/utils/formatToKilometers";
import {
  DistancePopoverContent,
  DistancePopoverContentProps,
} from "./DistancePopoverContent";

export const DistanceLabel = ({ total, ...props }: DistanceLabelProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <StatisticLabel
          clickable
          className="w-28"
          icon={<Route className="w-5 h-5" />}
          value={formatToKilometers(total)}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <DistancePopoverContent {...props} />
      </PopoverContent>
    </Popover>
  );
};

export type DistanceLabelProps = DistancePopoverContentProps & {
  total: number;
};
