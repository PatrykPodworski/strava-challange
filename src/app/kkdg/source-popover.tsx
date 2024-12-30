import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const SourcePopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="ghost">Source</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Image src="/2024-kkdg.png" alt="KKDG 2024" width={588} height={749} />
    </PopoverContent>
  </Popover>
);
