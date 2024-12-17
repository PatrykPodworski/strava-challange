import { Badge } from "@/components/ui/badge";
import { wrapperClass } from "./wrapperClass";

export const NavigationListItem = ({ title }: NavigationListItemProps) => (
  <li className={wrapperClass}>
    <span>{title}</span>
    <Badge className="font-light" variant="secondary">
      Soon
    </Badge>
  </li>
);

type NavigationListItemProps = {
  title: string;
};
