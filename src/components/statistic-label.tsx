import clsx from "clsx";
import { ReactNode } from "react";

export const StatisticLabel = ({
  icon,
  value,
  clickable,
  className,
}: StatisticLabelProps) => {
  return (
    <div
      className={clsx(
        "flex gap-1 items-center text-lg text-gray-500",
        className
      )}
    >
      {icon}
      <span
        className={clsx(
          "text-base",
          clickable && "cursor-pointer, hover:underline"
        )}
      >
        {value}
      </span>
    </div>
  );
};

type StatisticLabelProps = {
  icon: ReactNode;
  value: string;
  clickable?: boolean;
  className?: string;
};
