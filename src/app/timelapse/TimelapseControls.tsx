import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TimelapseControls = ({ onRestart }: TimelapseControlsProps) => (
  <div>
    <Button variant={"outline"} onClick={onRestart}>
      <RotateCcw />
      Restart
    </Button>
  </div>
);

type TimelapseControlsProps = {
  onRestart: () => void;
};
