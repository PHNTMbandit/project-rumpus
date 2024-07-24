"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import * as Icons from "react-icons/pi";
import { Button } from "../ui/button";

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ className, children, ...props }, ref) => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        type="submit"
        className={cn("", className)}
        ref={ref}
        {...props}>
        {pending ? (
          <Icons.PiSpinnerBold
            size={20}
            className="animate-spin"
          />
        ) : (
          <>{children}</>
        )}
      </Button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";

export { SubmitButton };
