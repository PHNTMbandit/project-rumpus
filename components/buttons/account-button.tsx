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
import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface AccountButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AccountButton = React.forwardRef<HTMLButtonElement, AccountButtonProps>(
  async ({ className, children, ...props }, ref) => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      return (
        <Avatar>
          <AvatarFallback>
            {user.user_metadata["username"].slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      );
    }

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
            <p>Login</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);

AccountButton.displayName = "AccountButton";

export { AccountButton };
