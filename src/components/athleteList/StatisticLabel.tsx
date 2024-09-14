import clsx from "clsx";

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
  icon: React.ReactNode;
  value: string;
  clickable?: boolean;
  className?: string;
};
