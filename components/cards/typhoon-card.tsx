"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TyphoonCardType, TyphoonCardValues } from "@/types/typhoon-card";
import { TextareaWithLabel } from "../ui/textarea-with-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface TyphoonCardProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {
  card: TyphoonCardType;
}

const TyphoonCard = React.forwardRef<HTMLDivElement, TyphoonCardProps>(
  ({ card, className, children, ...props }, ref) => {
    const [text, setText] = React.useState(card?.question);

    function inputHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setText(e.target.value);
      card.question = text;
    }

    return (
      <div
        className={cn(
          "flex flex-col gap-4 justify-between aspect-square p-4 border-2 border-sunset w-56 rounded-lg",
          className
        )}
        ref={ref}
        {...props}>
        {children}
        <TextareaWithLabel
          label="Question"
          placeholder={"Type your question..."}
          value={text}
          onChange={inputHandler}
          className="border-transparent shadow-transparent focus-visible:ring-transparent"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select card type" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(TyphoonCardValues).map(([key, value]) => (
              <SelectItem
                key={key}
                value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }
);

TyphoonCard.displayName = "TyphoonCard";

export { TyphoonCard };
