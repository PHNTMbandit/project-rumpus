import { games } from "@/lib/games";
import { Game } from "@/types/game";

export default function GamePage({ params }: { params: { gameName: string } }) {
  const game: Game | undefined = Object.values(games).find(
    (game) => game.url == params.gameName
  );

  return <>{game && <h2>{game.title}</h2>}</>;
}
