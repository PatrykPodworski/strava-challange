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
      <p>
        Current streak: {currentStreak} {currentStreak === 1 ? "day" : "days"}
      </p>
      <p>
        Longest streak: {longestStreak} {longestStreak === 1 ? "day" : "days"}
      </p>
    </div>
  );
};

type StreaksPopoverContentProps = {
  isStreakAboutToBeLost: boolean;
  longestStreak: number;
  currentStreak: number;
};
