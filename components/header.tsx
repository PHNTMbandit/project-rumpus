import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AccountButton } from "./buttons/account-button";
import { NavBar } from "./nav-bar";

export interface HeaderProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("sticky top-0 flex p-8 justify-between", className)}
        ref={ref}
        {...props}>
        {children}
        <div className="flex gap-10 items-center">
          <Link href="/">
            <h1>Project Rumpus</h1>
          </Link>
          <NavBar />
        </div>
        <AccountButton />
      </div>
    );
  }
);

Header.displayName = "Header";

export { Header };
