export const LastUpdate = () => {
  const lastUpdate = new Date();

  return (
    <p className="text-gray-300 text-sm">
      Last update: {lastUpdate.toLocaleString("pl-PL")}
    </p>
  );
};
