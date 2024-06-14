import { games } from "@/lib/games";
import { Game } from "@/types/game";

export default function GamePage({ params }: { params: { gameName: string } }) {
  const game: Game | undefined = Object.values(games).find(
    (game) => game.url == params.gameName
  );

  return (
    game && (
      <section className="p-4">
        <h2 className=" text-xl">{game.title}</h2>
        <p>{game.description}</p>
        <game.component />
      </section>
    )
  );
}
