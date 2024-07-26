import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Tables } from "@/types/supabase";

export interface GameCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  game: Tables<"games">;
}

const GameCard = React.forwardRef<HTMLButtonElement, GameCardProps>(
  ({ game, className, children, ...props }, ref) => {
    return (
      <Link href={`/games/${game.id.toString()}`}>
        <button
          className={cn(
            "flex flex-col justify-between bento-box w-60 aspect-square bg-sunset background hover:scale-105",
            className
          )}
          ref={ref}
          {...props}>
          {children}
          <div>
            <h3 className="text-left">{game.name}</h3>
            <p className="text-left line-clamp-3 text-sm">{game.description}</p>
          </div>
        </button>
      </Link>
    );
  }
);

GameCard.displayName = "GameCard";

export { GameCard };
