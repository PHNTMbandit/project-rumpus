import { Label } from "./label";
import { Textarea } from "./textarea";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaWithLabelProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder: string;
}

const TextareaWithLabel = React.forwardRef<
  HTMLTextAreaElement,
  TextareaWithLabelProps
>(({ label, placeholder, className, children, ...props }, ref) => {
  return (
    <div className="flex flex-col w-full gap-1.5 flex-grow">
      {children}
      <Label htmlFor="message">{label}</Label>
      <Textarea
        ref={ref}
        {...props}
        placeholder={placeholder}
        id="message"
        className={cn("p-0 h-full resize-none", className)}
      />
    </div>
  );
});

TextareaWithLabel.displayName = "TextareaWithLabel";

export { TextareaWithLabel };
