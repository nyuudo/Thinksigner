import { StyledBckgr } from "./App.styles";
import type { BackgroundProps } from "../types";

export const Background = ({ imgurl, children }: BackgroundProps) => {
  return <StyledBckgr urlimg={imgurl}>{children}</StyledBckgr>;
};
