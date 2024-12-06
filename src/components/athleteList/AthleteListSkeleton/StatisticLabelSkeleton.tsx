import clsx from "clsx";
import { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const StatisticLabelSkeleton = ({
  className,
  icon,
}: StatisticLabelSkeletonProps) => (
  <div
    className={clsx("flex gap-1 items-center text-lg text-gray-500", className)}
  >
    {icon}
    <Skeleton className="h-4 my-1 min-w-12 grow mr-1" />
  </div>
);

type StatisticLabelSkeletonProps = {
  icon: ReactNode;
  className?: string;
};
