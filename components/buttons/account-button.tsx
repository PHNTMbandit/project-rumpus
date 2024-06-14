import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import * as Icons from "react-icons/fa";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface AccountButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AccountButton = React.forwardRef<HTMLButtonElement, AccountButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"/login"}>
              <Button
                size={"icon"}
                variant={"ghost"}
                className={cn("", className)}
                ref={ref}
                {...props}>
                {children}
                <Icons.FaRegUser size={20} />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Sign In</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

AccountButton.displayName = "AccountButton";

export { AccountButton };
