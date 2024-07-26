"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as Icons from "react-icons/fa";

export interface BingoGameProps
  extends React.AnchorHTMLAttributes<HTMLDivElement> {}

type BingoEntry = {
  id: number;
  value: string;
};

const BingoGame = React.forwardRef<HTMLDivElement, BingoGameProps>(
  ({ className, children, ...props }, ref) => {
    const [entries, setEntries] = React.useState<BingoEntry[]>([
      { id: Date.now(), value: "" },
    ]);

    const addEntry = () => {
      setEntries([...entries, { id: Date.now(), value: "" }]);
    };

    const removeEntry = (entry: BingoEntry) => {
      setEntries(entries.filter((i) => i.id !== entry.id));
    };

    const drawEntry = () => {
      const randomEntry = entries[Math.floor(Math.random() * entries.length)];
      console.log(randomEntry.value);
    };

    return (
      <div
        className={cn("space-y-4", className)}
        ref={ref}
        {...props}>
        {children}
        {entries.map((entry, index) => (
          <div
            key={index}
            className="flex gap-2">
            {entries.length > 1 && (
              <Button
                size={"icon"}
                onClick={() => removeEntry(entry)}>
                <Icons.FaMinus />
              </Button>
            )}
            <Input
              placeholder={"Type your bingo entry..."}
              value={entry.value}
              onChange={(e) => {
                const newEntries = [...entries];
                newEntries[index].value = e.target.value;
                setEntries(newEntries);
              }}
            />
          </div>
        ))}
        <Button
          size={"icon"}
          onClick={addEntry}>
          <Icons.FaPlus />
        </Button>
        <Button onClick={() => drawEntry()}>Draw Entry</Button>
      </div>
    );
  }
);

BingoGame.displayName = "BingoGame";

export { BingoGame };
