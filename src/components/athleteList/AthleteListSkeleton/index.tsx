import { Clock, Route, Flame } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { PlaceMarker } from "@/components/place-maker";
import { StatisticLabelSkeleton } from "./statistic-label-skeleton";

export const AthleteListSkeleton = () => (
  <div className="flex flex-col sm:gap-4">
    {Array.from({ length: 9 }).map((_, index) => (
      <div key={index} className="flex gap-3 items-center p-2">
        <PlaceMarker place={index + 1} />
        <div className="flex flex-col text-xl items-start">
          <Skeleton className="w-40 h-5 my-1" />
          <div className="flex items-center text-lg text-gray-500 flex-wrap">
            <StatisticLabelSkeleton
              className="w-20"
              icon={<Clock className="w-5 h-5" />}
            />
            <StatisticLabelSkeleton
              className="w-28"
              icon={<Route className="w-5 h-5" />}
            />
            <StatisticLabelSkeleton
              className="w-24"
              icon={<Flame className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);
