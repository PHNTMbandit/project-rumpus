import * as Games from "@/components/games/";
import { Database } from "@/types/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export const getGameComponent = (id: number): React.FC => {
  return games[id];
};

export const getGames = async (
  supabase: SupabaseClient<Database, "public">
) => {
  const { data } = await supabase.from("games").select();

  return data;
};

const games: Record<number, React.FC> = {
  1: Games.BingoGame,
};
