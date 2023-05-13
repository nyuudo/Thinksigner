// import stlye form styles file
import { StyledDiv } from "./Escena.styles";
// added property type to PROPS
export const Escena = ({ text }: { text: string }) => {
  return <StyledDiv>{text}</StyledDiv>;
};
