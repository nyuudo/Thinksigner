// import stlye from styles file
import { StyledBckgr } from "./Escena.styles";

export const Background = ({
  imgurl,
  children,
}: {
  imgurl: string;
  children: React.ReactNode;
}) => {
  return <StyledBckgr urlimg={imgurl}>{children}</StyledBckgr>;
};
