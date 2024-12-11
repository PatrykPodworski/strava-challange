import { ChevronDown, Pause, PauseIcon, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";

// TODO: P0: Divide the components
export const TimelapseControls = ({
  restart,
  togglePlay,
  isPlaying,
  setDelay,
  delay,
  setStepSize,
  stepSize,
}: TimelapseControlsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => setIsExpanded(true);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 justify-between min-w-52">
        <Button variant="outline" onClick={restart}>
          <RotateCcw />
          Restart
        </Button>
        <PlayButton onClick={togglePlay} isPlaying={isPlaying} />
      </div>
      {isExpanded ? (
        <div>
          <Label htmlFor="delay">Delay (miliseconds)</Label>
          <Input
            id="delay"
            type="number"
            min={100}
            step={100}
            value={delay}
            onChange={(e) => setDelay(parseValue(e))}
          />
          <Label htmlFor="stepSize">Step size (days)</Label>
          <Input
            id="stepSize"
            type="number"
            min={1}
            value={stepSize}
            onChange={(e) => setStepSize(parseValue(e))}
          />
        </div>
      ) : (
        <Button variant="ghost" onClick={expand}>
          <ChevronDown />
          Configure
        </Button>
      )}
    </div>
  );
};

const parseValue = (event: ChangeEvent<HTMLInputElement>) => {
  const value = parseInt(event.target.value);
  return isNaN(value) ? parseInt(event.target.min) : value;
};

const PlayButton = ({ onClick, isPlaying }: PlayButtonProps) => {
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

type TimelapseControlsProps = {
  restart: () => void;
  togglePlay: () => void;
  isPlaying: boolean;
  delay: number;
  setDelay: (delay: number) => void;
  stepSize: number;
  setStepSize: (stepSize: number) => void;
};
