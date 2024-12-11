import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export const PlayButton = ({ onClick, isPlaying }: PlayButtonProps) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={clsx("transition-all", isPlaying ? "w-[95px]" : "w-[84px]")}
    >
      {isPlaying ? (
        <Pause className="text-red-500" />
      ) : (
        <Play className="text-green-500" />
      )}
      {isPlaying ? "Pause" : "Play"}
    </Button>
  );
};

type PlayButtonProps = {
  onClick: () => void;
  isPlaying: boolean;
};
