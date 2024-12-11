import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ExpandButton = ({ onClick }: ExpandButtonProps) => {
  return (
    <Button variant="ghost" onClick={onClick}>
      <ChevronDown />
      Configure
    </Button>
  );
};

type ExpandButtonProps = {
  onClick: () => void;
};
