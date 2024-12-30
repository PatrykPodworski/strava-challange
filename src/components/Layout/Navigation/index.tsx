import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { NavigationListItem } from "./NavigationListItem";
import { NavigationListLink } from "./NavigationListLink";

// TODO: P2 Mark active link
export const Navigation = () => (
  <NavigationMenu className="grow-0">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Leaderboard</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:grid-cols-2 sm:w-[360px]">
            {leaderboards.map((x) =>
              x.href ? (
                <NavigationListLink key={x.href} {...x} />
              ) : (
                <NavigationListItem key={x.title} {...x} />
              )
            )}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/timelapse" className={navigationMenuTriggerStyle()}>
          Timelapse
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const leaderboards = [
  {
    title: "Time",
    href: "/",
  },
  {
    title: "KKDG",
    href: "/kkdg",
  },
  {
    title: "Distance",
    href: "/distance",
  },
  {
    title: "Streak",
  },
];
