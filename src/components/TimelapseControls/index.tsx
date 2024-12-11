import { useState } from "react";
import { ExpandButton } from "./ExpandButton";
import { PlayButton } from "./PlayButton";
import { RestartButton } from "./RestartButton";
import { TimelapseConfig } from "./TimelapseConfig";

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
        <RestartButton onClick={restart} />
        <PlayButton onClick={togglePlay} isPlaying={isPlaying} />
      </div>
      {isExpanded ? (
        <TimelapseConfig
          delay={delay}
          setDelay={setDelay}
          stepSize={stepSize}
          setStepSize={setStepSize}
        />
      ) : (
        <ExpandButton onClick={expand} />
      )}
    </div>
  );
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
