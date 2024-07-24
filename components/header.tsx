import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AccountButton } from "./buttons/account-button";
import { NavBar } from "./nav-bar";
import { ThemeToggle } from "./theme-toggle";

export interface HeaderProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "sticky top-0 grid grid-cols-3 items-center justify-items-center",
          className
        )}
        ref={ref}
        {...props}>
        {children}
        <Link
          href="/"
          className="justify-self-start">
          <h1>Project Rumpus</h1>
        </Link>
        <NavBar />
        <div className="space-x-2 justify-self-end">
          <AccountButton />
          <ThemeToggle />
        </div>
      </div>
    );
  }
);

Header.displayName = "Header";

export { Header };
