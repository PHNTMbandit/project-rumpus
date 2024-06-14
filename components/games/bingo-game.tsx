import * as React from "react";
import { cn } from "@/lib/utils";

export interface BingoGameProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {}

const BingoGame = React.forwardRef<HTMLDivElement, BingoGameProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn("mt-8", className)}
        ref={ref}
        {...props}>
        {children}
        Hi Daddy!
      </div>
    );
  }
);

BingoGame.displayName = "BingoGame";

export { BingoGame };
