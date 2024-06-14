import * as React from "react";
import { cn } from "@/lib/utils";
import { Game } from "@/types/game";
import Link from "next/link";

export interface GameCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  game: Game;
}

const GameCard = React.forwardRef<HTMLButtonElement, GameCardProps>(
  ({ game, className, children, ...props }, ref) => {
    return (
      <Link href={`/games/${game.url}`}>
        <button
          className={cn(
            "flex flex-col justify-between bento-box w-60 aspect-square bg-sunset background hover:scale-105",
            className
          )}
          ref={ref}
          {...props}>
          {children}
          <game.icon size={80} />
          <div>
            <h3 className="text-left">{game.title}</h3>
            <p className="text-left line-clamp-3 text-sm">{game.description}</p>
          </div>
        </button>
      </Link>
    );
  }
);

GameCard.displayName = "GameCard";

export { GameCard };
