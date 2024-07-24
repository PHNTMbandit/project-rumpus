import { GameCard } from "@/components/game-card";
import { games } from "@/lib/games";

export default async function SitePage() {
  return (
    <div className="flex gap-4 flex-wrap place-self-start">
      {Object.values(games).map((game, index) => (
        <GameCard
          key={index}
          game={game}
        />
      ))}
    </div>
  );
}
