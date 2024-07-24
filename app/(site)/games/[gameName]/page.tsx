import { Badge } from "@/components/ui/badge";
import { games } from "@/lib/games";
import { Game } from "@/types/game";

export default function GamePage({ params }: { params: { gameName: string } }) {
  const game: Game | undefined = Object.values(games).find(
    (game) => game.url == params.gameName
  );

  return (
    game && (
      <section className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="bento-box bg-eggshell space-y-4">
          <h2 className="text-xl">{game.title}</h2>
          <div className="space-x-4">
            <Badge>Difficulty {game.difficultyRating}</Badge>
            <Badge>Ages {game.suitableAges}</Badge>
          </div>
          <p>{game.description}</p>
        </div>
        <div className="bento-box bg-eggshell col-span-2 min-h-96 h-full">
          <game.component />
        </div>
      </section>
    )
  );
}
