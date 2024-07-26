import { getGameComponent } from "@/lib/games";
import { createClient } from "@/utils/supabase/server";

export default async function GamePage({
  params,
}: {
  params: { gameId: string };
}) {
  const supabase = createClient();
  const GameComponent = getGameComponent(Number(params.gameId));
  const { data } = await supabase
    .from("games")
    .select()
    .eq("id", params.gameId)
    .single();

  return (
    <section className="grid grid-cols-3 grid-rows-3 gap-4">
      <div className="bento-box bg-eggshell space-y-4">
        <h2 className="text-xl capitalize">{data?.name}</h2>
        <p>{data?.description}</p>
      </div>
      <div className="bento-box bg-eggshell col-span-2 min-h-96 h-full">
        <GameComponent />
      </div>
    </section>
  );
}
