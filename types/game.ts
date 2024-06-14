import { IconType } from "react-icons";

export type Game = {
  title: string;
  url: string;
  icon: IconType;
  description: string;
  component: React.FC;
};
