import { Game } from "@/types/game";
import * as Icons from "react-icons/tb";

export const games: Record<string, Game> = {
  Bingo: {
    title: "Bingo",
    url: "bingo",
    icon: Icons.TbGrid3X3,
    description:
      "Bingo is a game of chance in which players mark off numbers on cards as they are randomly drawn and called out by a caller. The objective is to be the first to complete a predetermined pattern, such as a row, column, or diagonal, and shout 'Bingo!' to win a prize",
  },
  "Memory Game": {
    title: "Memory Game",
    url: "memory-game",
    icon: Icons.TbEyeQuestion,
    description:
      "A Memory Game is a classic card game where players take turns flipping over pairs of cards, aiming to find matching pairs. The objective is to remember the positions of previously revealed cards to increase the chances of finding matches. The game continues until all pairs are found, and the player with the most pairs wins. It's a fun and engaging way to improve concentration and memory skills",
  },
};
