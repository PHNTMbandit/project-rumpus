"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { games } from "@/lib/games";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export interface NavBarProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {}

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("", className)}
        ref={ref}
        {...props}>
        {children}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <h2>Games</h2>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-2">
                {Object.values(games).map((game, index) => (
                  <Link
                    key={index}
                    href={`/games/${game.url}`}
                    legacyBehavior
                    passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "w-40")}>
                      <div className="flex items-center gap-2">
                        <game.icon />
                        <h4>{game.title}</h4>
                      </div>
                    </NavigationMenuLink>
                  </Link>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  }
);

NavBar.displayName = "NavBar";

export { NavBar };
