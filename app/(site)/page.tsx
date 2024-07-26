import { GameCard } from "@/components/game-card";
import { getGames } from "@/lib/games";
import { createClient } from "@/utils/supabase/server";

export default async function SitePage() {
  const supabase = createClient();
  const games = await getGames(supabase);

  return (
    <div className="flex gap-4 flex-wrap place-self-start">
      {games?.map((game, index) => (
        <GameCard
          key={index}
          game={game}
        />
      ))}
    </div>
  );
}
