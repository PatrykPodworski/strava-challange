export const StreaksPopoverContent = ({
  isStreakAboutToBeLost,
  longestStreak,
  currentStreak,
}: StreaksPopoverContentProps) => {
  return (
    <div className="text-sm text-gray-700">
      {isStreakAboutToBeLost && (
        <p className="text-gray-800 font-bold">
          Add an activity today to keep your streak!
        </p>
      )}
      <p>Longest streak: {longestStreak} days</p>
      {isStreakAboutToBeLost && <p>Current streak: {currentStreak} days</p>}
    </div>
  );
};

type StreaksPopoverContentProps = {
  isStreakAboutToBeLost: boolean;
  longestStreak: number;
  currentStreak: number;
};
