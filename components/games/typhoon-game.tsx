"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TyphoonCardType } from "@/types/typhoon-card";
import { TyphoonCard } from "../cards/typhoon-card";
import { Button } from "../ui/button";
import * as Icons from "react-icons/fa";

export interface TyphoonGameProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {}

const TyphoonGame = React.forwardRef<HTMLDivElement, TyphoonGameProps>(
  ({ className, children, ...props }, ref) => {
    const [cards, setCards] = React.useState<TyphoonCardType[]>([]);

    const addEntry = () => {
      setCards([
        ...cards,
        {
          id: Date.now(),
          question: "Type Here",
          points: 0,
          value: "onePoint",
        },
      ]);
    };

    const removeEntry = (entry: TyphoonCardType) => {
      setCards(cards.filter((i) => i.id !== entry.id));
    };

    return (
      <div
        className={cn("", className)}
        ref={ref}
        {...props}>
        {children}
        <h4>{cards.length} cards</h4>
        <div className="flex flex-wrap items-center gap-4">
          {cards.map((card, index) => (
            <TyphoonCard
              key={index}
              card={card}
            />
          ))}
          <Button onClick={addEntry}>
            <Icons.FaPlus />
          </Button>
        </div>
      </div>
    );
  }
);

TyphoonGame.displayName = "TyphoonGame";

export { TyphoonGame };
