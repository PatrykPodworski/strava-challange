import clsx from "clsx";
import Link from "next/link";
import { wrapperClass } from "./wrapperClass";

export const NavigationListLink = ({
  href,
  title,
}: NavigationListLinkProps) => (
  <Link
    href={href}
    className={clsx(
      wrapperClass,
      "hover:bg-accent transition-colors rounded-md"
    )}
  >
    <span>{title}</span>
  </Link>
);

type NavigationListLinkProps = {
  href: string;
  title: string;
};
