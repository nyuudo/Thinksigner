// import stlye from styles file
import { StyledDiv } from "./Escena.styles";
// added property type to PROPS
export const Escena = ({
  id,
  text,
  level,
}: {
  id: number;
  text: string;
  level: number;
}) => {
  // use a conditional props to determine the style component
  return <StyledDiv active={level === id ? true : false}>{text}</StyledDiv>;
};
