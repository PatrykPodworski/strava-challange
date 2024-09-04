import { formatDateTime } from "@/utils/formatDateTime";

export const LastUpdate = () => {
  const lastUpdate = new Date();

  return (
    <p className="text-gray-300 text-sm">
      Last update: {formatDateTime(lastUpdate)}
    </p>
  );
};
