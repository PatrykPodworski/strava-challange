import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const TimelapseConfig = ({
  delay,
  setDelay,
  stepSize,
  setStepSize,
}: TimelapseConfigProps) => (
  <div>
    <Label htmlFor="delay">Delay (milliseconds)</Label>
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
);

const parseValue = (event: ChangeEvent<HTMLInputElement>) => {
  const value = parseInt(event.target.value);
  return isNaN(value) ? parseInt(event.target.min) : value;
};

type TimelapseConfigProps = {
  delay: number;
  setDelay: (delay: number) => void;
  stepSize: number;
  setStepSize: (stepSize: number) => void;
};
