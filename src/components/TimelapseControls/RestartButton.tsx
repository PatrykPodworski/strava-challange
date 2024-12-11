import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RestartButton = ({ onClick }: RestartButtonProps) => {
  return (
    <Button variant="outline" onClick={onClick}>
      <RotateCcw />
      Restart
    </Button>
  );
};

type RestartButtonProps = {
  onClick: () => void;
};
