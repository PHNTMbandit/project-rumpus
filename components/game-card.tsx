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
      <Link href={`/games/${game.title}`}>
        <button
          className={cn(
            "bento-box w-80 aspect-video flex flex-col gap-2",
            className
          )}
          ref={ref}
          {...props}>
          {children}
          <div className="flex items-center justify-center gap-2">
            <game.icon size={25} />
            <h3>{game.title}</h3>
          </div>
          <p className="text-left line-clamp-5">{game.description}</p>
        </button>
      </Link>
    );
  }
);

GameCard.displayName = "GameCard";

export { GameCard };
