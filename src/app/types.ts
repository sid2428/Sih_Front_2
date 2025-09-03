import { FC } from "react";

export type Tab = "chat" | "visualize" | "compare" | "insights" | "about";
export type MapTransition = "fly" | "instant";

export interface TabConfig {
  id: Tab;
  label: string;
  icon: FC<any>;
}