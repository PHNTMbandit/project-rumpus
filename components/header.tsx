import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeaderProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("sticky top-0 border h-20", className)}
        ref={ref}
        {...props}>
        {children}
      </div>
    );
  }
);

Header.displayName = "Header";

export { Header };
